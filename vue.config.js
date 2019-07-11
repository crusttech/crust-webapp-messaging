const buildVueConfig = require('corteza-webapp-messaging/vue.config-builder')

module.exports = buildVueConfig({
  appName: 'messaging',
  appLabel: 'Crust Messaging',
  theme: 'crust-base',
  packageAlias: 'crust-webapp-messaging',
})

