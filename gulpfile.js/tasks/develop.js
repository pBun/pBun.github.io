var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('develop', function(cb) {
	return runSequence('build', 'jekyll', 'watch', cb);
});
