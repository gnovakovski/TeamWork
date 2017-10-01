import fire from './firebase.js'

function cleanAndReload() {
  localStorage.clear()
  window.history.pushState({path: window.location.origin}, '', window.location.origin)
}

export default {
  events: fire.db.ref('events/'),
  event: (key) => fire.db.ref('events/' + key),
  login: (email, password) => fire.auth.signInWithEmailAndPassword(email, password),
  getUser: () => {
    if (localStorage['USER'])
      try {
        return JSON.parse(localStorage['USER'])
      } catch (error) {
        cleanAndReload()
      }
    else
      cleanAndReload()
  }
}
