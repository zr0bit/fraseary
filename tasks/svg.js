import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import svgSymbols from 'gulp-svg-symbols';
import imagemin, { svgo } from 'gulp-imagemin';

function icons() {
	return gulp
		.src('./src/assets/svg/icons/*.svg')
		.pipe(
			svgSymbols({
				id: 'icon-%f',
				svgAttrs: {
					class: 'svg-icons'
				},
				templates: ['default-svg']
			})
		)
		.pipe(rename('icons.svg'))
		.pipe(gulp.dest('./src/assets/svg'));
}

function emojis() {
	return gulp
		.src('./src/assets/svg/emojis/*.svg')
		.pipe(
			svgSymbols({
				id: 'emoji-%f',
				svgAttrs: {
					class: 'svg-emojis'
				},
				templates: ['default-svg']
			})
		)
		.pipe(rename('emojis.svg'))
		.pipe(gulp.dest('./src/assets/svg'));
}

function pics() {
	return gulp
		.src('./src/assets/svg/pics/*.svg')
		.pipe(
			svgSymbols({
				id: 'pic-%f',
				svgAttrs: {
					class: 'svg-pics'
				},
				templates: ['default-svg']
			})
		)
		.pipe(rename('pics.svg'))
		.pipe(gulp.dest('./src/assets/svg'));
}

function logo() {
	const svgoPlugins = {
		plugins: [
			{ name: 'removeViewBox', active: false },
			{ name: 'removeAttrs', params: { attrs: 'fill' } }
		]
	};

	const imageminPlugins = [svgo(svgoPlugins)];

	return gulp
		.src('./src/assets/svg/logo-raw.svg')
		.pipe(imagemin(imageminPlugins))
		.pipe(rename('logo.svg'))
		.pipe(gulp.dest('./src/assets/svg/pics/'));
}

function join() {
	return gulp
		.src([
			'./src/assets/svg/icons.svg',
			'./src/assets/svg/emojis.svg',
			'./src/assets/svg/pics.svg'
		])
		.pipe(concat('svg.html'))
		.pipe(gulp.dest('./src'));
}

gulp.task('svg:pics', gulp.series(logo, pics));
gulp.task('svg:icons', gulp.parallel(icons, emojis));
gulp.task(
	'svg',
	gulp.series(
		gulp.parallel(gulp.series(logo, pics), gulp.parallel(icons, emojis)),
		join
	)
);
