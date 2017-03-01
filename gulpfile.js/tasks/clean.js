var gulp = require('gulp');
var clean = require('gulp-clean');
var stylesConfig = require('../config/styles');
var scriptsConfig = require('../config/scripts');

gulp.task('clean', function (cb) {
  return gulp.src([
  			stylesConfig.dest,
		    scriptsConfig.dest
  		], {read: false})
        .pipe(clean());
});
