var gulp = require("gulp");
var fs = require("fs");
var path = require("path");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass")(require("sass"));
var csso = require("gulp-csso");
var autoprefixer = require("gulp-autoprefixer");
var postcss = require("gulp-postcss");
var pug = require("gulp-pug");
var bemValidator = require("gulp-html-bem-validator");
var replace = require("gulp-replace");
var newer = require("gulp-newer");
var log = require("fancy-log");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();
var clean = require("gulp-clean");
var shorthand = require("gulp-shorthand");
var gcmq = require("gulp-group-css-media-queries");
var svgSprite = require("gulp-svg-sprites");
var svgmin = require("gulp-svgmin");
var cheerio = require("gulp-cheerio");
var replace = require("gulp-replace");
var svgstore = require("gulp-svgstore");
var webp = require("gulp-webp");

gulp.task("serve", function () {
	browserSync.init({
		server: {
			baseDir: "docs",
		},
	});
	gulp.watch("docs/**/*.{html,css,js}").on("change", browserSync.reload);
});

var p = {
	docs: {
		html: "docs/",
		js: "docs/js/",
		json: "docs/json/",
		css: "docs/css/",
		img: "docs/img/",
		video: "docs/video/",
		audio: "docs/audio/",
		fonts: "docs/fonts/",
	},
	src: {
		layout_pug: "src/layout/**/*.pug",
		layout_css: "src/layout/**/*.scss",
		layout_js: "src/layout/**/*.js",
		vendor_js: "src/vendors/**/*.js",
		vendor_css: "src/vendors/**/*.css",
		pages: "src/pages",
		component: "src/layout/component",
		js: "src/pages",
		css: "src/pages",
		json: "src/assets/json/*.json",
		audio: "src/assets/audio/*.*",
		video: "src/assets/video/*.*",
		fonts: "src/assets/fonts/*.*",
		img: "src/assets/img/*.*",
		webp: "src/assets/img/*.{png,jpg}",
		sprite: "src/assets/sprite/*.svg",
	},
	clean: "docs",
};

// удаление папки docs
gulp.task("clean", function () {
	return gulp.src(p.clean, { read: false }).pipe(clean());
});

// получение папок
function getFolders(dir) {
	return fs.readdirSync(dir).filter(function (file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	});
}

//Сбор скриптов всех страниц
gulp.task("pages-js", function (done) {
	return gulp
		.src([path.join(p.src.js, "/**/*.js"), p.src.layout_js])
		.pipe(plumber())
		.pipe(concat("main.js"))
		.pipe(gulp.dest(p.docs.js))
		.pipe(uglify())
		.pipe(rename("main.min.js"))
		.pipe(gulp.dest(p.docs.js));
});

// //Сбор скриптов лайаута
// gulp.task('layout-js', function(done) {
// 		return gulp.src(p.src.layout_js)
// 		.pipe(plumber())
// 		.pipe(concat('main.js'))
// 		.pipe(gulp.dest(p.docs.js))
// 		.pipe(uglify())
// 		.pipe(rename('main.min.js'))
// 		.pipe(gulp.dest(p.docs.js));
// });

//Сбор шаблонов всех страниц
gulp.task("pages-pug", function (done) {
	var folders = getFolders(p.src.pages);
	if (folders.length === 0) return done(); // nothing to do!
	var tasks = folders.map(function (folder) {
		return gulp
			.src(path.join(p.src.pages, folder, "/*.pug"))
			.pipe(plumber())
			.pipe(pug({ pretty: true }))
			.pipe(bemValidator())
			.pipe(replace("{{template-name}}", folder))
			.pipe(rename(folder + ".html"))
			.pipe(gulp.dest(p.docs.html));
	});
	done();
});

//Сбор стилей всех страниц
gulp.task("pages-scss", function (done) {
	return gulp
		.src([
			"src/layout/css/mixin.scss",
			"src/layout/css/variables.scss",
			p.src.css + "/**/*.scss",
		])
		.pipe(concat("all.min.css"))
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(shorthand())
		.pipe(csso())
		.pipe(autoprefixer())
		.pipe(gulp.dest(p.docs.css));
});

//Сбор шаблона измененной страницы
gulp.task("page-pug", function (done) {
	var folders = getFolders(p.src.pages);
	if (folders.length === 0) return done(); // nothing to do!
	var tasks = folders.map(function (folder) {
		return gulp
			.src(path.join(p.src.pages, folder, "/*.pug"))
			.pipe(
				newer({
					dest: p.docs.html + "/" + folder + ".html",
					extra: path.join(p.src.pages, folder, "/**/*.pug"),
				})
			)
			.pipe(plumber())
			.pipe(pug({ pretty: true }))
			.pipe(bemValidator())
			.pipe(replace("{{template-name}}", folder))
			.pipe(rename(folder + ".html"))
			.pipe(gulp.dest(p.docs.html));
	});
	done();
});

//Сбор стилей измененной страницы
gulp.task("page-scss", function (done) {
	return gulp
		.src([
			"src/layout/css/mixin.scss",
			"src/layout/css/variables.scss",
			p.src.css + "/**/*.scss",
		])
		.pipe(plumber())
		.pipe(concat("all.min.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(shorthand())
		.pipe(csso())
		.pipe(autoprefixer())
		.pipe(gulp.dest(p.docs.css));
});

gulp.task("vendor-css", function () {
	return gulp
		.src(p.src.vendor_css)
		.pipe(plumber())
		.pipe(concat("vendor.css"))
		.pipe(gulp.dest(p.docs.css));
});

//Сбор скриптов измененной страницы
gulp.task("page-js", function (done) {
	return gulp
		.src(path.join(p.src.js, "/**/*.js"))
		.pipe(plumber())
		.pipe(newer(p.docs.css + "all.min.js"))
		.pipe(concat("all.js"))
		.pipe(gulp.dest(p.docs.js))
		.pipe(uglify())
		.pipe(rename("all.min.js"))
		.pipe(gulp.dest(p.docs.js));
});

//Сбор стилей лайаута
gulp.task("layout-scss", function (done) {
	return gulp
		.src([
			"src/layout/css/mixin.scss",
			"src/layout/css/variables.scss",
			"src/layout/css/fonts.scss",
			"src/layout/css/reset.scss",
			"src/layout/css/grid.scss",
			"src/layout/css/typography.scss",
			"src/layout/css/base.scss",
			"src/layout/component/**/*.scss",
		])
		.pipe(plumber())
		.pipe(concat("base.min.css"))
		.pipe(sass().on("error", sass.logError))
		.pipe(gcmq())
		.pipe(shorthand())
		.pipe(csso())
		.pipe(autoprefixer())
		.pipe(gulp.dest(p.docs.css));
});

// обработка vendor js
gulp.task("vendor-js", function () {
	return gulp
		.src(p.src.vendor_js)
		.pipe(plumber())
		.pipe(concat("vendor.js"))
		.pipe(gulp.dest(p.docs.js));
});

// обработка vendor css
gulp.task("vendor-css", function () {
	return gulp
		.src(p.src.vendor_css)
		.pipe(plumber())
		.pipe(concat("vendor.css"))
		.pipe(gulp.dest(p.docs.css));
});

// обработка json
gulp.task("json", function () {
	return gulp.src(p.src.json).pipe(gulp.dest(p.docs.json));
});

// обработка audio
gulp.task("audio", function () {
	return gulp.src(p.src.audio).pipe(gulp.dest(p.docs.audio));
});

// обработка video
gulp.task("video", function () {
	return gulp.src(p.src.video).pipe(gulp.dest(p.docs.video));
});

// обработка fonts
gulp.task("fonts", function () {
	return gulp.src(p.src.fonts).pipe(gulp.dest(p.docs.fonts));
});

// обработка img-icons
gulp.task("img", function () {
	return gulp
		.src(p.src.img)
		.pipe(newer(p.docs.img))
		.pipe(gulp.dest(p.docs.img));
});

// обработка WEBP
gulp.task("webp", function () {
	return gulp
		.src(p.src.webp)
		.pipe(newer(p.docs.img))
		.pipe(gulp.dest(p.docs.img))
		.pipe(webp())
		.pipe(gulp.dest(p.docs.img));
});

// обработка WEBP
gulp.task("webp-all", function () {
	return gulp.src(p.src.webp).pipe(webp()).pipe(gulp.dest(p.docs.img));
});

// обработка svg
gulp.task("list", function (done) {
	var folders = getFolders(p.src.pages);
	if (folders.length === 0) return done(); // nothing to do!
	var content =
		"<html><head><meta content='width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport'></head><body style='background:#212121'><style>a{font-family: Arial; color: white;font-size: 17px; }ul{   color: #fff; max-width:1000px; list-style: square; margin: 30px auto; border: 1px solid #00ff7e;  padding: 10px 40px;box-sizing: border-box;} a:hover{text-decoration:none;}</style><ul style=''>";
	var tasks = folders.map(function (folder) {
		content =
			content +
			"<li  style='margin:15px 0'>  <a href='" +
			folder +
			".html' >" +
			folder +
			".html</a></li>";
	});
	content = content + "</body></html>";
	fs.writeFile("docs/index.html", content, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Файл создан");
		}
	});

	done();
});
// обработка svg
gulp.task("sprite", function () {
	return gulp
		.src(p.src.sprite)
		.pipe(
			svgmin({
				js2svg: {
					pretty: true,
				},
			})
		)
		.pipe(
			cheerio({
				run: function ($) {
					$("[fill]").each(function () {
						if ($(this).attr("fill") != "none") {
							$(this).removeAttr("fill");
						}
					});

					$("[stroke]").each(function () {
						if ($(this).attr("stroke") != "none") {
							$(this).removeAttr("stroke");
						}
					});

					$("[style]").removeAttr("style");
				},
				parserOptions: { xmlMode: true },
			})
		)
		.pipe(replace("&gt;", ">"))
		.pipe(svgstore())
		.pipe(gulp.dest(p.docs.img));
});

gulp.task(
	"redocs",
	gulp.series(
		"clean",
		"list",
		"vendor-js",
		"vendor-css",
		"layout-scss",
		"pages-pug",
		"pages-js",
		"pages-scss",
		"sprite",
		"webp",
		"img",
		"fonts",
		"json",
		"audio",
		"video"
	)
);
gulp.task("watch", function () {
	gulp.watch(p.src.layout_css, gulp.parallel("layout-scss"));
	// gulp.watch(p.src.layout_js, gulp.parallel('layout-js',));
	gulp.watch(p.src.layout_pug, gulp.parallel("pages-pug"));
	gulp.watch(p.src.pages + "/**/*.pug", gulp.parallel("page-pug"));
	gulp.watch(
		["src/layout/css/mixin.scss", "src/layout/css/variables.scss"],
		gulp.parallel("pages-scss")
	);
	gulp.watch(p.src.css + "/**/*.scss", gulp.parallel("page-scss"));
	gulp.watch(
		[p.src.js + "/**/*.js", p.src.layout_js],
		gulp.parallel("pages-js")
	);
	gulp.watch(p.src.img, gulp.parallel("img"));
	gulp.watch(p.src.webp, gulp.parallel("webp"));
	gulp.watch(p.src.json, gulp.parallel("json"));
	gulp.watch(p.src.audio, gulp.parallel("audio"));
	gulp.watch(p.src.video, gulp.parallel("video"));
	gulp.watch(p.src.fonts, gulp.parallel("fonts"));
	gulp.watch(p.src.sprite, gulp.parallel("sprite"));
	gulp.watch(p.src.vendor_js, gulp.parallel("vendor-js"));
	gulp.watch(p.src.vendor_css, gulp.parallel("vendor-css"));
	gulp.watch(p.src.pages).on("addDir", gulp.parallel("list"));
});
gulp.task("create", function (done) {
	const name = process.argv[4];
	const type = process.argv[3];
	const jsContent = "$(function(){})";
	if (type == "--page" || type == "--p") {
		let dir = p.src.pages + "/" + name;
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			fs.writeFile(dir + "/" + name + ".pug", "", function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Pug файл создан");
				}
			});
			fs.writeFile(dir + "/" + name + ".scss", "", function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Scss файл создан");
				}
			});
			fs.writeFile(dir + "/" + name + ".js", jsContent, function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Js файл создан");
				}
			});
			console.log("Создание папки ", name);
		}
	} else if (type == "--component" || type == "--c") {
		let dir = p.src.component + "/" + name;
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
			fs.writeFile(dir + "/" + name + ".pug", "", function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Pug файл создан");
				}
			});
			fs.writeFile(dir + "/" + name + ".scss", "", function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Scss файл создан");
				}
			});
			fs.writeFile(dir + "/" + name + ".js", jsContent, function (err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Js файл создан");
				}
			});
			console.log("Создание компонента ", name);
		}
	} else {
		console.log("Ничего не созданно");
	}

	done();
});
gulp.task("default", gulp.parallel("watch", "serve"));
