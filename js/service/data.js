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
		}
	};
});