define(['section/userInfo', 'section/guestInfo', 'section/registrationForm', 'section/confirmation'], function (userInfo, guestInfo, registrationForm, confirmation) {
	"use strict";

	var publicMembers = {
		"init": function () {
			$(document).on("document:ready", publicMembers.startSections);
		},
		"startSections": function () {
			var userInfoSection = null,
				guestInfoSection = null,
				registrationFormSection = null,
				confirmationSection = null,
				conditionals = publicMembers.conditionals();


			if (conditionals.hasUserInfoSection === true) {
				userInfoSection = userInfo({
					"scope": "#generalInfo"
				});

				userInfoSection.init();
				userInfoSection.subscribe();
			}

			if (conditionals.hasGuestInfoSection === true) {
				guestInfoSection = guestInfo({
					"scope": "#guests"
				});

				guestInfoSection.init();
				guestInfoSection.subscribe();
			}


			if (conditionals.hasRegistrationFormSection === true) {
				registrationFormSection = registrationForm({
					"scope": "#registration-form"
				});

				registrationFormSection.init();
				registrationFormSection.subscribe();
			}


			if (conditionals.hasConfirmationSection === true) {
				confirmationSection = confirmation({
					"scope": "#registration-details"
				});

				confirmationSection.init();
				confirmationSection.subscribe();

				$(document).trigger("confirmation:load");
			}
				
			if (conditionals.hasConfirmationSection === false) {
				if (parseInt($("#total").text()) === 0) {
					$("form")[0].reset();
					$("#guestList").val("{\"guest\": []}");
				}

				//Fix for IE 9 and lower so placeholders show up.
				$("form input").focus();
				window.scrollTo(0, 0);
			}
		},
		"conditionals": function () {
			return {
				"hasUserInfoSection": ($("#generalInfo").length) ? true : false,
				"hasGuestInfoSection": ($("#guests").length) ? true : false,
				"hasRegistrationFormSection": ($("#registration-form").length) ? true : false,
				"hasConfirmationSection": ($("#registration-details").length) ? true : false
			}
		}
	};

	return publicMembers;
});