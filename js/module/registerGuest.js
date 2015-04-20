define(function () {
	"use strict";

	var publicMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("click", "button.yes", publicMembers.showGuestInputs);
			$(settings.scope).on("click", "button.no", publicMembers.hideGuestInputs);
		},
		"showGuestInputs": function () {
			$("#hasGuests").val(true);
			$("#guests").removeClass("hidden");
		},
		"hideGuestInputs": function () {
			$("#hasGuests").val(false);
			$("#guests").addClass("hidden");
		}
	};

	return publicMembers;
});