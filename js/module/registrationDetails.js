define(['lodash','service/window', 'service/data', 'templates/registration', 'templates/error'], function (_, windowService, dataService, registrationTemplates, templateError) {
	"use strict";

	var privateMembers = {
			"firebaseRootReference": "https://ohio-mens-ox-roast.firebaseio.com/oxroast/registration/2016",
			"allPassTypes": [
				{"name": "2 Day Pass", "type": "2"},
				{"name": "1 Day Pass", "type": "1"},
				{"name": "12 and under", "type": "0"},
				{"name": "Golfing", "type": "G"},
				{"name": "Fishing", "type": "F"},
				{"name": "Paintball", "type": "P"}
			],
			"error": {
				"unableToSendEmail": "Sorry, we are having trouble sending you a confirmation email. We where able to confirm that you are register for the Ohio Men's Ox Roast and Retreat. You can verify your payment by checking your Paypal account. Please print this page as your acknowledgement of payment."
			}
		},
		publicMembers = {
			"listen": function () {
				$(document).on("registrationDetails:load", publicMembers.loadContent);
			},
			"loadContent": function () {
				var firebaseKey = windowService.getParameterByName("confirmationId"),
					firebaseReferenceAtKey = privateMembers.firebaseRootReference + "/" + firebaseKey,
					firebaseDataReference = dataService.getReference(firebaseReferenceAtKey),
					successfulPayment = ($(".success").length) ? true : false;

				dataService.update(firebaseDataReference, {
					"paymentConfirmed": successfulPayment
				});

				firebaseDataReference.on("value", publicMembers.processInformation);
			},
			"processInformation": function(snapshot) {
				var userRegistration = snapshot.val();

				publicMembers.showDetails(userRegistration);

				//DOESNT WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				// $.ajax({
				// 	type: "POST",
	   //              url: "/Register/ConfirmationEmail",
	   //              data: JSON.stringify(userRegistration),
	   //              dataType: "json"
				// }).done(function(data) {
				// 	if (data.status === "failed") {
				// 		publicMembers.processError(data);
				// 	}
				// }).fail(function() {
				// 	publicMembers.processError({
				// 		"errorMessage": privateMembers.error.unableToSendEmail
				// 	});
				// });
			},
			"showDetails": function(data) {
				var firebaseKey = windowService.getParameterByName("confirmationId"),
					markup = null,
					eventPassType = publicMembers.getPassType(data.eventPass),
					golfPassType = publicMembers.getPassType(data.golfPass),
					fishingPassType = publicMembers.getPassType(data.fishingPass),
					paintballPassType = publicMembers.getPassType(data.paintballPass);

				data.confirmationId = firebaseKey;

				data.eventPass = eventPassType;
				data.golfPass = golfPassType;
				data.fishingPass = fishingPassType;
				data.paintballPass = paintballPassType; 
				data.activities = [
					data.golfPass,
					data.fishingPass,
					data.paintballPass
				];

				markup = registrationTemplates.confirmationInformation(data);

				$("#registration-details").append(markup);
			},
			"processError": function (data) {
				var markup = templateError.error(data);

				$("#registration-details").prepend(markup);
			},
			"getPassType": function(passValue) {
				var value = "",
					passTypeObject = (passValue) ? _.find(privateMembers.allPassTypes, "type", passValue) : undefined, //Needs tested
					isPassTypeObjectUndefined = _.isUndefined(passTypeObject),
					isPasstypeObjectAnObject = _.isObject(passTypeObject);

				if (isPassTypeObjectUndefined === false && isPasstypeObjectAnObject === true) {
					value = _.result(passTypeObject, "name");
				}

				return value;
			}
		};

	return publicMembers;
});