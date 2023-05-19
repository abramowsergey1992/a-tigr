function who() {
	if ($(".who-1__slider").length) {
		$(".who-1__slider").each(function () {
			const whoSlider = new Swiper(this, {
				slidesPerView: 1,
				spaceBetween: 10,
				pagination: {
					el: $(this).find(".who-1__pagy")[0],
					type: "bullets",
					clickable: true,
				},
			});
		});
	}
	if ($(".grow-slider").length) {
		$(".grow-slider").each(function () {
			const growSlider = new Swiper(this, {
				slidesPerView: 1,
				spaceBetween: 12,
				navigation: {
					nextEl: $(this).find(".grow-slider__next")[0],
					prevEl: $(this).find(".grow-slider__prev")[0],
				},
				mousewheel: {
					forceToAxis: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: "auto",
					},
				},
			});
		});
	}
}
