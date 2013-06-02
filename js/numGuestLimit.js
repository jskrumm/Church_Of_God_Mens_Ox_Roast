var ClickCounterViewModel = function () {
    var self = this;

    self.guestCount = ko.observable(parseInt($("#guest-count").attr("data-initalVal")));

    self.addField = function () {
        self.guestCount(self.guestCount() + 1);
    };

    self.removeField = function () {
        self.guestCount(self.guestCount() - 1);
    };

    self.hasClickedTooManyTimes = ko.computed(function () {
        return self.guestCount() >= 19;
    }, self);

    self.hasMoreThanOneGuest = ko.computed(function () {
        return self.guestCount() >= 2;
    }, self);
};

ko.applyBindings(new ClickCounterViewModel());