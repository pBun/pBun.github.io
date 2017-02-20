var config = require('./')

module.exports = {
	watch: config.sourceDirectory + '/scripts/**',
	src: config.sourceDirectory + '/scripts/**.js',
	dest: config.publicDirectory + '/scripts'
}
