define(['module/registrationDetails'], function(registrationDetails) {
	"use strict";

	var privateMembers = {
		"GLOBAL_SCOPE": ""
	};

	return function(settings) {
		privateMembers.GLOBAL_SCOPE = settings.scope;

		return {
			"init": function () {
				var settings = {
					"scope": privateMembers.GLOBAL_SCOPE
				};
				
				//calls bindEvents for all modules
				
				//addes listeners for all modules
				registrationDetails.listen();
			},
			"loadContent": function () {
				//ajax content
				$(document).trigger("registrationDetails:load");
			},
			"subscribe": function () {
				var section = this;
				//listens for a message to call load content

				$(document).on("confirmation:load", section.loadContent);
			}
		};
	};
});