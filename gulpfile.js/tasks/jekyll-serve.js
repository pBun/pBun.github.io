var jekyllLogger = require('../lib/handleJekyllMessage');
var gulp = require('gulp');
var child = require('child_process');
var gutil = require('gulp-util');
var open = require('open');

gulp.task('jekyll:serve', function(cb) {
  var jekyll = child.spawn('jekyll', ['serve']);

  var checkIfSuccess = function(message) {
    if (message.indexOf('Server address:') >= 0) {
      var addr = message.replace('Server address:', '').trim();
      open(addr);
    }
    if (message.indexOf('Server running') >= 0) {
      cb();
    }
  };

  jekyll.stdout.on('data', function(buffer) { jekyllLogger(buffer, checkIfSuccess) });
  jekyll.stderr.on('data', jekyllLogger);
});
