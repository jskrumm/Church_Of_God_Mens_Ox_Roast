define(["firebase"], function (Firebase) {
	return {
		"getReference": function (reference) {
			var rootRef = new window.Firebase(reference);

			return rootRef;
		},
		"set": function (rootRef, data) {
			var uniqueIDPostRef = rootRef.push();

			uniqueIDPostRef.set(data);

			return uniqueIDPostRef.key();
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
		}
	};
});