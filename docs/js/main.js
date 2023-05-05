$(function(){})
function contact() {
	const contactSlider = new Swiper(".contact__slider", {});
	ymaps.ready(function () {
		let center = $(".contact__toggle-wrap  ._active")
			.data("coord")
			.split(",");
		var myMap = new ymaps.Map(
			"contact-map",
			{
				center: [
					parseFloat(center[0].trim()),
					parseFloat(center[1].trim()),
				],
				controls: [],
				zoom: 16,
			},
			{
				searchControlProvider: "yandex#search",
			}
		);
		$(".contact__toggle-wrap button").each(function () {
			let coord = $(this).data("coord").split(",");
			myPlacemark = new ymaps.Placemark(
				[parseFloat(coord[0].trim()), parseFloat(coord[1].trim())],
				{
					hintContent: "",
					balloonContent: "",
				},
				{
					iconLayout: "default#image",
					iconImageHref: $("#contact-map").data("marker"),
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
			contactSlider.slideTo($(this).data("slide"));
			let coord = $(this).data("coord").split(",");
			myMap.panTo([parseFloat(coord[0]), parseFloat(coord[1])]),
				{
					flying: 1,
					callback: function () {
						myMap.setZoom(16, { smooth: true });
					},
				};
		});
		$(".contact__toggle-wrap button._active").click();
	});
}


$(function(){})
$(function(){})
$(function(){})
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
function bigSlider() {
	$(".big-slider").each(function () {
		thumb = new Swiper($(this).find(".big-slider__thumb")[0], {
			speed: 400,
			loop: true,
			watchSlidesProgress: true,
			spaceBetween: 14,
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

$(function(){})
function form() {
	$(".btn-1").each(function () {
		$(this).html(
			`<span  class="btn-1__circle"></span><span class="btn-1__overflow"><span>${$(
				this
			).text()}</span><span>${$(this).text()}</span></span>`
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
}

function header() {
	$(".header__toggle-color").click(function () {
		$("body").attr("layout", $(this).data("toggle"));
	});
	let header = $(".header");
	let prevscroll = $(window).scrollTop();
	// if (isFront) {
	// 	prevscroll = window.innerHeight * 2;
	// }
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
		// scroller.effects(".block", { lag: 1, speed: 1 });
		scroll();
		form();
		twoCard();
		tigr();
		imgSlider();
		filters();
		bigSlider();
		downPage();
		strategy();
	}

	barba.init({
		views: [
			{
				namespace: "contact",
				beforeEnter() {
					startPage();
					contact();
				},
				afterLeave() {},
			},
			{
				namespace: "pressCentr",
				beforeEnter() {
					startPage();
					news();
				},
				afterLeave() {},
			},
			{
				namespace: "ui",
				beforeEnter() {
					startPage();
				},
				afterLeave() {},
			},
			{
				namespace: "news-detail",
				beforeEnter() {
					startPage();
				},
				afterLeave() {},
			},
			{
				namespace: "history",
				beforeEnter() {
					startPage();
				},
				afterLeave() {},
			},
			{
				namespace: "sponsor",
				beforeEnter() {
					startPage();
				},
				afterLeave() {},
			},
			{
				namespace: "default",
				beforeEnter() {
					startPage();
				},
				afterLeave() {},
			},
		],
	});
	barba.hooks.after(() => {
		// scroll.update();
	});
});

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
