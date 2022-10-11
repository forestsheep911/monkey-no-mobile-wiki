const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: pj.name,
  namespace: `https://github.com/monkey-${pj.author}/${pj.name}`,
  match: ['https://*.wikipedia.org/*'],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener'],
  require: [`file://${resolve(__dirname, '../')}/dist/${pj.name}.dev.user.js`],
}
