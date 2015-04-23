define(function () {
	var privateMember = {
		"priceArray": ["65", "55", "45", "35", "25", "5"]
	};

	return {
		"total": function (initalTotal, passPrice, operand) {
			var total = 0,
				validInitialTotal = (typeof initalTotal !== "undefined" && initalTotal !== null && initalTotal !== "") ? true : false,
				validPassPrice = (typeof passPrice !== "undefined" && passPrice !== null && passPrice !== "") ? true : false,
				validOperand = (typeof operand !== "undefined") ? true : false;
				
			if ((validInitialTotal === true && validOperand === false) || (validInitialTotal === true && validPassPrice === false)) {
				total = parseInt(initalTotal);
			} else if (validInitialTotal === true && validPassPrice === true && validOperand === true) {
				total = parseInt(initalTotal) + parseInt(passPrice); 
			};

			return total;
		}
	}
});