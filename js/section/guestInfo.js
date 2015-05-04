define(['module/passes', 'module/guest'], function(passes, guest) {
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
				guest.bindEvents(settings);
				
				//addes listeners for all modules
				passes.listen();
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