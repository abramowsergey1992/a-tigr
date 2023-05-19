function global() {
	if ($(".global-program-slider").length) {
		const target = new Swiper(".global-program-slider", {
			spaceBetween: 16,
			// loopAdditionalSlides: 5,
			slidesPerView: "auto",
			// loop: true,
			navigation: {
				nextEl: $(".global-program__next")[0],
				prevEl: $(".global-program__prev")[0],
			},
		});
	}
}
