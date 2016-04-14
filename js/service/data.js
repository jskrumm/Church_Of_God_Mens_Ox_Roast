define(["firebase"], function (Firebase) {
	return {
		"getReference": function (reference) {
			var rootRef = new window.Firebase(reference);
		//		authData = rootRef.getAuth();

		//	if (authData === null) {
		//		this.authAnonymously(rootRef).then(function(value){
		//			console.log(value);
		//		});
		//	} else {
		//		return rootRef;
		//		console.log("Authenticated user with uid:", authData.uid);
		//	}

			return rootRef;
		},
		"set": function (rootRef, data) {
			var uniqueIDPostRef = rootRef.push();

			uniqueIDPostRef.set(data);

			return uniqueIDPostRef.key();
		},
		"update": function (rootRef, data) {
			rootRef.update(data);
		},
		"serializeToObject": function (form) {
			var serializedObject = {},
				serializedArray = $(form).serializeArray(),
				index = serializedArray.length - 1,
				name = null,
				value = null,
				formField = null;

			for (; index >= 0; index--) {
				formField = serializedArray[index];

				if (formField.hasOwnProperty("name") && formField.hasOwnProperty("value")) {
					name = formField.name;
					value = formField.value;

					serializedObject[name] = value;
				}
				
			}

			return serializedObject;
		},
		"authAnonymously": function(rootRef) {
			var deferred = $.Deferred();

			rootRef.authAnonymously(function(error, authData) {
				if (error) {
				   deferred.reject(error);
				} else {
				 	deferred.resolve(authData);
				}
			});

			return deferred.promise();
		}
	};
});