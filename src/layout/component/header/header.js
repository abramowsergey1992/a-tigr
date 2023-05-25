function header() {
	let smScroll = window.innerHeight * 3;
	function procent(number1, number2) {
		return (number2 / 100) * number1;
	}
	$(".header__toggle-color").click(function () {
		$("body").attr("layout", $(this).data("toggle"));
	});
	let header = $(".header");
	let prevscroll = $(window).scrollTop();
	// if (isFront) {
	// 	prevscroll = window.innerHeight * 2;
	// }

	if ($(".front-top").length) {
		if (prevscroll > 5 && $(window).scrollTop() > smScroll) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		if ($(window).scrollTop() <= procent(60, smScroll)) {
			header.addClass("_header-opacity");
		} else {
			header.removeClass("_header-opacity");
		}
		$(window).scroll(() => {
			let currentScroll = $(window).scrollTop();

			if (prevscroll > 5 && $(window).scrollTop() > smScroll) {
				header.addClass("_bg");
			} else {
				header.removeClass("_bg");
			}
			if (
				currentScroll > prevscroll &&
				$(window).scrollTop() > smScroll
			) {
				header.addClass("_header-hidden");
			} else {
				header.removeClass("_header-hidden");
			}
			if (currentScroll <= 10) {
				header.removeClass("_header-hidden");
			}
			if ($(window).scrollTop() <= procent(60, smScroll)) {
				header.addClass("_header-opacity");
			} else {
				header.removeClass("_header-opacity");
			}
			prevscroll = currentScroll;
		});
	} else {
		if (prevscroll > 5) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		$(window).scroll(() => {
			let currentScroll = $(window).scrollTop();

			if (currentScroll > 5) {
				header.addClass("_bg");
			} else {
				header.removeClass("_bg");
			}
			if (currentScroll > prevscroll) {
				header.addClass("_header-hidden");
			} else {
				header.removeClass("_header-hidden");
			}
			if (currentScroll <= 10) {
				header.removeClass("_header-hidden");
			}
			prevscroll = currentScroll;
		});
	}
}
