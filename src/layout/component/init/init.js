$(function () {
	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});
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
