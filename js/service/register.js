define(function () {
	var privateMember = {
		"priceArray": ["65", "55", "45", "35", "25", "5"]
	};

	return {
		"total": function (initalTotal, passPrice) {
			var total = 0,
				validInitialTotal = (typeof initalTotal !== "undefined" && initalTotal !== null && initalTotal !== "") ? true : false,
				validPassPrice = (typeof passPrice !== "undefined" && passPrice !== null && passPrice !== "") ? true : false;

			if (validInitialTotal === true && validPassPrice === false) {
				total = parseInt(initalTotal);
			} else if (validInitialTotal === true && validPassPrice === true) {
				total = parseInt(initalTotal) + parseInt(passPrice); 
			};

			return total;
		}
	}
});