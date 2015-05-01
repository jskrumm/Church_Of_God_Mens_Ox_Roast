define(function () {
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
				$(settings.scope).on("click", "button.add-guest", publicMembers.foo);
			},
			"foo": function (event) {

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
					eventPassType = _.map($(".event-pass-types input[type='radio']:checked"), publicMembers.getValue).join(", "),
					activities = _.map($(".activity-pass-types input[type='checkbox']:checked"), publicMembers.getValue).join(", ");

				return {
					"firstname": firstname,
					"lastname": lastname,
					"eventPassType": eventPassType,
					"activities": activities
				};
			},
			"bar": function (guestObject) {
				var guestList = JSON.stringify($("#guestList").val());

				//Then we take the value and do JSON.stringify() and then JSON.parse

				//Then add the new guestObject to the guestList by doing obj.guests.push(guestObject)

				//Then insert the new guest list back into the DOM and also returns the new guest list (should call a function to do this).
			}
		};

	return publicMembers;
});

/*
	{
		[
			{
				firstname: value, 
				lastname: value, 
				eventPassType: value, 
				activities: value(fishing, golfing, etc..)
			}
		]
	}
*/