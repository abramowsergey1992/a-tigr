function form() {
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$(".btn-1").each(function () {
		$(this).html(
			`<span  class="btn-1__circle"></span><span class="btn-1__overflow"><span>${$(
				this
			).text()}</span><span>${$(this).text()}</span></span>`
		);
	});
	$(".link-arrow").each(function () {
		$(this).html(
			`${$(
				this
			).text()}<svg   viewBox="0 0 24 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 33.1666L20 18.4999L4 3.83325" stroke="#E26D14" stroke-width="5" stroke-linecap="square"/></svg>`
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
	$(".file").each(function () {
		let inputFile = $(this).find(".file__input");
		let name = inputFile.data("name");
		let files = $(this).find(".file__files");
		inputFile.on("change", function () {
			var files = this.files;

			for (var i = 0; i < files.length; i++) {
				var file = files[i];

				// if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
				// 	alert("Фотография должна быть в формате jpg, png или gif");
				// 	continue;
				// }

				// if (file.size > maxFileSize) {
				// 	alert("Размер фотографии не должен превышать 2 Мб");
				// 	continue;
				// }

				preview(files[i], files);
			}

			this.value = "";
		});
		function preview(file) {
			var reader = new FileReader();
			reader.addEventListener("load", function (event) {
				files.append(`<div class="file__file">
                    <textarea name="${name}">${event.target.result}</textarea>
                    <div class="file__file-title">${file.name}</div>
                    <button class="file__file-delete" type="button"><svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.5 3.5V2C3.5 1.44772 3.94772 1 4.5 1H8.5C9.05228 1 9.5 1.44772 9.5 2V3.5M0 4H13M1 4L2 14C2 14.5523 2.44772 15 3 15H10C10.5523 15 11 14.5523 11 14L12 4" stroke="#D1D1D1"></path>
						</svg>
                    </button>
                  </div>`);
			});
			reader.readAsDataURL(file);
		}
	});
	$(document).on("click", ".file__file-delete", function () {
		$(this).closest(".file__file").remove();
	});
}
