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

const outputHeader = document.querySelector("#hotdogOutPut");
const inputTextField = document.querySelector("#latestHotdogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");
//Hej fra dillermand
saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am going to save " + textToSave + "to Firestore");

    docRef.set({
        hotdogStatus: textToSave
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
//               outputHeader.innerText = "ddadbd: " + myData.hotdogStatus;
//           }
//       }).catch(function (error){
//         console.log("Got an error: ", error);
//     });
//   })

getRealtimeUpdates = function () {
    docRef.onSnapshot(function (doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            outputHeader.innerText = "Numse?: " + myData.hotdogStatus;
        }
    })
}

getRealtimeUpdates();
