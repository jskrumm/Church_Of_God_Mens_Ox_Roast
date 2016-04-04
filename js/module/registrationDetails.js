define(['service/window', 'service/data', 'templates/registration'], function (windowService, dataService, registrationTemplates) {
	"use strict";

	var privateMembers = {
			"firebaseRootReference": "https://shining-heat-3928.firebaseio.com/oxroast/registration/2016"
		},
		publicMembers = {
			"listen": function () {
				$(document).on("registrationDetails:load", publicMembers.loadContent);
			},
			"loadContent": function () {
				var firebaseKey = windowService.getParameterByName("FIREBASEKEY"),
					firebaseReferenceAtKey = privateMembers.firebaseRootReference + "/" + firebaseKey,
					firebaseDataReference = dataService.getReference(firebaseReferenceAtKey);

				firebaseDataReference.on("value", publicMembers.processInformation);
			},
			"processInformation": function(snapshot) {
				var userRegistration = snapshot.val();

				publicMembers.showDetails(userRegistration);
			},
			"showDetails": function(data) {
				var markup = registrationTemplates.confirmationInformation(data);

				$("#registration-details").append(markup);
			}
		};

	return publicMembers;
});