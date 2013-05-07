var appendNameInputsVM = function() {
	this.addField = ko.observable(0);
};

ko.bindingHandlers.appendNameInputs = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
        allBindings = allBindingsAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value),
            inputFields = $(element).find("div.fields"),
            html = '<label for="guest_firstname_1">First Name</label><input id="guest_firstname_1" type="text" name="guest_firstname_1"/><label for="guest_lastname_1">Last Name</label><input id="guest_lastname_1" type="text" name="guest_lastname_1"/>';

        inputFields.append(html);
    }
};

ko.applyBindings(new appendNameInputsVM());