jasmine.defferedDone = function (data) {
	var d = $.Deferred();

   	d.resolve(data);

   	return d.promise();
};

jasmine.defferedFail = function (data) {
	var d = $.Deferred();

   	d.reject(data);

   	return d.promise();
}
