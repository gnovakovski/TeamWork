var merge   = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV            : '"local"',
  PORT                : 1772,
  API_KEY             : '"AIzaSyCShacT6sUE9q4OHamVw3aT3NS3Ll4Jeak"',
  AUTH_DOMAIN         : '"team-work-1772.firebaseapp.com"',
  DATABASE_URL        : '"https://team-work-1772.firebaseio.com"',
  PROJECT_ID          : '"team-work-1772"',
  STORAGE_BUCKET      : '"team-work-1772.appspot.com"',
  MESSAGING_SENDER_ID : '"358872766976"'
})
