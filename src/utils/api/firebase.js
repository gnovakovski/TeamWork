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
  localStorage.setItem('IS-AUTH', user ? true : '')
  localStorage.setItem('USERNAME', user ? user.email.split('@')[0] : '')
})

export default {
  db: fireApp.database(),
  auth: fireApp.auth()
}
