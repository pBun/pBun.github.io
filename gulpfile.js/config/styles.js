var config = require('./')

module.exports = {
  watch: config.src + '/styles/**',
  src: config.src + '/styles/main.styl',
  dest: config.dest + '/styles',
  autoprefixer: { browsers: ['last 2 version'] },
  stylus: {}
}
