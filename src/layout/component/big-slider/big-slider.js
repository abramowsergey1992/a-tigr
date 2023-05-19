function bigSlider() {
	$(".big-slider").each(function () {
		thumb = new Swiper($(this).find(".big-slider__thumb")[0], {
			speed: 400,
			loop: true,
			watchSlidesProgress: true,
			spaceBetween: 14,
			freeMode: true,
			breakpoints: {
				320: {
					slidesPerView: 2.1,
				},

				480: {
					slidesPerView: 3,
				},

				640: {
					slidesPerView: 4,
				},

				1024: {
					slidesPerView: 6,
				},
			},
		});
		big = new Swiper($(this).find(".big-slider__main")[0], {
			speed: 400,
			loop: true,
			spaceBetween: 10,
			thumbs: {
				swiper: thumb,
			},
			navigation: {
				nextEl: $(this).find(".big-slider__main-next")[0],
				prevEl: $(this).find(".big-slider__main-prev")[0],
			},
		});
	});
}
