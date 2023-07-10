function about() {
	if ($(".target").length) {
		const target = new Swiper(".target-slider", {
			spaceBetween: 16,
			// loopAdditionalSlides: 5,
			slidesPerView: "auto",
			// loop: true,
			navigation: {
				nextEl: $(".target__next")[0],
				prevEl: $(".target__prev")[0],
			},
		});
	}
	if ($(".sovet__slider").length) {
		const sovet = new Swiper(".sovet__slider", {
			spaceBetween: 16,
			loopAdditionalSlides: 5,
			slidesPerView: "auto",

			navigation: {
				nextEl: $(".sovet__next")[0],
				prevEl: $(".sovet__prev")[0],
			},
		});
		$(".swiper-slide .sovet__next").click(function () {
			sovet.slideNext();
		});
		$(".swiper-slide .sovet__prev").click(function () {
			sovet.slidePrev();
		});
	}
	if ($(".employees__swiper").length) {
		const employees = new Swiper(".employees__swiper", {
			grid: {
				rows: 2,
				fill: "row",
			},
			spaceBetween: 16,
			slidesPerView: 4,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: "auto",
					grid: {
						rows: 1,
						fill: "row",
					},
				},
				710: {
					slidesPerView: 3,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
				1024: {
					slidesPerView: 4,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
			},
			navigation: {
				nextEl: $(".employees__next")[0],
				prevEl: $(".employees__prev")[0],
			},
		});
	}
	if ($(".documentations__swiper").length) {
		const documentations = new Swiper(".documentations__swiper", {
			spaceBetween: 16,
			slidesPerView: 4,
			loopAdditionalSlides: 10,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: "auto",
				},
				710: {
					slidesPerView: 2,
					grid: {
						rows: 1,
						fill: "row",
					},
				},
				1024: {
					slidesPerView: 1,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
				1200: {
					slidesPerView: 2,
					grid: {
						rows: 2,
						fill: "row",
					},
				},
			},
			navigation: {
				nextEl: $(".documentations__next")[0],
				prevEl: $(".documentations__prev")[0],
			},
		});
	}
	if ($(".white-about__bg").length) {
		let mt = 0;
		mt =
			($(".white-about").offset().top -
				200 -
				$(".sovet__grid").offset().top) *
			-1;
		$(".white-about__bg").css("top", mt + "px");

		$(window).on("resize", function () {
			let mt = 0;
			mt =
				($(".white-about").offset().top -
					200 -
					$(".sovet__grid").offset().top) *
				-1;
			$(".white-about__bg").css("top", mt + "px");
		});
	}
}
