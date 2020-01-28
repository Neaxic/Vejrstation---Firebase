var admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vindprojekt-74c36.firebaseio.com"
});

let morten = "Mås";
let db = admin.firestore();

let data = {
    name: morten,
    state: 'CA',
    country: 'USA'
  };
  
  // Add a new document in collection "cities" with ID 'LA'
  let setDoc = db.collection('cities').doc('LA').set(data);