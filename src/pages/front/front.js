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
	if ($("html").attr("lang") == "en") {
		new ScrollMagic.Scene({
			duration: procent(70, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__back-mask ", 1, {
					maskSize: 85000,
					maskPosition: "49.5% 75%	",

					ease: Linear.easeIn,
				})
			)
			.addTo(controller);
	} else {
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
	}
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
		$("html, body").animate({ scrollTop: window.innerHeight * 2.3 }, 400);
	});
}
