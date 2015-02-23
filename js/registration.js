var getQty = function (qty) {
   if (isNaN(qty)) {
        return 0;
    } else {
        return qty;
    } 
},
getTotal = function (qty, price) {
    var total = parseInt(qty) * parseInt(price);

    if (isNaN(total)) {
        return 0;
    } else {
        return total;
    }
},
formatCurrency = function (value) {
    return "$" + value;
},
RegistrationVM = function () {
    var self = this,
        now = new Date(),
        month = now.getMonth() + 1,
        day = now.getDate(),
        monthDay = month.toString() + day.toString(),
        twoDayPrice = 65;

    if (monthDay <= 820) {
        twoDayPrice = 55;
    }

    self.numAttTwoDaysQty = ko.observable(getQty(parseInt($("#num-att-two-day").attr("data-initalVal"))));
    self.numAttTwoDaysPrice = ko.observable(twoDayPrice);
    self.numAttTwoDaysTotal = ko.computed(function () {
        return getTotal(self.numAttTwoDaysQty(), self.numAttTwoDaysPrice());
    });
    self.numAttTwoDaysTotalFormated = ko.computed(function () {
        return formatCurrency(self.numAttTwoDaysTotal());
    });

    self.numAttOneDayQty = ko.observable(getQty(parseInt($("#num-att-one-day").attr("data-initalVal"))));
    self.numAttOneDayPrice = ko.observable(35);
    self.numAttOneDayTotal = ko.computed(function () {
        return getTotal(self.numAttOneDayQty(), self.numAttOneDayPrice());
    });
    self.numAttOneDayTotalFormated = ko.computed(function () {
        return formatCurrency(self.numAttOneDayTotal());
    });

    self.numAttUnderageQty = ko.observable(getQty(parseInt($("#num-att-underage").attr("data-initalVal"))));
    self.numAttUnderagePrice = ko.observable(25);
    self.numAttUnderageTotal = ko.computed(function () {
        return getTotal(self.numAttUnderageQty(), self.numAttUnderagePrice());
    });
    self.numAttUnderageTotalFormated = ko.computed(function () {
        return formatCurrency(self.numAttUnderageTotal());
    });

    self.numGolfingQty = ko.observable(getQty(parseInt($("#num-golfing").attr("data-initalVal"))));
    self.numGolfingPrice = ko.observable(45);
    self.numGolfingTotal = ko.computed(function () {
        return getTotal(self.numGolfingQty(), self.numGolfingPrice());
    });
    self.numGolfingTotalFormated = ko.computed(function () {
        return formatCurrency(self.numGolfingTotal());
    });

    self.numPaintballingQty = ko.observable(getQty(parseInt($("#num-paintballing").attr("data-initalVal"))));
    self.numPaintballingPrice = ko.observable(5);
    self.numPaintballingTotal = ko.computed(function () {
        return getTotal(self.numPaintballingQty(), self.numPaintballingPrice());
    });
    self.numPaintballingTotalFormated = ko.computed(function () {
        return formatCurrency(self.numPaintballingTotal());
    });

    self.numFishingQty = ko.observable(getQty(parseInt($("#num-fishing").attr("data-initalVal"))));
    self.numFishingPrice = ko.observable(25);
    self.numFishingTotal = ko.computed(function () {
        return getTotal(self.numFishingQty(), self.numFishingPrice());
    });
    self.numFishingTotalFormated = ko.computed(function () {
        return formatCurrency(self.numFishingTotal());
    });

    self.grandTotal = ko.computed(function () {
        return formatCurrency(self.numFishingTotal() + self.numPaintballingTotal() + self.numGolfingTotal() + self.numAttUnderageTotal() + self.numAttOneDayTotal() + self.numAttTwoDaysTotal());
    });
};
ko.cleanNode($('#eventInfo')[0]); //This sucks
ko.applyBindings(new RegistrationVM(), $('#eventInfo')[0]); 