var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');

var assetsDev = 'app/assets/style/dev/';
var assetsProd = 'app/assets/style/prod/';

gulp.task('webserver', function () {
    gulp.src("./")
        .pipe(plugins.webserver({
            livereload: true,
            fallback: "index.html"
        }));
});

gulp.task('build-css', function () {
    return gulp.src(assetsDev + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cssClean({ compatibility: 'ie8' }))
        .pipe(gulp.dest(assetsProd));
});

gulp.task('watch', function () {
    gulp.watch(assetsDev + '*.scss', ['build-css']);
});