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

			$("#guest_firstname", "#guests").rules( "add", {
				required: true,
			  	maxlength: 100,
			  	messages: {
			    	required: "First name is required.",
			    	maxlength: jQuery.format("Must be {0} characters or less.")
			  	}
			});

			$("#guest_lastname", "#guests").rules( "add", {
				required: true,
			  	maxlength: 100,
			  	messages: {
			    	required: "Last name is required.",
			    	maxlength: jQuery.format("Must be {0} characters or less.")
			  	}
			});

			$("input[name='eventGuestPass']", "#guests").rules( "add", {
				required: true,
			  	messages: {
			    	required: "Please select an event pass."
			  	}
			});
		},
		"hideGuestInputs": function () {
			$("#hasGuests").val(false);
			$("#guests").addClass("hidden");

			$("#guest_firstname", "#guests").rules("remove");
			$("#guest_lastname", "#guests").rules("remove");
			$("input[name='eventGuestPass']", "#guests").rules("remove");
		}
	};

	return publicMembers;
});