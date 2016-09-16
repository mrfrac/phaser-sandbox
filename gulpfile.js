var gulp = require("gulp"),
    browserSync = require("browser-sync").create();

gulp.task('serve', function () {
    var reload = browserSync.reload;

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("index.html").on("change", reload);
    gulp.watch("app/**/*.js").on("change", reload);
    gulp.watch("app.css").on("change", reload);
});
