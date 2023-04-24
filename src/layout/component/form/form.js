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
