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
			"bar": function (element) {
				var value = $(element).val(),
					passTypeName = _.find(privateMembers.allPassTypes, "type", value);

				
				/*
					return {
						"firstname": $("#guest_firstname").val(),
						"lastname": $("#guest_lastname").val(),
						"eventPassType" _.map($(".event-pass-types input[type='radio']:checked"), function(element){return //pass type logic})
						"activities": _.map($(".activity-pass-types input[type='checkbox']:checked"), function(element){return //activity type logic})
					}
				*/
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