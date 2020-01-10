// Your web app's Firebase configuration
var firebaseConfig = {
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
var firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");

const vindhastighed_header = document.querySelector("#vindhastighed");
const vindstød_header = document.querySelector("#vindstød");
const strømhastighed_header = document.querySelector("#strømhastighed");
const max_bølgehøjde_header = document.querySelector("#max_bølgehøjde");
const middel_bølgehøjde_header = document.querySelector("#middel_bølgehøjde");

const inputTextField = document.querySelector("#latestHotdogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");


saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + " to Firestore");

    docRef.set({
        vindhastighed: textToSave
    }).then(function () {
        console.log("Status Saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
})


// LOAD MANUELT  
//   loadButton.addEventListener("click", function() {
//       console.log("Testtetetes");
//       docRef.get().then((doc) => {
//           if(doc && doc.exists){
//               const myData = doc.data();
//               vindhastighed_header.innerText = "ddadbd: " + myData.vindhastighed;
//           }
//       }).catch(function (error){
//         console.log("Got an error: ", error);
//     });
//   })

getRealtimeUpdates = function () {
    docRef.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            vindhastighed_header.innerText = "Vindhastighed: " + myData.vindhastighed;
            vindstød_header.innerText = "Vindstød: " + myData.vindstød;
            strømhastighed_header.innerText = "Strømhastighed: " + myData.strømhastighed;
            max_bølgehøjde_header.innerText = "Max bølgehøjde: " + myData.max_bølgehøjde;
            middel_bølgehøjde_header.innerText = "Middelbølgehøjde: " + myData.middel_bølgehøjde;
        }
    })
}

getRealtimeUpdates();
