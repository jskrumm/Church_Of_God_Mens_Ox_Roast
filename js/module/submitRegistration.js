define(["service/data", "templates/error", "service/window"], function (dataService, templateError, windowService) {
	"use strict";

	var privateMembers = {
			"error": {
				"informationLost": "Sorry, we could not process your information.  We would love for you to attend this years Ohio Men's Ox Roast And Retreat, so please try again later or contact us at info@ohiomensoxroast.org and we can do your registration for you."
			},
			"unwantedDataFields": ["guest_firstname", "guest_lastname"]
		},
		publicMembers = {
			"bindEvents": function (settings) {
				$(document).on("submit", settings.scope, publicMembers.submitForm);
			},
			"submitForm": function(event) {
				event.preventDefault();

				var form = $(event.target),
					formAction = form.attr("action"),
					serializedForm = dataService.serializeToObject(form),
					preparedFormData = publicMembers.prepareDataForSubmission(serializedForm, privateMembers.unwantedDataFields),
					uniqueDataKey = publicMembers.addDataToDatabase(preparedFormData, "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016"); //should only be done if we know the form is at leas valid


				//Needs tested
					preparedFormData.CUSTOM = uniqueDataKey; //Doesn't work!

				//if form is valid
				$.ajax({
					type: "POST",
	                url: formAction,
	                data: preparedFormData,
	                dataType: "json"
				}).done(function(data) {
					//if this comes back as successful then redirect other wise remove data from Firebase
	                publicMembers.redirectUserToCompletePayment(data, uniqueDataKey);
	            });
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
			"redirectUserToCompletePayment": function (data, uniqueDataKey) {
				var redirectUrl = null;

				if (data && data.redirectUrl && typeof data.redirectUrl === "string" && uniqueDataKey) {
					//redirectUrl = data.redirectUrl + "&item_number=" + uniqueDataKey;
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