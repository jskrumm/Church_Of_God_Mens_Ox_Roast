define(["service/data"], function (dataService) {
	var publicMembers = {
		"bindEvents": function (settings) {
			$(document).on("submit", settings.scope, publicMembers.foo);
		},
		"foo": function(event) {
			event.preventDefault();

			var form = event.target,
				serializedForm = dataService.serializeToObject(form),
				noSQLDBReference = dataService.getReference("https://shining-heat-3928.firebaseio.com/oxroast/registration/2016");
				databaseKey = dataService.set(noSQLDBReference, serializedForm);

			//Need to do an ajax post here with the JSON data stringfied
		}
	};

	return publicMembers;
});