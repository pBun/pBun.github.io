var jekyllLogger = require('../lib/handleJekyllMessage');
var gulp = require('gulp');
var child = require('child_process');
var open = require('open');

gulp.task('jekyll:build', function(cb) {
  var jekyll = child.spawn('jekyll', ['build']);

  var checkIfSuccess = function(message) {
    if (message.indexOf('done') >= 0) {
      cb();
    }
  };

  jekyll.stdout.on('data', function(buffer) { jekyllLogger(buffer, checkIfSuccess); });
  jekyll.stderr.on('data', jekyllLogger);
});
