var gulp = require('gulp');
var stylesConfig = require('../config/styles');
var scriptsConfig = require('../config/scripts');

gulp.task('watch', function(done) {
    gulp.watch(stylesConfig.watch, ['styles']);
    gulp.watch(scriptsConfig.src, ['scripts']);
    done();
});
