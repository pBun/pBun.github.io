var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config/styles');
var autoprefixer = require('gulp-autoprefixer');
var stylus       = require('gulp-stylus');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(stylus(config.settings))
    .pipe(autoprefixer(config.autoprefixer))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
