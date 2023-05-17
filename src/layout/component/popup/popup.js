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
