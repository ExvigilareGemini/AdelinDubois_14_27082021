const gulp = require("gulp");

const plugins = require("gulp-load-plugins")(); // tous les plugins de package.json
const sass = require("gulp-sass")(require("sass"));

gulp.task("css", function () {
  return gulp
    .src("./assets/sass/*.scss")
    .pipe(plugins.concat("style.css"))
    .pipe(plugins.sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({ indent: "  " }))
    .pipe(plugins.sourcemaps.init())
    .pipe(gulp.dest("./src/style"));
});

gulp.task("watch-css", function () {
  gulp.watch("./assets/sass/*/*.scss", gulp.series("css"));
});
