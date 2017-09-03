import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCShacT6sUE9q4OHamVw3aT3NS3Ll4Jeak',
  authDomain: 'team-work-1772.firebaseapp.com',
  databaseURL: 'https://team-work-1772.firebaseio.com',
  projectId: 'team-work-1772',
  storageBucket: 'team-work-1772.appspot.com',
  messagingSenderId: '358872766976'
})

export default {
  database: firebase.database()
}
