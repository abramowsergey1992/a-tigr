function tigr() {
	if ($(".tigr").length) {
		let prev = $(".tigr__slider-prev");
		let next = $(".tigr__slider-next");
		let cf = $(".tigr__circle").first();
		let cl = $(".tigr__circle").last();

		$(".tigr__top").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
		$(".tigr__scroll").on("scroll", function (e) {
			horizontal = e.currentTarget.scrollLeft;
			let f = $(this).find(".tigr__parametrs").innerWidth() + 300;
			if (horizontal < 50) {
				next.addClass("_not-active");
			} else {
				next.removeClass("_not-active");
			}
			if (f - 50 < $(this).innerWidth() + horizontal) {
				prev.addClass("_not-active");
			} else {
				prev.removeClass("_not-active");
			}
		});
		$(".tigr__scroll").trigger("scroll");
		prev.click(function () {
			$(".tigr__scroll")
				.stop()
				.animate(
					{ scrollLeft: $(".tigr__scroll").scrollLeft() + 250 },
					400
				);
		});
		next.click(function () {
			$(".tigr__scroll")
				.stop()
				.animate(
					{ scrollLeft: $(".tigr__scroll").scrollLeft() - 250 },
					400
				);
		});
	}
}
