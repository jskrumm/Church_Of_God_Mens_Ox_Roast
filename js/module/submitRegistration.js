define(["service/data"], function (dataService) {
	var publicMembers = {
		"bindEvents": function (settings) {
			$(document).on("submit", settings.scope, publicMembers.foo);
		},
		"foo": function(event) {
			event.preventDefault();

			var form = $(event.target),
				formAction = form.attr("action"),
				serializedForm = dataService.serializeToObject(form);
				
				
			//This needs to pass validation first before calling. This will also need tested.
			$.ajax({
				type: "POST",
                url: formAction,
                data: serializedForm,
                dataType: "json",
                "done": function(data) {
                	noSQLDBReference = dataService.getReference("https://shining-heat-3928.firebaseio.com/oxroast/registration/2016");
                	databaseKey = dataService.set(noSQLDBReference, serializedForm);
                }

			});
		}
	};

	return publicMembers;
});