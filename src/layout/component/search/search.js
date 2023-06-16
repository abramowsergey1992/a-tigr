function search() {
	$(".search-box__close").click(function () {
		$(".search-box").fadeOut(function () {
			$("body").removeClass("_no-scroll");
		});
	});
	$(".header__search-button").click(function () {
		$("body").addClass("_no-scroll");
		$(".search-box").fadeIn();
		setTimeout(function () {}, 100);
	});

	$("#search-input").autocomplete({
		serviceUrl: $("#search-input").data("url"),
		noSuggestionNotice: "Нет результатов ",
		dataType: "json",
		lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
			var re = new RegExp(
				"\\b" + $.Autocomplete.utils.escapeRegExChars(queryLowerCase),
				"gi"
			);
			return re.test(suggestion.value);
		},
		onSelect: function (suggestion) {
			setTimeout(() => {
				$("#search-popup-form").submit();
			}, 100);
		},
		onHint: function (hint) {
			$("#search-input-x").val(hint);
		},
		onInvalidateSelection: function () {
			$("#search-input-x").val("");
		},
	});
}
