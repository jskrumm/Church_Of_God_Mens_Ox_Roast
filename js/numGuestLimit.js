var ClickCounterViewModel = function () {
    var self = this;

    self.guestCount = ko.observable(parseInt($("#guest-count").attr("data-initalVal")));

    self.addField = function () {
        self.guestCount(self.guestCount() + 1);
    };

    self.hasClickedTooManyTimes = ko.computed(function () {
        return self.guestCount() >= 19;
    }, self);
};

/*
    ko.bindingHandlers.initializeValue = {
    init: function(element, valueAccessor) {
        valueAccessor()(element.getAttribute('value'));
    },
    update: function(element, valueAccessor) {
        var value = valueAccessor();
        element.setAttribute('value', ko.utils.unwrapObservable(value))
    }
};
*/
ko.applyBindings(new ClickCounterViewModel());