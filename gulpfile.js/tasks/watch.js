var gulp     = require('gulp');
var styles     = require('../config/styles');
var scripts     = require('../config/scripts');
var watch    = require('gulp-watch');

gulp.task('watch', function() {
  watch(styles.watch, function() { gulp.start('styles'); });
  watch(scripts.src, function() { gulp.start('scripts'); });
});
