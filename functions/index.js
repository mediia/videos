// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')

const Author = require('./Author')

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /authors/:documentId/original
exports.addAuthor = functions.https.onRequest(async (req, res) => {
  const author = await Author.add(req.body.name)
  // Send back a message that we've succesfully written the message
  res.json({
    result: 'success',
    id: author.id,
  })
})

exports.test = functions.https.onRequest(async (req, res) => {
  // Send back a message that we've succesfully written the message
  res.json({
    result: 'success',
    message: 'yay!',
  })
})