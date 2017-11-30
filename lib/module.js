const { resolve } = require('path')

module.exports = function () {
  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'nuxt-vuex-router-sync.js',
    ssr: false
  })
}
