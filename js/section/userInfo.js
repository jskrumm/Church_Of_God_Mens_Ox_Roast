define(['module/registerGuest', 'module/passes'], function(registerGuest, passes) {
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
				registerGuest.bindEvents(settings);

				passes.bindEvents(settings);
				//addes listeners for all modules
			},
			"loadContent": function () {
				//ajax content
			},
			"subscribe": function () {
				//listens for a message to call load content
			}
		};
	};
});