var getTotal = function (qty, price) {
    var total = parseInt(qty) * parseInt(price);

    if (isNaN(total)) {
        return 0;
    } else {
        return total;
    }
};

var RegistrationVM = function () {
    var self = this;

    self.numAttTwoDaysQty = ko.observable(0);
    self.numAttTwoDaysPrice = ko.observable(65);
    self.numAttTwoDaysTotal = ko.computed(function () {
        return getTotal(self.numAttTwoDaysQty(), self.numAttTwoDaysPrice());
    });

    self.numAttOneDayQty = ko.observable(0);
    self.numAttOneDayPrice = ko.observable(35);
    self.numAttOneDayTotal = ko.computed(function () {
        return getTotal(self.numAttOneDayQty(), self.numAttOneDayPrice());
    });

    self.numAttUnderageQty = ko.observable(0);
    self.numAttUnderagePrice = ko.observable(25);
    self.numAttUnderageTotal = ko.computed(function () {
        return getTotal(self.numAttUnderageQty(), self.numAttUnderagePrice());
    });

    self.numGolfingQty = ko.observable(0);
    self.numGolfingPrice = ko.observable(45);
    self.numGolfingTotal = ko.computed(function () {
        return getTotal(self.numGolfingQty(), self.numGolfingPrice());
    });

    self.numPaintballingQty = ko.observable(0);
    self.numPaintballingPrice = ko.observable(5);
    self.numPaintballingTotal = ko.computed(function () {
        return getTotal(self.numPaintballingQty(), self.numPaintballingPrice());
    });

    self.numFishingQty = ko.observable(0);
    self.numFishingPrice = ko.observable(25);
    self.numFishingTotal = ko.computed(function () {
        return getTotal(self.numFishingQty(), self.numFishingPrice());
    });

    self.grandTotal = ko.computed(function () {
        return self.numFishingTotal() + self.numPaintballingTotal() + self.numGolfingTotal() + self.numAttUnderageTotal() + self.numAttOneDayTotal() + self.numAttTwoDaysTotal();
    });
};
 
ko.applyBindings(new RegistrationVM(),document.getElementById('eventInfo')); 