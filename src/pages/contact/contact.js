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
