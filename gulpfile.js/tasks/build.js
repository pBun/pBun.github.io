var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(cb) {
	return runSequence('clean', ['styles', 'scripts', 'fonts', 'images'], 'jekyll:build', cb);
});
