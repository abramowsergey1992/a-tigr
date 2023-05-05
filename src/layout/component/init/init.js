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
