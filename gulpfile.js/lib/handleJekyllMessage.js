var gutil = require('gulp-util');
module.exports = function(buffer, callback) {
	callback = typeof callback === 'function' ? callback : function(message) {};
	buffer.toString()
      .split(/\n/)
      .forEach(function(line) {
      	  var message = line.trim();
      	  if (!message) return;
          gutil.log('jekyll: ' + message);
          callback(message);
      });
};
