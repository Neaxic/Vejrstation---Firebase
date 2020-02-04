let firebaseConfig = {
    apiKey: "AIzaSyBvALJL9vDdUb51JJfLG94548kBc0mEilE",
    authDomain: "vindprojekt-74c36.firebaseapp.com",
    databaseURL: "https://vindprojekt-74c36.firebaseio.com",
    projectId: "vindprojekt-74c36",
    storageBucket: "vindprojekt-74c36.appspot.com",
    messagingSenderId: "971429438367",
    appId: "1:971429438367:web:0926339c84d3c822d813aa",
    measurementId: "G-LCE07VJ9MC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();






//     let startAt =  db.collection('samples')
// .orderBy('vindhastighed')
// .startAt(a);
// console.log(startAt);


// let startAtName = db.collection('samples')
//   .orderBy('vindhastighed');
//   // .orderBy('hotdogThing')
//   // .startAt('sandwichData');
// console.log(startAtName);


db.collection("samples").where("vindhastighed", ">", 10).orderBy("vindhastighed")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });