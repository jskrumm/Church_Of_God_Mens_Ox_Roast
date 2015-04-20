define(['module/registerGuest'], function(registerGuest) {
	"use strict";

	var privateMembers = {
		"GLOBAL_SCOPE": ""
	};

	return function(settings) {
		privateMembers.GLOBAL_SCOPE = settings.scope;

		return {
			"init": function () {
				//calls bindEvents for all modules
				registerGuest.bindEvents({
					"scope": privateMembers.GLOBAL_SCOPE
				});
				//addes listeners for all modules
				/*module.listen({
					"scope": privateMembers.GLOBAL_SCOPE;
				});*/
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