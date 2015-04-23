define(["service/register"], function (registerService) {
	var publiMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("change", "event-pass-types input[type='radio']", {"target": $(this)}, publiMembers.setTotal);
			$(settings.scope).on("change", "activity-pass-type input[type'checkbox']", {"target": $(this)}, publiMembers.setTotal);
		},
		"setTotal": function (target) {
			var cachedTarget = $(target),
				cachedTotalTarget = $("#total"),
				initalTotal = cachedTotalTarget.text(),
				passPrice = cachedTarget.attr("data-price"),
				isTargetChecked = cachedTarget.is(":checked"),
				newTotal = initalTotal;

			if (isTargetChecked === true) {
				newTotal = registerService.total(initalTotal, passPrice, "add");
			} else {
				newTotal = registerService.total(initalTotal, passPrice, "subtract");
			}
			
			cachedTotalTarget.text(newTotal);
		}
	};

	return publiMembers;
});