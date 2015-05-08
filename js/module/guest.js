define(["lodash", "templates/registration", "service/register"], function (_, registrationTemplates, registerService) {
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
			"isFormValid": function (event) { //TODO: Create rules and message using jquery valdiation plugin to validate that the form is valid.
				var targetForm = $(event.target).parents("form"),
					isValid = targetForm.valid();

				return isValid;
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
					activities = _.map($(".activity-pass-types input[type='checkbox']:checked", "#guests"), publicMembers.getValue).join(", "),
					totalCost = publicMembers.getTotalForGuestPassesSelect();

				return {
					"firstname": firstname,
					"lastname": lastname,
					"eventPassType": eventPassType,
					"activities": activities,
					"totalCost": totalCost
				};
			},
			"addGuest": function (event) {
				var isFormValid = publicMembers.isFormValid(event),
					guestList = null,
					guestObject = null;

				if (isFormValid === true) {
					guestList = JSON.parse($("#guestList").val());

					guestObject = publicMembers.buildNewGuestObject();

					guestList.guest.push(guestObject); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

					publicMembers.insertGuestListIntoDOM(guestList);

					$(document).trigger("guest:added", ["#guests"]);
				}
			},
			"insertGuestListIntoDOM": function (guestList) {
				var markup = registrationTemplates.guestList(guestList); 

				$("#guestList").val(JSON.stringify(guestList));

				$(".guestAdded").html(markup);
			},
			"removeGuest": function (event) {
				var guestList = JSON.parse($("#guestList").val()),
					listItemToRemove = $(event.target).parent(),
					indexOfItemToRemove = listItemToRemove.index(),
					totalCostToSubtract = guestList.guest[indexOfItemToRemove].totalCost;

				guestList.guest.splice(indexOfItemToRemove, 1); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

				publicMembers.insertGuestListIntoDOM(guestList);

				$(document).trigger("guest:removed", [totalCostToSubtract]);
			},
			"getTotalForGuestPassesSelect": function () {
				var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked", "#guests"),
					selectedEventPassPrices = _.map(selectedEventPasses, publicMembers.getPriceFromDataAttr),
					selectedEventPassPricesTotal = registerService.total(selectedEventPassPrices);

				return selectedEventPassPricesTotal;
			},
			"getPriceFromDataAttr": function (element) {
				return $(element).attr("data-price");
			}
		};

	return publicMembers;
});