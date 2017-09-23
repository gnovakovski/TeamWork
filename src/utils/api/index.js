import fire from './firebase.js'

export default {
  events: fire.db.ref('events/')
}
