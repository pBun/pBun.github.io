var gulp = require('gulp');
var del = require('del');
var stylesConfig = require('../config/styles');
var scriptsConfig = require('../config/scripts');

gulp.task('clean', function (cb) {
  return del([
    stylesConfig.dest,
    scriptsConfig.dest
  ]);
});
