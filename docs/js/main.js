function contact() {
	const contactSlider = new Swiper(".contact__slider", {});
	ymaps.ready(function () {
		$(".contact-map").each(function () {
			let center = $(this).data("coord").split(",");

			let myMap = new ymaps.Map(
				this,
				{
					center: [
						parseFloat(center[0].trim()),
						parseFloat(center[1].trim()),
					],
					controls: ["zoomControl"],
					behaviors: ["ScrollZoom"],
					zoom: 16,
				},
				{
					searchControlProvider: "yandex#search",
				}
			);

			myPlacemark = new ymaps.Placemark(
				[parseFloat(center[0].trim()), parseFloat(center[1].trim())],
				{
					hintContent: "",
					balloonContent: "",
				},
				{
					iconLayout: "default#image",
					iconImageHref: $(this).data("marker"),
					iconImageSize: [70, 70],
					iconImageOffset: [-35, -35],
				}
			);
			myMap.geoObjects.add(myPlacemark);
		});
		$(".contact__toggle-wrap button").click(function () {
			$(".contact__toggle-wrap button").removeClass("_active");
			$(this).addClass("_active");
			$(".contact__toggle-bg").css({
				left: $(this).position().left,
				width: $(this).outerWidth(),
			});
			$(".contact-map").removeClass("_open");
			$(".contact-map").eq($(this).data("slide")).addClass("_open");
			contactSlider.slideTo($(this).data("slide"));
		});
		$(".contact__toggle-wrap button._active").click();
	});
}

$(function(){})
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

$(function(){})
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
			loop: true,
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

$(function(){})
function front() {
	let smScroll = window.innerHeight * 3;
	function procent(number1, number2) {
		return (number2 / 100) * number1;
	}
	var controller = new ScrollMagic.Controller();
	var startpin = new ScrollMagic.Scene({
		duration: smScroll,
	})
		.setPin("#front-top")
		.addTo(controller);
	// new ScrollMagic.Scene({
	// 	offset: procent(85, smScroll),
	// 	duration: procent(15, smScroll),
	// })
	// 	.setTween(
	// 		TweenMax.to(".front-top ", 1, {
	// 			marginBottom: -100,
	// 			ease: Linear.easeNone,
	// 		})
	// 	)
	// 	.addTo(controller);
	new ScrollMagic.Scene({
		offset: procent(50, smScroll),
		duration: procent(10, smScroll),
	})
		.setTween(
			TweenMax.to(".front-top__text-wrap ", 1, {
				y: 1,
				ease: Linear.easeNone,
			})
		)
		.addTo(controller);
	new ScrollMagic.Scene({
		offset: procent(50, smScroll),
		duration: procent(10, smScroll),
	})
		.setTween(
			TweenMax.to(".front-top__down ", 1, {
				opacity: 0,
				ease: Linear.easeNone,
			})
		)
		.addTo(controller);
	new ScrollMagic.Scene({
		duration: procent(90, smScroll),
	})
		.setTween(
			TweenMax.to(".front-top__back-mask ", 1, {
				maskSize: 80000,
				ease: Linear.easeIn,
			})
		)
		.addTo(controller);
	new ScrollMagic.Scene({
		duration: procent(90, smScroll),
	})
		.setTween(
			TweenMax.to(".front-top__back-mask img", 1, {
				scale: 1,
				ease: Linear.easeIn,
			})
		)
		.addTo(controller);

	if ($(".front-help").length) {
		let cf = $(".front-help__circle").first();
		let cl = $(".front-help__circle").last();

		$(".front-help").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
	}
	const libslider = new Swiper(".front-lib__slider", {
		spaceBetween: 16,
		slidesPerView: 4,

		breakpoints: {
			320: {
				slidesPerView: "auto",
			},

			1150: {
				slidesPerView: 4,
			},
		},
	});
	$(".front-top__down").click(function () {
		console.log(smScroll);
		$("html, body").animate({ scrollTop: window.innerHeight * 1.3 }, 400);
	});
}

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

function news() {
	let url = $(".press-centr__filters").data("url");
	let cat = $(".press-centr__filters").data("category");
	let page = $(".press-centr__filters").data("page");
	let category = "";
	$(".press-centr__filter").click(function () {
		category = "";
		$(this).toggleClass("_active");
		$(".press-centr__filter").each(function () {
			if ($(this).hasClass("_active")) {
				category += $(this).data("filter") + ";";
			}
		});
		category = category.substring(0, category.length - 1);
		console.log(`${url}?${cat}=${category}`);
		$.ajax({
			url: `${url}?${cat}=${category}`,
			method: "GET",
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				$(".press-centr__grid").html(data);
				$(".press-centr__grid").find(".news").eq(0).addClass("_big");
				$(".press-centr__grid").find(".news").eq(1).addClass("_big");
			},
			error: function () {},
		});
	});
	$(".press-centr__more").click(function () {
		category = "";
		$(".press-centr__filter").each(function () {
			if ($(this).hasClass("_active")) {
				category += $(this).data("filter") + ";";
			}
		});
		category = category.substring(0, category.length - 1);
		$.ajax({
			url: `${url}?${cat}=${category}`,
			method: "GET",
			headers: {
				"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
			},
			context: document.body,
			success: function (data) {
				$(".press-centr__grid").append(data);
			},
			error: function () {},
		});
	});
}

$(function(){})

function tigr() {
	if ($(".tigr").length) {
		let prev = $(".tigr__slider-prev");
		let next = $(".tigr__slider-next");
		let cf = $(".tigr__circle").first();
		let cl = $(".tigr__circle").last();

		$(".tigr__top").mousemove(function (event) {
			let x = event.clientX / window.innerWidth;
			let y = event.clientY / window.innerHeight;
			cf.css(
				"transform",
				"translate(-" + x * 130 + "px, -" + y * 130 + "px)"
			);
			cl.css(
				"transform",
				"translate(" + x * 130 + "px, " + y * 130 + "px)"
			);
		});
		$(".tigr__scroll").on("scroll", function (e) {
			horizontal = e.currentTarget.scrollLeft;
			let f = $(this).find(".tigr__parametrs").innerWidth() + 300;
			if (horizontal < 50) {
				next.addClass("_not-active");
			} else {
				next.removeClass("_not-active");
			}
			if (f - 50 < $(this).innerWidth() + horizontal) {
				prev.addClass("_not-active");
			} else {
				prev.removeClass("_not-active");
			}
		});
		$(".tigr__scroll").trigger("scroll");
		prev.click(function () {
			$(".tigr__scroll")
				.stop()
				.animate(
					{ scrollLeft: $(".tigr__scroll").scrollLeft() + 250 },
					400
				);
		});
		next.click(function () {
			$(".tigr__scroll")
				.stop()
				.animate(
					{ scrollLeft: $(".tigr__scroll").scrollLeft() - 250 },
					400
				);
		});
	}
}

$(function(){})
$(function(){})
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

$(function(){})
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

$(function(){})
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
		let pagecount = wrapper.data("pagecount");
		let more = wrapper.find("[data-filtermore]");
		let i = 0;
		let c = 0;
		if (wrapper.data("pagecount")) {
			wrapper.find(".filters__button").removeClass("_active");
			$(this).addClass("_active");

			wrapper.find("[data-filteritem]").each(function () {
				console.log(filter);
				console.log(
					filter == $(this).data("filteritem") || filter == "all"
				);
				if (filter == $(this).data("filteritem") || filter == "all") {
					c++;
					if (i < pagecount) {
						i++;
						$(this).removeClass("_d-none");
					} else {
						$(this).addClass("_d-none");
					}
				} else {
					$(this).addClass("_d-none");
				}
			});
			console.log(i, c);
			if (c > pagecount) {
				more.removeClass("_d-none");
			} else {
				more.addClass("_d-none");
			}
		} else {
			wrapper.find(".filters__button").removeClass("_active");
			$(this).addClass("_active");
			let i = 0;

			wrapper.find("[data-filteritem]").each(function () {
				if (filter == "all") {
					$(this).removeClass("_d-none");
					$(this).attr("visible", i);
					i++;
				} else {
					if (filter == $(this).data("filteritem")) {
						$(this).removeClass("_d-none");
						$(this).attr("visible", i);
						i++;
					} else {
						$(this).addClass("_d-none");
						$(this).removeAttr("visible");
					}
				}
			});
		}
		filterBg();
	});
	$("[data-filtermore]").click(function () {
		let wrapper = $(this).closest(".filter-block");
		let filter = wrapper.find(".filters__button._active").data("filter");
		let pagecount = wrapper.data("pagecount");
		let more = wrapper.find("[data-filtermore]");
		let i = 0;
		let c = 0;

		wrapper.find("._d-none[data-filteritem]").each(function () {
			console.log("xx");
			if (filter == $(this).data("filteritem") || filter == "all") {
				c++;
				if (i < pagecount) {
					i++;
					$(this).removeClass("_d-none");
				} else {
					$(this).addClass("_d-none");
				}
			} else {
				$(this).addClass("_d-none");
			}
		});
		console.log(c, i, pagecount);
		if (c >= pagecount) {
			more.removeClass("_d-none");
		} else {
			more.addClass("_d-none");
		}
	});
	$(".filters__button._active").first().trigger("click");
	$(".filters__button._active").first().click();
}

$(function(){})
function form() {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$(".btn-1").each(function () {
		$(this).html(
			`<span  class="btn-1__circle"></span><span class="btn-1__overflow"><span>${$(
				this
			).text()}</span><span>${$(this).text()}</span></span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg   viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 33.1666L20 18.4999L4 3.83325" stroke="#E26D14" stroke-width="5" stroke-linecap="square"/></svg>`
		);
	});
	$(".btn-1").hover(
		function () {
			let $th = $(this);
			$th.removeClass("_out _no-transition");
		},
		function () {
			let $th = $(this);
			$th.addClass("_out");
			setTimeout(function () {
				$th.addClass("_no-transition");
				$th.removeClass("_out");
				setTimeout(function () {
					$th.removeClass(" _no-transition");
				}, 500);
			}, 1000);
		}
	);
	$(".file").each(function () {
		let inputFile = $(this).find(".file__input");
		let name = inputFile.data("name");
		let files = $(this).find(".file__files");
		inputFile.on("change", function () {
			var files = this.files;

			for (var i = 0; i < files.length; i++) {
				var file = files[i];

				// if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
				// 	alert("Фотография должна быть в формате jpg, png или gif");
				// 	continue;
				// }

				// if (file.size > maxFileSize) {
				// 	alert("Размер фотографии не должен превышать 2 Мб");
				// 	continue;
				// }

				preview(files[i], files);
			}

			this.value = "";
		});
		function preview(file) {
			var reader = new FileReader();
			reader.addEventListener("load", function (event) {
				files.append(`<div class="file__file">
                    <textarea name="${name}">${event.target.result}</textarea>
                    <div class="file__file-title">${file.name}</div>
                    <button class="file__file-delete" type="button"><svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.5 3.5V2C3.5 1.44772 3.94772 1 4.5 1H8.5C9.05228 1 9.5 1.44772 9.5 2V3.5M0 4H13M1 4L2 14C2 14.5523 2.44772 15 3 15H10C10.5523 15 11 14.5523 11 14L12 4" stroke="#D1D1D1"></path>
						</svg>
                    </button>
                  </div>`);
			});
			reader.readAsDataURL(file);
		}
	});
	$(document).on("click", ".file__file-delete", function () {
		$(this).closest(".file__file").remove();
	});
}

function header() {
	let smScroll = window.innerHeight * 3;
	function procent(number1, number2) {
		return (number2 / 100) * number1;
	}
	$(".header__toggle-color").click(function () {
		$("body").attr("layout", $(this).data("toggle"));
	});
	let header = $(".header");
	let prevscroll = $(window).scrollTop();
	// if (isFront) {
	// 	prevscroll = window.innerHeight * 2;
	// }

	if ($(".front-top").length) {
		if (prevscroll > 5 && $(window).scrollTop() > smScroll) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		if ($(window).scrollTop() <= procent(60, smScroll)) {
			header.addClass("_header-opacity");
		} else {
			header.removeClass("_header-opacity");
		}
		$(window).scroll(() => {
			let currentScroll = $(window).scrollTop();

			if (prevscroll > 5 && $(window).scrollTop() > smScroll) {
				header.addClass("_bg");
			} else {
				header.removeClass("_bg");
			}
			if (
				currentScroll > prevscroll &&
				$(window).scrollTop() > smScroll
			) {
				header.addClass("_header-hidden");
			} else {
				header.removeClass("_header-hidden");
			}
			if (currentScroll <= 10) {
				header.removeClass("_header-hidden");
			}
			if ($(window).scrollTop() <= procent(60, smScroll)) {
				header.addClass("_header-opacity");
			} else {
				header.removeClass("_header-opacity");
			}
			prevscroll = currentScroll;
		});
	} else {
		if (prevscroll > 5) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		$(window).scroll(() => {
			let currentScroll = $(window).scrollTop();

			if (currentScroll > 5) {
				header.addClass("_bg");
			} else {
				header.removeClass("_bg");
			}
			if (currentScroll > prevscroll) {
				header.addClass("_header-hidden");
			} else {
				header.removeClass("_header-hidden");
			}
			if (currentScroll <= 10) {
				header.removeClass("_header-hidden");
			}
			prevscroll = currentScroll;
		});
	}
}

function imgSlider() {
	$(".img-slider").each(function () {
		let $th = $(this);
		const swiper = new Swiper(this, {
			loop: true,
			navigation: {
				nextEl: $th.find(".img-slider__next")[0],
				prevEl: $th.find(".img-slider__prev")[0],
			},
			on: {
				init: function (swiper) {
					$th.find(".img-slider__pagi").text(
						String(swiper.activeIndex + 1).padStart(2, "0") +
							"/" +
							String(swiper.slides.length).padStart(2, "0")
					);
				},
				slideChange: function (swiper) {
					$th.find(".img-slider__pagi").text(
						String(swiper.activeIndex + 1).padStart(2, "0") +
							"/" +
							String(swiper.slides.length).padStart(2, "0")
					);
				},
			},
		});
	});
}

$(function () {
	// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

	// scroller = ScrollSmoother.create({
	// 	smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 	effects: true, // looks for data-speed and data-lag attributes on elements
	// 	smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	// });
	function accordion() {
		$(".accordion__head").click(function () {
			if ($(this).closest(".accordion").hasClass("_open")) {
				$(this)
					.closest(".accordions")
					.find(".accordion")
					.removeClass("_open");
				$(this)
					.closest(".accordions")
					.find(".accordion__content")
					.stop()
					.slideUp();
			} else {
				$(this)
					.closest(".accordions")
					.find(".accordion")
					.removeClass("_open");
				$(this)
					.closest(".accordions")
					.find(".accordion__content")
					.stop()
					.slideUp();
				$(this)
					.closest(".accordion")
					.find(".accordion__content")
					.stop()
					.slideDown();
				$(this).closest(".accordion").addClass("_open");
			}
		});
	}
	function video() {
		$(".video__play-wrap ").click(function () {
			let video = $(this).closest(".video").find("video")[0];
			$(this).fadeOut();
			video.play();
		});
	}
	function parallax() {
		let controller = new ScrollMagic.Controller({
			refreshInterval: 0,
		});

		let scenes = [];
		$(".two-photo").each(function () {
			console.log($(this).find(".two-photo__card:first-child"));
			scenes.push(
				new ScrollMagic.Scene({
					triggerElement: this,
					duration: window.innerWidth / 2,
				})

					.setTween($(this).find(".two-photo__card:first-child"), {
						y: 50,
					}) // the tween durtion can be omitted and defaults to 1
					// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
					.addTo(controller)
			);
			scenes.push(
				new ScrollMagic.Scene({
					triggerElement: this,
					duration: window.innerWidth / 2,
				})

					// animate color and top border in relation to scroll position
					.setTween($(this).find(".two-photo__card:last-child"), {
						y: -50,
					}) // the tween durtion can be omitted and defaults to 1

					// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
					.addTo(controller)
			);
		});
	}
	function aos() {
		let offset = window.innerWidth < 600 ? 60 : 120;
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: offset, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 800, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
		document.addEventListener("aos:in", ({ detail }) => {
			if (detail.hasAttribute("data-count")) {
				let count = $(detail).data("count");
				let i = 0;
				let interval = setInterval(function () {
					i++;
					$(detail).text(i);
					if (i >= count) {
						clearInterval(interval);
					}
				}, 2);
			}
		});
	}
	function downPage() {
		$(".down-page").click(function () {
			$("html, body").animate({ scrollTop: window.innerHeight }, 400);
		});
	}
	function twoCard() {
		$(".two-cards").each(function () {
			$(this).find(".two-cards__card").first().addClass("_not-hover");
		});
		$(".two-cards__card").hover(
			function () {
				$(this)
					.closest(".two-cards")
					.find(".two-cards__card")
					.addClass("_not-hover");
				$(this).removeClass("_not-hover");
			},
			function () {}
		);
	}
	svg();
	header();
	search();
	pmenu();
	function startPage() {
		if ($(".page-top__bg video").length) {
			var vid = document.querySelector(".page-top__bg video");
			vid.onended = function () {
				$(".page-top__play").fadeIn();
			};
			$(".page-top__play").click(function () {
				$(this).fadeOut();
				$(this)
					.closest(".page-top")
					.find(".page-top__bg video")[0]
					.play();
				$(this)
					.closest(".page-top")
					.find(".page-top__bg video")[0].currentTime = 0;
			});
		}
		parallax();
		// scroller.effects(".block", { lag: 1, speed: 1 });
		scroll();
		form();
		twoCard();
		who();
		global();
		video();
		aResidents();
		tigr();
		about();
		library();
		imgSlider();
		filters();
		bigSlider();
		downPage();
		strategy();
		aos();
		accordion();
	}
	startPage();
	front();
	contact();
	news();
	// barba.init({
	// 	views: [
	// 		{
	// 			namespace: "front",
	// 			beforeEnter() {
	// 				startPage();
	// 				front();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "contact",
	// 			beforeEnter() {
	// 				startPage();
	// 				contact();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "pressCentr",
	// 			beforeEnter() {
	// 				startPage();
	// 				news();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "ui",
	// 			beforeEnter() {
	// 				startPage();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "news-detail",
	// 			beforeEnter() {
	// 				startPage();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "history",
	// 			beforeEnter() {
	// 				startPage();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "sponsor",
	// 			beforeEnter() {
	// 				startPage();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 		{
	// 			namespace: "default",
	// 			beforeEnter() {
	// 				startPage();
	// 			},
	// 			afterLeave() {},
	// 		},
	// 	],
	// });
	// barba.hooks.after(() => {
	// 	// scroll.update();
	// });
});

function pmenu() {
	$(".header__meny-open").click(function () {
		$("body").toggleClass("_pmenu-animate");
		if ($("body").hasClass("_pmenu-animate")) {
			setTimeout(function () {
				if ($("body").hasClass("_pmenu-animate")) {
					$(".pmenu").addClass("_pointer-events");
				}
			}, 1900);
		} else {
			$(".pmenu").removeClass("_pointer-events");
		}
	});
	$(".pmenu__item-inner a").click(function () {
		$("body").removeClass("_pmenu-animate");
		$(".pmenu").removeClass("_pointer-events");
	});
	$(".pmenu__item:first-child").hover(
		function () {
			$("body").addClass("_pmenu-first-hover");
		},
		function () {
			$("body").removeClass("_pmenu-first-hover");
		}
	);
	$(".pmenu__item:last-child").hover(
		function () {
			$("body").addClass("_pmenu-last-hover");
		},
		function () {
			$("body").removeClass("_pmenu-last-hover");
		}
	);
}

function popupClose(popup) {
	let $popup = $(popup);
	$popup.removeClass("_animate");
	setTimeout(function () {
		$popup.removeClass("_display");
		$("body").removeClass("_popup-open");
	}, 400);
}
function popupOpen(popup) {
	$("body").addClass("_popup-open");
	if ($(".popup._display").length) {
		$(".popup._display").each(function () {
			popupClose("#" + $(this).attr("id"));
		});
	}
	let $popup = $(popup);
	$popup.addClass("_display");
	setTimeout(function () {
		$popup.addClass("_animate");
	}, 100);
}
function popup() {
	$("[data-popup]").click(function () {
		popupOpen($(this).data("popup"));
	});
	$(".open-video").click(function () {
		$(".video-popup").fadeIn();
		$(".video-popup__wrap").html(
			'<video autoplay src="' + $(".open-video").data("video") + '"/>'
		);
	});
	$(".video-popup__overlay ,.video-popup__close").click(function () {
		$(this)
			.closest(".video-popup")
			.stop()
			.fadeOut(function () {
				$(".video-popup__wrap").html("");
			});
	});
	$(".popup__overlay ,.popup__close").click(function () {
		popupClose("#" + $(this).closest(".popup").attr("id"));
	});
	$(".popup-location__overlay ,.popup-location__close").click(function () {
		$(this).closest(".popup-location").fadeOut();
	});
}
$(function () {
	popup();
	let feedback = $("#form-feedback").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#form-feedback button[type='submit']").attr(
				"disabled",
				"disabled"
			);
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					popupOpen($("#form-feedback").data("success"));
					$("#form-feedback button[type='submit']").removeAttr(
						"disabled"
					);
				},
				error: function () {
					popupOpen($("#form-feedback").data("error"));
					$("#form-feedback button[type='submit']").removeAttr(
						"disabled"
					);
				},
			});
		},
	});

	let job = $("#form-job").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#form-job button[type='submit']").attr("disabled", "disabled");
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					popupOpen($("#form-job").data("success"));
					$("#form-job button[type='submit']").removeAttr("disabled");
				},
				error: function () {
					popupOpen($("#form-job").data("error"));
					$("#form-job button[type='submit']").removeAttr("disabled");
				},
			});
		},
	});
});

function search() {
	$(".search-box__close").click(function () {
		$(".search-box").fadeOut(function () {
			$("body").removeClass("_no-scroll");
		});
	});
	$(".header__search-button").click(function () {
		$("body").addClass("_no-scroll");
		$(".search-box").fadeIn();
		setTimeout(function () {}, 100);
	});
	$("#search-input").autocomplete({
		serviceUrl: $("#search-input").data("url"),
		noSuggestionNotice: "Нет результатов ",
		dataType: "json",
		lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
			var re = new RegExp(
				"\\b" + $.Autocomplete.utils.escapeRegExChars(queryLowerCase),
				"gi"
			);
			return re.test(suggestion.value);
		},
		onSelect: function (suggestion) {
			alert("You selected: " + suggestion.value + ", " + suggestion.data);
		},
		onHint: function (hint) {
			$("#search-input-x").val(hint);
		},
		onInvalidateSelection: function () {
			$$("#search-input-x").val("");
		},
	});
}

function svg() {
	jQuery(".svg-load").each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr("id");
		var imgClass = $img.attr("class");
		var imgURL = $img.attr("src");

		jQuery.get(
			imgURL,
			function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find("svg");

				// Add replaced image's ID to the new SVG
				if (typeof imgID !== "undefined") {
					$svg = $svg.attr("id", imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== "undefined") {
					$svg = $svg.attr("class", imgClass + " replaced-svg");
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr("xmlns:a");

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if (
					!$svg.attr("viewBox") &&
					$svg.attr("height") &&
					$svg.attr("width")
				) {
					$svg.attr(
						"viewBox",
						"0 0 " + $svg.attr("height") + " " + $svg.attr("width")
					);
				}

				// Replace image with new SVG
				$img.replaceWith($svg);
			},
			"xml"
		);
	});
}

function scroll() {
	// let controller = new ScrollMagic.Controller({
	// 	refreshInterval: 0,
	// });
	// let scenes = [];
	// $(".block").each(function () {
	// 	scenes.push(
	// 		new ScrollMagic.Scene({
	// 			triggerElement: this,
	// 			duration: 500,
	// 		})
	// 			.triggerHook(1)
	// 			// animate color and top border in relation to scroll position
	// 			.setTween($(this).find(".block"), {
	// 				top: 0,
	// 			}) // the tween durtion can be omitted and defaults to 1
	// 			// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
	// 			.addTo(controller)
	// 	);
	// });
	// $(".parallax").each(function () {
	// 	console.log("parallax", $(this).data("parallax"));
	// 	scenes.push(
	// 		new ScrollMagic.Scene({
	// 			triggerElement: this,
	// 			duration: window.innerHeight,
	// 		})
	// 			.triggerHook(1)
	// 			// animate color and top border in relation to scroll position
	// 			.setTween($(this).find("picture"), {
	// 				y: $(this).data("parallax"),
	// 			}) // the tween durtion can be omitted and defaults to 1
	// 			// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
	// 			.addTo(controller)
	// 	);
	// });
	// $(".bg-scale,.full-img ").each(function () {
	// 	scenes.push(
	// 		new ScrollMagic.Scene({
	// 			triggerElement: this,
	// 			duration: window.innerHeight,
	// 		})
	// 			.triggerHook(1)
	// 			// animate color and top border in relation to scroll position
	// 			.setTween($(this).find("img,video"), {
	// 				scale: 1,
	// 			}) // the tween durtion can be omitted and defaults to 1
	// 			// .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
	// 			.addTo(controller)
	// 	);
	// });
}
