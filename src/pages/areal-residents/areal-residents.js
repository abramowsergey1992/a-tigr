function aResidents() {
	if ($(".service-contact").length) {
		let prev = $(".service-contacts__slider-prev");
		let next = $(".service-contacts__slider-next");
		$(".service-contacts__scroll").on("scroll", function (e) {
			horizontal = e.currentTarget.scrollLeft;

			let f = $(this).find(".service-contacts__grid").innerWidth();
			if (horizontal < 50) {
				prev.addClass("_not-active");
			} else {
				prev.removeClass("_not-active");
			}
			if (f - 75 < $(this).innerWidth() + horizontal) {
				next.addClass("_not-active");
			} else {
				next.removeClass("_not-active");
			}
		});
		$(".service-contacts__scroll").trigger("scroll");
		prev.click(function () {
			console.log("xxx");
			$(".service-contacts__scroll")
				.stop()
				.animate(
					{
						scrollLeft:
							$(".service-contacts__scroll").scrollLeft() - 250,
					},
					400
				);
		});
		console.log("32423");
		next.click(function () {
			console.log("ccc");
			$(".service-contacts__scroll")
				.stop()
				.animate(
					{
						scrollLeft:
							$(".service-contacts__scroll").scrollLeft() + 250,
					},
					400
				);
		});
	}
}
