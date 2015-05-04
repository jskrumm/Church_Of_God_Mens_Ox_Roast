define(["lodash", "templates/registration"], function (_, registrationTemplates) {
	"use strict";

	var privateMembers = {
			"allPassTypes": [
				{"name": "2 Day Pass", "type": "2"},
				{"name": "1 Day Pass", "type": "1"},
				{"name": "12 and under", "type": "0"},
				{"name": "Golfing", "type": "G"},
				{"name": "Fishing", "type": "F"},
				{"name": "Paintball", "type": "P"}
			]
		}, 
		publicMembers = {
			"bindEvents": function (settings) {
				$(settings.scope).on("click", ".add-guest", publicMembers.addGuest);
				$(settings.scope).on("click", ".remove-guest", publicMembers.removeGuest);
			},
			"getValue": function (element) {
				var value = $(element).val(),
					passTypeObject = _.find(privateMembers.allPassTypes, "type", value),
					isPassTypeObjectUndefined = _.isUndefined(passTypeObject),
					isPasstypeObjectAnObject = _.isObject(passTypeObject);

				if (isPassTypeObjectUndefined === false && isPasstypeObjectAnObject === true) {
					value = _.result(passTypeObject, "name");
				}

				return value;
			},
			"buildNewGuestObject": function () {
				var firstname = publicMembers.getValue("#guest_firstname"),
					lastname = publicMembers.getValue("#guest_lastname"),
					eventPassType = _.map($(".event-pass-types input[type='radio']:checked", "#guests"), publicMembers.getValue).join(", "),
					activities = _.map($(".activity-pass-types input[type='checkbox']:checked", "#guests"), publicMembers.getValue).join(", ");

				return {
					"firstname": firstname,
					"lastname": lastname,
					"eventPassType": eventPassType,
					"activities": activities
				};
			},
			"addGuest": function (event) {
				var guestList = JSON.parse($("#guestList").val()),
					guestObject = publicMembers.buildNewGuestObject();

				guestList.guest.push(guestObject); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

				publicMembers.insetGuestListIntoDOM(guestList);

				$(document).trigger("guest:added");

			},
			"insetGuestListIntoDOM": function (guestList) {
				var markup = registrationTemplates.guestList(guestList); 

				$("#guestList").val(JSON.stringify(guestList));

				$(".guestAdded").html(markup);
			},
			"removeGuest": function (event) {
				var guestList = JSON.parse($("#guestList").val()),
					listItemToRemove = $(event.target).parent(),
					indexOfItemToRemove = listItemToRemove.index();

				guestList.guest.splice(indexOfItemToRemove, 1); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

				publicMembers.insetGuestListIntoDOM(guestList);

				//TODO: get the total amount to remove from total and broadcast a message containing that total amount
			}
		};

	return publicMembers;
});