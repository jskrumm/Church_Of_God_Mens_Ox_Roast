define(['section/userInfo', 'section/guestInfo'], function (userInfo, guestInfo) {
	"use strict";

	var publicMembers = {
		"init": function () {
			$(document).on("document:ready", publicMembers.startSections);
		},
		"startSections": function () {
			var userInfoSection = userInfo({
					"scope": "#generalInfo"
				}),
				guestInfoSection = guestInfo({
					"scope": "#guests"
				});

			userInfoSection.init();
			userInfoSection.subscribe();

			guestInfoSection.init();
			guestInfoSection.subscribe();

			if (parseInt($("#total").text()) === 0) {
				$("form")[0].reset();
				$("#guestList").val("{\"guest\": []}");
			}

			//Fix for IE 9 and lower so placeholders show up.
			$("form input").focus();
			window.scrollTo(0, 0);
		}
	};

	return publicMembers;
});