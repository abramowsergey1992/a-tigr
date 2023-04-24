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
