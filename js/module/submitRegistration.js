define(["firebase"], function (Firebase) {
	var publicMembers = {
		"bindEvents": function (settings) {
			$(document).on("submit", settings.scope, publicMembers.foo);
		},
		"foo": function(event) {
			event.preventDefault();

			var registrationData = new Firebase('https://shining-heat-3928.firebaseio.com/oxroast/registration/2016');

			registrationData.push().set({
				"name": {
					"first": "blah",
					"last": "blah2"
				},
				"phoneNumber": "123456890",
				"email": "t@gmail.com",
				"church": "First Church Of God",
				"eventPass": "2 Day",
				"activityPasses": ["Paintbal", "Golf", "Fishing"],
				"guests": [
					{
						"name": {
							"first": "guest1",
							"last": "guest1last"
						},
						"eventPass": "1 Day",
						"activityPasses": ["Paintbal"]
					},
					{
						"name": {
							"first": "guest2",
							"last": "guest2last"
						},
						"eventPass": "1 Day",
						"activityPasses": ["Golf"]
					}
				],
				"total": "$100.00",
				"paymentConfirmed": false
			});

		}
	};

	return publicMembers;
});