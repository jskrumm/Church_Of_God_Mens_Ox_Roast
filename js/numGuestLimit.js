var ClickCounterViewModel = function() {
    this.guestCount = ko.observable(1);
 
    this.addField = function() {
        this.guestCount(this.guestCount() + 1);
    };
 
    this.hasClickedTooManyTimes = ko.computed(function() {
        return this.guestCount() >= 19;
    }, this);
};
 
ko.applyBindings(new ClickCounterViewModel());