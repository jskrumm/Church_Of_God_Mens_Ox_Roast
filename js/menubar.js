var MenuButtonVM = function() {
	this.displayMenu = ko.observable(0);
};

ko.bindingHandlers.slideNavVisiable = {
    init: function(element, valueAccessor) {
 	    // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
 
        $(element).css("right", ko.utils.unwrapObservable(value));
        $(element).parents(".page").find(".menu-bar.mobile span").css("margin-right","0");
    },
    update: function(element, valueAccessor, allBindingsAccessor) {
        // First get the latest data that we're bound to
        var value = valueAccessor(); 
            allBindings = allBindingsAccessor();
         
        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.utils.unwrapObservable(value),
            menuBtn = $(element).parents(".page").find(".menu-bar.mobile span");
        // Now manipulate the DOM element
        $(element).animate({"right" :  parseInt($(element).css("right"),10) >= 0 ? "-=250px" : "+=250px"}, "slow");
        menuBtn.animate({"margin-right" :  parseInt($(element).css("right"),10) >= 0 ? "0" : "+=200px"}, "slow");
    }
};

// accepts jQuery node and remove boolean
ko.unapplyBindings = function ($node, remove) {
    // unbind events
    $node.find("*").each(function () {
        $(this).unbind();
    });

    // Remove KO subscriptions and references
    if (remove) {
        ko.removeNode($node[0]);
    } else {
        ko.cleanNode($node[0]);
    }
};

ko.applyBindings(new MenuButtonVM());

$(window).resize(function () { 
    if ($(this).width() >= '768') {
        ko.unapplyBindings("nav",true);
    }    
});
