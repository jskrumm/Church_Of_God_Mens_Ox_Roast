function Guest(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function guestVM() {
    var self = this;

    self.guest = ko.observableArray([]);
    self.guestCount = ko.observable(parseInt($("#guest-count").attr("data-initalVal")));

    self.addGuest = function () {
        self.guest.push(new Guest($("#guest_firstname").val(), $("#guest_lastname").val()));
        self.guestCount(self.guestCount() + 1);
    }

    self.removeGuest = function () {
        self.guest.remove(this);
        self.guestCount(self.guestCount() - 1);
    }

    self.hasClickedTooManyTimes = ko.computed(function () {
        return self.guestCount() >= 19;
    }, self);
};

ko.applyBindings(new guestVM(), $("#guests")[0]);

