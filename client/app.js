

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


const docRef = firestore.doc("vindMaaler/"+Date.now().toString());
console.log("vindMaaler/"+Date.now().toString());

const vindhastighed_header = document.querySelector("#vindhastighed");
const vindstød_header = document.querySelector("#vindstød");
const strømhastighed_header = document.querySelector("#strømhastighed");
const max_bølgehøjde_header = document.querySelector("#max_bølgehøjde");
const middel_bølgehøjde_header = document.querySelector("#middel_bølgehøjde");

const inputTextField = document.querySelector("#latestHotdogStatus");
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");


var temp_vindhastighed;
var temp_vindstod;
var temp_stromhastighed
var temp_maxbolgelengde;
var temp_middelbolgehojde;


var vindhastighed_array = [0];

//const Maxbolge = require('./dataFetcher');

//LOAD MANUELT 
// saveButton.addEventListener("click", function () {
//     const textToSave = inputTextField.value;
//     console.log("I am going to save " + textToSave + " to Firestore");

//     docRef.set({
//         vindhastighed: textToSave
//     }).then(function () {
//         console.log("Status Saved!");
//     }).catch(function (error) {
//         console.log("Got an error: ", error);
//     });
// })

firestore.collection("vindMaaler").orderBy("date")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            const d = doc.data();
            const logString = `${d.date},${d.vind}  -   ${d.vindstod}`
            

            temp_vindhastighed =  `${d.vind}`;
            temp_vindstod = `${d.vindstod}`;
            temp_stromhastighed = `${d.stromhastighed}`;
            temp_maxbolgelengde = `${d.maxbolge}`;
            temp_middelbolgehojde = `${d.mbolgehøjde}`;

            vindhastighed_array.push(temp_vindhastighed);
            
        });
        vindhastighed_array.splice(0, vindhastighed_array.length-10);
        vindhastighed_header.innerText = "Vindhastighed2: " + temp_vindhastighed;
        vindstød_header.innerText = "Vindstød: " + temp_vindstod;
        strømhastighed_header.innerText = "Strømhastighed: " + temp_stromhastighed;
        max_bølgehøjde_header.innerText = "Max bølgehøjde: " + temp_maxbolgelengde;
        middel_bølgehøjde_header.innerText = "Middelbølgehøjde: " + temp_middelbolgehojde;
        
        console.log(vindhastighed_array);



            var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,6,7,8,9,10],
            datasets: [
                {
                    label: '# of Votes',
                    borderColor: `rgb(0,255,255,255)`,
                    data: [parseFloat(vindhastighed_array[0]),parseFloat(vindhastighed_array[1]),parseFloat(vindhastighed_array[2]),parseFloat(vindhastighed_array[3]),parseFloat(vindhastighed_array[4]),parseFloat(vindhastighed_array[5]),parseFloat(vindhastighed_array[6]),parseFloat(vindhastighed_array[7]),parseFloat(vindhastighed_array[8]),parseFloat(vindhastighed_array[9])],
                }
        ]},
        
        
        
        options:{}
        
    });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
 
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
            vindhastighed_header.innerText = "Vindhastighed: " + temp_vindhastighed;
            vindstød_header.innerText = "Vindstød: " + myData.vindstod;
            strømhastighed_header.innerText = "Strømhastighed: " + myData.stromhastighed;
            max_bølgehøjde_header.innerText = "Max bølgehøjde: " + myData.maxbolge;
            middel_bølgehøjde_header.innerText = "Middelbølgehøjde: " + myData.mbolgehøjde;

        }
    })
}

getRealtimeUpdates();








