const admin = require('firebase-admin')

exports.add = (name) => {
    admin.firestore()
      .collection('authors')
      .add({ name })
  }