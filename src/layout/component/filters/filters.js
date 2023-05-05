function filters() {
	function filterBg() {
		$(".filters").each(function () {
			let active = $(this).find(".filters__button._active");
			$(this).find(".filters__bg").css({
				left: active.position().left,
				top: active.position().top,
				width: active.outerWidth(),
				height: active.outerHeight(),
			});
		});
	}
	$(".swiper-sponsor-mob").each(function () {
		$(this).addClass("swiper");
		$(".swiper-sponsor-mob").html(
			'<div class="swiper-wrapper">' +
				$(this).closest(".block").find(".sponsor-grid").html() +
				"</div><div class='swiper-sponsor-mob__nav'><div class='swiper-sponsor-mob__prev'><svg viewBox='0 0 36 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.7706 22.7229L12.4934 23.4139L13.8754 21.9681L13.1525 21.2771L11.7706 22.7229ZM2 12L1.30902 11.2771L0.552783 12L1.30902 12.7229L2 12ZM13.1525 2.72287L13.8754 2.03189L12.4934 0.586146L11.7706 1.27713L13.1525 2.72287ZM13.1525 21.2771L2.69098 11.2771L1.30902 12.7229L11.7706 22.7229L13.1525 21.2771ZM2.69098 12.7229L13.1525 2.72287L11.7706 1.27713L1.30902 11.2771L2.69098 12.7229ZM2 13H36V11H2V13Z' fill='#0E0E0E'/></svg></div><div class='swiper-sponsor-mob__next'><svg viewBox='0 0 36 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M22.8475 21.2771L22.1246 21.9681L23.5066 23.4139L24.2294 22.7229L22.8475 21.2771ZM34 12L34.691 12.7229L35.4472 12L34.691 11.2771L34 12ZM24.2294 1.27713L23.5066 0.586146L22.1246 2.03189L22.8475 2.72287L24.2294 1.27713ZM24.2294 22.7229L34.691 12.7229L33.309 11.2771L22.8475 21.2771L24.2294 22.7229ZM34.691 11.2771L24.2294 1.27713L22.8475 2.72287L33.309 12.7229L34.691 11.2771ZM34 11H0V13H34V11Z' fill='#E26D14'/></svg></div ></div > "
		);
		$(this).find(".sponsor").addClass("swiper-slide");
		swiper = new Swiper(this, {
			speed: 400,
			autoHeight: true,
			spaceBetween: 10,
			navigation: {
				nextEl: $(this).find(".swiper-sponsor-mob__next")[0],
				prevEl: $(this).find(".swiper-sponsor-mob__prev")[0],
			},
		});
	});

	filterBg();
	$(".filters__button").click(function () {
		let filter = $(this).data("filter");
		let wrapper = $(this).closest(".filter-block");
		wrapper.find(".filters__button").removeClass("_active");
		$(this).addClass("_active");
		if (filter == "all") {
			wrapper.find("[data-filteritem]").removeClass("_d-none");
		} else {
			wrapper.find("[data-filteritem]").each(function () {
				if (filter == $(this).data("filteritem")) {
					$(this).removeClass("_d-none");
				} else {
					$(this).addClass("_d-none");
				}
			});
		}
		filterBg();
	});
}
