define(['lodash'], function (_) {
	"use strict";
	
	var privateMember = {
		"priceArray": ["65", "55", "45", "35", "25", "5"]
	};

	return {
		"total": function (passes, currentTotal) {
			var self = this,
				total = currentTotal || 0,
				pricingIsValid = self.isAllPricingValid(passes),
				passTotal = 0;

			if (pricingIsValid === true) {
				passTotal = self.sum(passes);
				total = self.add(total, passTotal);
			}

			return total;
		},
		"add": function (initalTotal, passPrice) {
			return _.add(initalTotal,passPrice);
		},
		"isValueValid": function (value) {
			return (_.isUndefined(value) || _.isNull(value) || _.isEmpty(value)) ? false : true;
		},
		"isPassPriceValid": function (passPrice) {
			var self = this;

			return (self.isValueValid(passPrice) === true && _.indexOf(privateMember.priceArray, passPrice) !== -1) ? true : false;
		},
		"isAllPricingValid": function (passes) {
			var self = this,
				i = 0,
				allPricingIsValid = true,
				passPriceIsValid = true;

			for(; i < passes.length; i++) {
				passPriceIsValid = self.isPassPriceValid(passes[i]);

				if (passPriceIsValid === false) {
					allPricingIsValid = false;
					break;
				}
			}

			return allPricingIsValid;
		},
		"sum": function (passes) {
			return _.sum(passes);
		}
	}
});