define(['lodash','service/window', 'service/data', 'templates/registration'], function (_, windowService, dataService, registrationTemplates) {
	"use strict";

	var privateMembers = {
			"firebaseRootReference": "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016",
			"allPassTypes": [
				{"name": "2 Day Pass", "type": "2"},
				{"name": "1 Day Pass", "type": "1"},
				{"name": "12 and under", "type": "0"},
				{"name": "Golfing", "type": "G"},
				{"name": "Fishing", "type": "F"},
				{"name": "Paintball", "type": "P"}
			]
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

				firebaseDataReference.update({ //Needs test and needs to use the data service
					"paymentConfirmed": successfulPayment
				});

				firebaseDataReference.on("value", publicMembers.processInformation);
			},
			"processInformation": function(snapshot) {
				var userRegistration = snapshot.val();

				publicMembers.showDetails(userRegistration);
			},
			"showDetails": function(data) {
				var firebaseKey = windowService.getParameterByName("confirmationId"), //Needs tested
					markup = null,
					eventPassTypeObject = _.find(privateMembers.allPassTypes, "type", data.eventPass || ""), //Needs tested
					golfPassTypeObject = _.find(privateMembers.allPassTypes, "type", data.golfPass || ""), //Needs tested
					fishingPassTypeObject = _.find(privateMembers.allPassTypes, "type", data.fishingPass || ""), //Needs tested
					paintballPassTypeObject = _.find(privateMembers.allPassTypes, "type", data.paintballPass || ""); //Needs tested

				data.confirmationId = firebaseKey; //Needs tested

				data.eventPass = _.result(eventPassTypeObject, "name"); //Needs tested
				data.golfPass = _.result(golfPassTypeObject, "name"); //Needs tested
				data.fishingPass = _.result(fishingPassTypeObject, "name"); //Needs tested
				data.paintballPass = _.result(paintballPassTypeObject, "name"); //Needs tested
				data.activities = [
					data.golfPass,
					data.fishingPass,
					data.paintballPass
				]; //Needs tested

				markup = registrationTemplates.confirmationInformation(data);

				$("#registration-details").append(markup);
			}
		};

	return publicMembers;
});