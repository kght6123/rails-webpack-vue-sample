const { environment } = require('@rails/webpacker')

// typescript
const typescript =  require('./loaders/typescript')
environment.loaders.append('typescript', typescript)

// vue
const vue =  require('./loaders/vue')
environment.loaders.append('vue', vue)

// ADD Required for vue-loader v15
const VueLoaderPlugin = require('vue-loader/lib/plugin')
environment.plugins.append(
  'VueLoaderPlugin',
  new VueLoaderPlugin()
)

module.exports = environment