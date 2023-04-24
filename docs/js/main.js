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
	svg();
	header();
	search();
	pmenu();
	function startPage() {
		form();
		imgSlider();
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
		],
	});
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
