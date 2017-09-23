import fire from './firebase.js'

export default {
  events: fire.db.ref('events/'),
  login: (email, password) => fire.auth.signInWithEmailAndPassword(email, password)
}
