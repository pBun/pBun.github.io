var config = require('./')

module.exports = {
	watch: config.sourceDirectory + '/scripts/**',
	src: [
      config.sourceDirectory + '/scripts/vendor/jquery.js',
      config.sourceDirectory + '/scripts/vendor/**/*.js',
      config.sourceDirectory + '/scripts/**.js'
    ],
	dest: config.publicDirectory + '/scripts'
}
