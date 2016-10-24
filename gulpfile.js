var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('js', function(){
	return browserify('./src/js/main.js')
		.transform(babelify, {
			presets: ['es2015']
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./build'))
});

gulp.task('sass', function (){
	return gulp.src([
		'node_modules/font-awesome/scss',
		'./src/styles/style.scss',
	])
		.pipe(sass())
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('./build'));
});

// gulp.task('fonts', function(){
// 	gulp.src('node_modules/font-awesome/fonts/*')
// 		.pipe(gulp.dest('./build/fonts'))
// });

gulp.task('watch', function(){
	gulp.watch('./src/styles/**/*.scss', ['sass']);
	gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['js', 'sass']);

gulp.task('serve', ['watch']);
