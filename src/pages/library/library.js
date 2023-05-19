function library() {
	if ($(".library-slider").length) {
		const swiper = new Swiper(".library-slider", {
			slidesPerView: "auto",
			spaceBetween: 16,
			mousewheel: {
				forceToAxis: true,
			},
			navigation: {
				nextEl: $(".library-slider__next")[0],
				prevEl: $(".library-slider__prev")[0],
			},
		});
	}
}
