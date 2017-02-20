var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  watch: config.sourceDirectory + '/styles/**',
  src: config.sourceDirectory + '/styles/main.styl',
  dest: config.publicDirectory + '/styles',
  settings: {

  }
}
