var config = require('./')

module.exports = {
	watch: config.src + '/scripts/**',
	src: config.src + '/scripts/**.js',
	dest: config.dest + '/scripts'
}
