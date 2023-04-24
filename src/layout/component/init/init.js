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
