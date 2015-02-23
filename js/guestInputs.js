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
    var guestHiddenFieldValue = $("#guestList").val();
    var tempGuestArray = guestHiddenFieldValue.split(";");

    if (guestHiddenFieldValue !== "") {
        for (var i = 0; i < tempGuestArray.length; i++) {
            var lastName = tempGuestArray[i].substring(0, tempGuestArray[i].indexOf(","));
            var firstName = tempGuestArray[i].substring(tempGuestArray[i].indexOf(",") + 2, tempGuestArray[i].length);
            guestAlreadyAdded.push({ "firstName": firstName, "lastName": lastName });
        };
    }

    self.guest = ko.observableArray(guestAlreadyAdded);
    self.guestCount = ko.observable(parseInt($("#guest-count").attr("data-initalVal")));

    self.addGuest = function () {
        var firstName = $("#guest_firstname").val(),
            lastName = $("#guest_lastname").val();

        if (firstName !== "" && lastName !== "") {
            self.guest.push(new Guest(firstName, lastName));
            self.guestCount(self.guestCount() + 1);
            insertHiddenGuestList(self.guest());

            $("#guests h4").show();
        }
    };

    self.removeGuest = function () {
        self.guest.remove(this);
        self.guestCount(self.guestCount() - 1);
        insertHiddenGuestList(self.guest());

        if (self.guestCount() < 1) {
            $("#guests h4").hide();
        }
    };

    self.hasClickedTooManyTimes = ko.computed(function () {
        return self.guestCount() >= 19;
    }, self);

};

ko.applyBindings(new guestVM(), $("#guests")[0]);

