var RegistrationVM = function() {
    var self = this;

	self.numAttTwoDays = ko.observable();
    self.numAttTwoDaysPrice = ko.observable();
    self.numAttTwoDaysOutput = ko.computed(function() {
        return self.numAttTwoDay() * self.numAttTwoDayPrice();
    });
};

ko.applyBindings(new RegistrationVM());