var gulp = require('gulp');
var child = require('child_process');
var gutil = require('gulp-util');
var open = require('open');

gulp.task('jekyll', function(cb) {
  var jekyll = child.spawn('jekyll', ['serve']);

  var jekyllLogger = function(buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach(function(message) {
          if (message.indexOf('Server address:') >= 0) {
            var addr = message.replace('Server address:', '').trim();
            gutil.log(message);
            open(addr);
            return;
          }
          if (message.indexOf('Server running') >= 0) {
            cb();
            return;
          }
          if (message) gutil.log('jekyll: ' + message.trim());
      });
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});
