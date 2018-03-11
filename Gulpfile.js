var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    mainBowerFiles = require('main-bower-files'),
    gulpFilter = require('gulp-filter'),
    autoprefixer = require('gulp-autoprefixer'),
    css_nano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    print = require('gulp-print'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

const assetsDir = 'assets';

gulp.task('init', function() {
   bower();
});

gulp.task('watch', function () {
    gulp.watch(assetsDir + '/css/src/**/*.scss', ['sass']);
    gulp.watch(assetsDir + '/js/src/*.js', ['js']);
});

gulp.task('sass', function () {
    gulp.src(assetsDir + '/css/src/base.scss')
        .pipe(plumber({errorHandler: notify.onError("Klaida: <%= error.message %>")}))
        .pipe(sass(
            {
                sourceComments: 'map',
                sourceMap: 'sass',
                imagePath: 'images'
            }
        ))
        .pipe(autoprefixer())
        .pipe(css_nano({zindex: false}))
        .pipe(rename('prod.css'))
        .pipe(gulp.dest(assetsDir + '/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('js', function() {
    gulp.src(assetsDir + '/js/src/**/*.js')
        .pipe(plumber({errorHandler: notify.onError("Klaida: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(concat('prod.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(assetsDir + '/js/'));
});

gulp.task('vendor:js', function () {
    var filterJS = gulpFilter('**/*.js', {restore: true});

    return gulp.src(mainBowerFiles(), {base: './bower_components'})
        .pipe(filterJS)
        .pipe(print())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(assetsDir + '/js/'));
});
gulp.task('vendor:css', function () {
    var filterCSS = gulpFilter('**/*.{css,scss}', {restore: true});

    return gulp.src(mainBowerFiles(), {base: './bower_components'})
        .pipe(filterCSS)
        .pipe(print())
        .pipe(sass())
        .pipe(concat('vendor.css'))
        .pipe(css_nano())
        .pipe(gulp.dest(assetsDir + '/css/'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        //logLevel: "debug",
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(assetsDir + "/css/src/**/*.scss", ['sass']);
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task('default', ['js','sass', 'watch', 'browser-sync']);