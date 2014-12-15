var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprites");
var filter    = require('gulp-filter');
var svg2png   = require('gulp-svg2png');

gulp.task('sprite', function () {
  return gulp.src('src/*.svg')
    .pipe(svgSprite({
      baseSize: 16,
      cssFile: "css/spriteSVG.css",
      svgId: "svg-%f"
    }))
    .pipe(gulp.dest("assets"))
    .pipe(filter("**/*.svg"))
    .pipe(svg2png())
    .pipe(gulp.dest("assets"));
});
