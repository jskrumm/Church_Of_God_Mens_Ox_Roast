function Guest(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var insertHiddenGuestList = function (guestList) {
    var guestListString = "";

    for (var i = 0; i < guestList.length; i++) {
        var guest = guestList[i].lastName + ", " + guestList[i].firstName;
        guestListString += guest + ";"
    }

    if (guestListString.length >= 1) {
        guestListString = guestListString.substring(0, guestListString.length - 1);
    }

    $("#guestList").val(guestListString);
}

var guestVM = function () {
    var self = this;
    var guestAlreadyAdded = [];

    $("#guests ul li").each(function () {
        console.log(this);

        if ($(".firstName", this).text() !== "") {
            console.log("shouldn't be here");
            guestAlreadyAdded.push = new Guest($(".firstName", this).text(), $(".lastName", this).text());
            insertHiddenGuestList(guestAlreadyAdded);
        }
    });

    self.guest = ko.observableArray(guestAlreadyAdded);
    self.guestCount = ko.observable(parseInt($("#guest-count").attr("data-initalVal")));

    self.addGuest = function () {
        self.guest.push(new Guest($("#guest_firstname").val(), $("#guest_lastname").val()));
        self.guestCount(self.guestCount() + 1);
        insertHiddenGuestList(self.guest());
    };

    self.removeGuest = function () {
        self.guest.remove(this);
        self.guestCount(self.guestCount() - 1);
        insertHiddenGuestList(self.guest());
    };

    self.hasClickedTooManyTimes = ko.computed(function () {
        return self.guestCount() >= 19;
    }, self);

};

ko.applyBindings(new guestVM(), $("#guests")[0]);

