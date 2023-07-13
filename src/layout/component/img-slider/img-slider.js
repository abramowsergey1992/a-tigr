function imgSlider() {
	$(".img-slider").each(function () {
		let $th = $(this);
		let length = String($(this).find(".swiper-slide").length).padStart(
			2,
			"0"
		);
		const swiper = new Swiper(this, {
			loop: true,
			navigation: {
				nextEl: $th.find(".img-slider__next")[0],
				prevEl: $th.find(".img-slider__prev")[0],
			},
			on: {
				init: function (swiper) {
					$th.find(".img-slider__pagi").text(
						String(swiper.realIndex + 1).padStart(2, "0") +
							"/" +
							length
					);
				},
				slideChange: function (swiper) {
					$th.find(".img-slider__pagi").text(
						String(swiper.realIndex + 1).padStart(2, "0") +
							"/" +
							length
					);
				},
			},
		});
	});
}
