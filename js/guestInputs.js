function Guest(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function guestVm() {
    var self = this;

    self.guest = ko.observableArray([]);

    self.addGuest = function () {
        self.guest.push(new Guest($("#guest_firstname").val(), $("#guest_lastname").val()));
    }

    self.removeGuest = function () {
        self.guest.remove(this);
    }
};

ko.applyBindings(new guestVm(), $("#guests")[0]);

