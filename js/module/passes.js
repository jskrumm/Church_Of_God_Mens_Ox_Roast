define(["lodash", "service/register"], function (_, registerService) {
	"use strict";

	var publicMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("change", ".event-pass-types input[type='radio'], .activity-pass-types input[type='checkbox']", {"scope": settings.scope}, publicMembers.triggerSetTotalEvent);
			$(settings.scope).on("setTotal", publicMembers.setTotal);
		},
		"listen": function () {
			$(document).on("guest:added", publicMembers.setTotal);
			$(document).on("guest:removed", publicMembers.deductAmount);
		},
		"setTotal": function (event, target) {
			var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked", target),
				cachedTotalTarget = $("#total"),
				selectedEventPassPrices = _.map(selectedEventPasses, publicMembers.getPriceFromDataAttr),
				currentTotal = cachedTotalTarget.text() || 0,
				grandTotal = registerService.total(selectedEventPassPrices, currentTotal);

			cachedTotalTarget.text(grandTotal);
		},
		"getPriceFromDataAttr": function (element) {
			return $(element).attr("data-price");
		},
		"deductAmount": function (amount) {
			var cachedTotalTarget = $("#total"),
				currentTotal = cachedTotalTarget.text(),
				grandTotal = parseInt(currentTotal) - amount;

			cachedTotalTarget.text(grandTotal);
		},
		"triggerSetTotalEvent": function (event) {
			$(event.data.scope).trigger("setTotal", [event.data.scope]);
		}
	};

	return publicMembers;
});