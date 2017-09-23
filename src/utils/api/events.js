import fire from './firebase.js'

export default {
  getEvents (cb) {
    fire.db.ref('events/').on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        var childData = childSnapshot.val()
        childData['key'] = childSnapshot.key

        cb(childData)
      })
    })
  }
}
