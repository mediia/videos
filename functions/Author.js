const admin = require('firebase-admin')
admin.initializeApp()

exports.add = async (name) => admin.firestore()
    .collection('authors')
    .add({ name })