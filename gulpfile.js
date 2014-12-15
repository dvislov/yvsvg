var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprites");

gulp.task('sprite', function () {
  return gulp.src('src/*.svg')
    .pipe(svgSprite({
      baseSize: 16,
      cssFile: "css/spriteSVG.css"
    }))
    .pipe(gulp.dest("assets"));
});
