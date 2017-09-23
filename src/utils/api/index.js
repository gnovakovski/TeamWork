import fire from './firebase.js'

export default {
  events: fire.db.ref('events/'),
  event: (key) => fire.db.ref('events/' + key),
  login: (email, password) => fire.auth.signInWithEmailAndPassword(email, password)
}
