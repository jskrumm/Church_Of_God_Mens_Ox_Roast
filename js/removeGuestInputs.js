var appendGuestInputsVM = {
	removeField: ko.observable(0)
};

ko.bindingHandlers.removeGuestInputs = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
        allBindings = allBindingsAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value),
            lastSetOfGuestInputs = $(element).find("div.first-last-name-fields").last();

        if (typeof valueUnwrapped === 'object') {
            lastSetOfGuestInputs.remove();
        } else {
            return false;
        }
    }
};

ko.applyBindings(appendGuestInputsVM);