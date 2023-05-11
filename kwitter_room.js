const firebaseConfig = {
    apiKey: "AIzaSyCYh45EaqCzAROJqnFeK0okgu3F7iQuWYs",
    authDomain: "chatterbox-34d14.firebaseapp.com",
    databaseURL: "https://chatterbox-34d14-default-rtdb.firebaseio.com",
    projectId: "chatterbox-34d14",
    storageBucket: "chatterbox-34d14.appspot.com",
    messagingSenderId: "940703225313",
    appId: "1:940703225313:web:a6eccd9e873e17d95f6ea0",
    measurementId: "G-Z5CN5RGZM9"
  };

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}