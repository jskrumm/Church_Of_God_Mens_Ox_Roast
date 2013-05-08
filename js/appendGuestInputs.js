var appendGuestInputsVM = {
	addField: ko.observable(0)
};

ko.bindingHandlers.appendGuestInputs = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
        allBindings = allBindingsAccessor();

        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value),
            lastSetOfGuestInputs = $(element).find("div.first-last-name-fields").last(),
            lastSetsId = $(element).find("div.first-last-name-fields").length,
            count = lastSetsId + 1,
            html = '<div class="first-last-name-fields">' +
                    '<label for="guest_firstname_' + count + '">First Name</label>@Html.ValidationMessage("guest_firstname")' +
                    '<input id="guest_firstname_' + count + '" type="text" name="guest_firstname"/>' +
                    '<label for="guest_lastname_' + count + '">Last Name</label>@Html.ValidationMessage("guest_lastname")' +
                    '<input id="guest_lastname_' + count + '" type="text" name="guest_lastname"/>' +
                    '</div>';

        if (typeof valueUnwrapped === 'object') {
            $(html).insertAfter(lastSetOfGuestInputs);
        } else {
            return false;
        }
    }
};

ko.applyBindings(appendGuestInputsVM, document.getElementById('Guest_Names'));