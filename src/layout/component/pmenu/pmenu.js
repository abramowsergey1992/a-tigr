function pmenu() {
	$(".header__meny-open").click(function () {
		$("body").toggleClass("_pmenu-animate");

		if ($("body").hasClass("_pmenu-animate")) {
			setTimeout(function () {
				if ($("body").hasClass("_pmenu-animate")) {
					$(".pmenu").addClass("_pointer-events");
				}
			}, 1900);
		} else {
			$(".pmenu").removeClass("_pointer-events");
		}
	});
	// $(".pmenu__item-inner a").click(function () {
	// 	$("body").removeClass("_pmenu-animate");
	// 	$(".pmenu").removeClass("_pointer-events");
	// });
	$(".pmenu__item:first-child").hover(
		function () {
			$("body").addClass("_pmenu-first-hover");
		},
		function () {
			$("body").removeClass("_pmenu-first-hover");
		}
	);
	$(".pmenu__item:last-child").hover(
		function () {
			$("body").addClass("_pmenu-last-hover");
		},
		function () {
			$("body").removeClass("_pmenu-last-hover");
		}
	);
}
