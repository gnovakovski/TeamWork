import * as firebase from 'firebase'

const fireApp = firebase.initializeApp({
  apiKey            : process.env.API_KEY,
  authDomain        : process.env.AUTH_DOMAIN,
  databaseURL       : process.env.DATABASE_URL,
  projectId         : process.env.PROJECT_ID,
  storageBucket     : process.env.STORAGE_BUCKET,
  messagingSenderId : process.env.MESSAGING_SENDER_ID
})

fireApp.auth().onAuthStateChanged(user => {
  if (user) {
    localStorage.setItem('USER', JSON.stringify({
      uid: user.uid,
      username: user.email.split('@')[0],
      email: user.email
    }))
  }
})

export default {
  db: fireApp.database(),
  auth: fireApp.auth()
}
