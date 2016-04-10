define(["service/data", "templates/error", "service/window"], function (dataService, templateError, windowService) {
	"use strict";

	var privateMembers = {
			"error": {
				"informationLost": "Sorry, we could not process your information.  We would love for you to attend this years Ohio Men's Ox Roast And Retreat, so please try again later or contact us at info@ohiomensoxroast.org and we can do your registration for you.",
				"inValidForm": "Please correct any highlighted fields.",
				"cantConnectToPayPal": "Sorry, we are having some trouble communicating to PayPal and can not complete your registration. We would love for you to attend this years Ohio Men's Ox Roast And Retreat, so please try again later or contact us at info@ohiomensoxroast.org and we can do your registration for you."
			},
			"unwantedDataFields": ["guest_firstname", "guest_lastname", "eventGuestPass"],
			"dbReference": "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016"
		},
		publicMembers = {
			"bindEvents": function (settings) {
				$(document).on("submit", settings.scope, publicMembers.submitForm);
			},
			"submitForm": function(event) {
				event.preventDefault();

				var form = $(event.target),
					isFormValid = form.valid(),
					formAction = null,
					serializedForm = null,
					preparedFormData = null,
					uniqueDataKey = null,
					dataShowingError = null;

				if (isFormValid === true) {
					formAction = form.attr("action");
					serializedForm = dataService.serializeToObject(form);
					preparedFormData = publicMembers.prepareDataForSubmission(serializedForm, privateMembers.unwantedDataFields);
					uniqueDataKey = publicMembers.addDataToDatabase(preparedFormData, privateMembers.dbReference);

					preparedFormData.FirebaseKey = uniqueDataKey

					$.ajax({
						type: "POST",
		                url: formAction,
		                data: preparedFormData,
		                dataType: "json"
					}).done(function(data) {
						dataShowingError = (data && data.errorMessage) ? true : false;

						if (dataShowingError === false) {
							publicMembers.updateDataFromDatabase({"paymentCommitted": Boolean(data.paymentCommitted), "paymentConfirmed": Boolean(data.paymentConfirmed)}, data.firebaseUrlToKey);
		                	publicMembers.redirectUserToCompletePayment(data);
		            	} else {
		            		publicMembers.removeDataFromDatabase(privateMembers.dbReference + "/" + uniqueDataKey);
		            		publicMembers.processError(data);
		            	}
		            }).fail(function () {
		            	publicMembers.removeDataFromDatabase(privateMembers.dbReference + "/" + uniqueDataKey);

		            	publicMembers.processError({
							"errorMessage": privateMembers.error.cantConnectToPayPal
						});
		            });
				} else {
					publicMembers.processError({
						"errorMessage": privateMembers.error.inValidForm
					});
				}
			},
			"prepareDataForSubmission": function (data, removeData) {
				var guestList = JSON.parse(data.guestList),
					index = 0,
					fieldToRemove = null;

				data.guests = guestList.guest;
				delete data.guestList;

				if (removeData && removeData.length > 0) {
					index = removeData.length - 1;

					for (; index >= 0; index -= 1) {
						fieldToRemove = removeData[index];

						delete data[fieldToRemove];
					}
				}

				return data;
			},
			"addDataToDatabase": function (data, dbRef) {
				var noSQLDBReference = null,
					databaseKey = null;

				if (data && dbRef) {
					noSQLDBReference = dataService.getReference(dbRef),
					databaseKey = dataService.set(noSQLDBReference, data);
				} else {
					publicMembers.processError({
						"errorMessage": privateMembers.error.informationLost
					});
				}

				return databaseKey;
			},
			"removeDataFromDatabase": function (dbRef) {
				var noSQLDBReference = null;

				if (dbRef) {
					noSQLDBReference = dataService.getReference(dbRef);
					dataService.set(noSQLDBReference, null);
				}
			},
			"updateDataFromDatabase": function (data, dbRef) {
				var noSQLDBReference = null,
					databaseKey = null;

				if (data && dbRef) {
					noSQLDBReference = dataService.getReference(dbRef),
					dataService.update(noSQLDBReference, data);
				}
			},
			"redirectUserToCompletePayment": function (data) {
				var redirectUrl = null;

				if (data && data.redirectUrl && typeof data.redirectUrl === "string") {
					redirectUrl = data.redirectUrl + "&useraction=commit";

					windowService.redirect(redirectUrl);
				} else {
					publicMembers.processError({
						"errorMessage": privateMembers.error.informationLost
					});
				}
			},
			"processError": function (data) {
				var markup = templateError.error(data);

				$("#registration-form > fieldset:first-of-type").prepend(markup);
			}
		};

	return publicMembers;
});