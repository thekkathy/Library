var admin = require("firebase-admin");

var serviceAccount = require("./library_firebase_api_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
