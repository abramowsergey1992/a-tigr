function strategy() {
	$(".strategy-1-slider").each(function () {
		let th = $(this);

		swiper = new Swiper(this, {
			spaceBetween: 10,
			pagination: {
				clickable: true,
				el: th.find(".strategy-1-slider__pagi")[0],
			},
			on: {
				init: function (swiper) {
					if (
						$(swiper.slides[swiper.activeIndex]).hasClass("_orange")
					) {
						th.addClass("_orange");
					} else {
						th.removeClass("_orange");
					}
				},
				slideChange: function (swiper) {
					if (
						$(swiper.slides[swiper.activeIndex]).hasClass("_orange")
					) {
						th.addClass("_orange");
					} else {
						th.removeClass("_orange");
					}
				},
			},
		});
	});
}
