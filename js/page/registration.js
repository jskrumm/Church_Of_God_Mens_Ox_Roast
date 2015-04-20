define(['section/userInfo'], function (userInfo) {
	"use strict";

	var publicMembers = {
		"init": function () {
			$(document).on("document:ready", publicMembers.startSections);
		},
		"startSections": function () {
			var userInfoSection = userInfo({
				"scope": "#generalInfo"
			});

			userInfoSection.init();
			userInfoSection.subscribe();
		}
	};

	return publicMembers;
});