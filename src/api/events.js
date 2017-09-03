import { db } from './firebase.js'

export default {
  getEvents () {
    return db.ref('events/').once('value').then(snapshot => {
      return snapshot && snapshot.val ? snapshot.val() : []
    })
  }
}
