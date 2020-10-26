// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')

const Author = require('./Author.js')

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /authors/:documentId/original
exports.addAuthor = functions.https.onRequest(async (req, res) => {
  const author = await Author.add(req.body.name)
  console.log('author', author)
  // Send back a message that we've succesfully written the message
  res.json({
    result: 'success',
    id: author.id,
  })
})