define(["lodash", "service/register"], function (_, registerService) {
	var publiMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("change", ".event-pass-types input[type='radio']", publiMembers.setTotal);
			$(settings.scope).on("change", ".activity-pass-types input[type='checkbox']", publiMembers.setTotal);
		},
		"setTotal": function (event) {
			var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked"),
				cachedTotalTarget = $("#total"),
				selectedEventPassPrices = _.map(selectedEventPasses, publiMembers.getPriceFromDataAttr),
				currentTotal = cachedTotalTarget.text(),
				grandTotal = registerService.total(selectedEventPassPrices, currentTotal);

			cachedTotalTarget.text(grandTotal);
		},
		"getPriceFromDataAttr": function (element) {
			return $(element).attr("data-price");
		}
	};

	return publiMembers;
});