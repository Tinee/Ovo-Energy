var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');
var concat = require('gulp-concat')

var assetsDev = 'app/';
var assetsProd = 'dist/';

var scriptDependencies = [
  // Vendor Scripts
  './app/vendor/angular/angular.min.js',
  './app/vendor/angular-ui-router/release/angular-ui-router.min.js',
  // Modules
  './app/app.js',
  './app/**/*.module.js',
  // Directive
  './app/**/*.directives.js',
  // Controllers
  './app/**/*.controller.js',
  // Services
  './app/**/*.service.js',
]

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

gulp.task('build-js', function () {
  return gulp.src(scriptDependencies)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch(assetsDev + '*.scss', ['build-css']);
  gulp.watch(assetsDev + '**/*.js', ['build-js']);
});
