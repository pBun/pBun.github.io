var gulp         = require('gulp');
var handleErrors = require('../lib/handleErrors');
var config       = require('../config/scripts');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  return gulp.src(config.src)
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
