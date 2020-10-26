// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /authors/:documentId/original
exports.addAuthor = functions.https.onRequest(async (req, res) => {
  // Push the new author into Cloud Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
    .collection('authors')
    .add({
      name: req.query.name
    });
  // Send back a message that we've succesfully written the message
  res.json({
    result: `Author with ID: ${writeResult.id} added.`
  });
});