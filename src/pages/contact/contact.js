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
					zoom: 16,
				},
				{
					searchControlProvider: "yandex#search",
				}
			);

			myMap.behaviors.disable("scrollZoom");

			//на мобильных устройствах... (проверяем по userAgent браузера)
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				//... отключаем перетаскивание карты
				myMap.behaviors.disable("drag");
			}
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
