define(["lodash", "service/register"], function (_, registerService) {
	var publiMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("change", ".event-pass-types input[type='radio']", publiMembers.setTotal);
			$(settings.scope).on("change", ".activity-pass-types input[type='checkbox']", publiMembers.setTotal);
		},
		"listen": function () {
			$(document).on("guest:added", publiMembers.setTotal);
			$(document).on("guest:removed", publiMembers.deductAmount);
		},
		"setTotal": function () { //TODO: Doesn't add to total if a guest with the same name selections are added
			var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked"),
				cachedTotalTarget = $("#total"),
				selectedEventPassPrices = _.map(selectedEventPasses, publiMembers.getPriceFromDataAttr),
				currentTotal = sessionStorage.getItem("currentTotal") || 0,
				grandTotal = registerService.total(selectedEventPassPrices, currentTotal);

			sessionStorage.setItem("currentTotal", grandTotal);

			cachedTotalTarget.text(grandTotal);
		},
		"getPriceFromDataAttr": function (element) {
			return $(element).attr("data-price");
		},
		"deductAmount": function (amount) {
			var currentTotal = sessionStorage.getItem("currentTotal"),
				grandTotal = currentTotal - amount,
				cachedTotalTarget = $("#total");

			sessionStorage.setItem("currentTotal", grandTotal);

			cachedTotalTarget.text(grandTotal);
		}
	};

	return publiMembers;
});