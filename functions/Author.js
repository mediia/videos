const admin = require('firebase-admin')

module.exports = {
  add: (name) => {
    admin.firestore()
      .collection('authors')
      .add({ name })
  }
}