const { resolve } = require('path')
const rootDir = resolve(__dirname, '../..')

module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    [resolve(rootDir, 'lib/module.js')]
  ]
}
