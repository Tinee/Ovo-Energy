var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('webserver', function () {
    gulp.src("./")
        .pipe(plugins.webserver({
            livereload: true,
            fallback: "index.html"
        }));
});