var gulp            = require('gulp');
var sass            = require('gulp-sass');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var cleanCSS        = require('gulp-clean-css');

var sassSourcePath      = 'assets/scss/*.scss';
var cssSourcePath       = 'public/assets/css/';
var cssAppDistFile      = 'style';
var jsAppDistFile       = 'script';
var jsCompressPath      = 'assets/js/**/*.js';
var jsSourcePath        = 'public/assets/js/';
var imgCompressPath     = 'assets/media/**/*';
var imgSourcePath       = 'public/assets/media/';

gulp.task('sass', function () {
    gulp.src(sassSourcePath)
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(cssAppDistFile + '.min.css'))
        .pipe(gulp.dest(cssSourcePath));
});

gulp.task('img-compress', function() {
    gulp.src(imgCompressPath)
        .pipe(gulp.dest(imgSourcePath));
});

gulp.task('compress', function() {
    gulp.src(jsCompressPath)
        .pipe(concat('app.js'))
        // .pipe(rename(jsAppDistFile + '.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(jsSourcePath));
});

gulp.task('default', ['sass', 'img-compress', 'compress']);
gulp.task('watch', function() {
    gulp.watch(sassSourcePath, ['sass']);
    gulp.watch(jsCompressPath, ['compress']);
    gulp.watch(imgCompressPath, ['img-compress']);
});
