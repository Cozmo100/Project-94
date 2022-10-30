

//firebase stuff - ended at line 12 practice.js [practice C94]

var firebaseConfig = {
      apiKey: "AIzaSyDEc2Q-uxHP5dUZlE0IGq0xDwcPbueYk-w",
      authDomain: "chat-app-w-scripting.firebaseapp.com",
      databaseURL: "https://chat-app-w-scripting-default-rtdb.firebaseio.com",
      projectId: "chat-app-w-scripting",
      storageBucket: "chat-app-w-scripting.appspot.com",
      messagingSenderId: "7917915204",
      appId: "1:7917915204:web:d5f5aef389e56474544011"
};




//---other code------------------------------------------------------------------------------------//

firebase.initializeApp(firebaseConfig); 

wun = localStorage.getItem("USERNAME");
document.getElementById('welcome').innerHTML = "Welcome " + wun;
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function LOGOUT()
{
      window.location = "index.html"
};

function NewR()
{
      newroom = document.getElementById('Rname').value;

      localStorage.setItem("ROOM",newroom);
      rmnm = localStorage.getItem("ROOM");
      document.getElementById('output').innerHTML = "room -  " + rmnm;

}