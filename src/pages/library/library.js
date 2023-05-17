function library() {
	if ($(".library-slider").length) {
		const swiper = new Swiper(".library-slider", {
			slidesPerView: "auto",
			spaceBetween: 16,
		});
	}
}
