user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!!";

var firebaseConfig = {
    apiKey: "AIzaSyAEQ1eQjRyHpyMCJG7WlkdcMI7rttggka4",
    authDomain: "let-chat-60e69.firebaseapp.com",
    databaseURL: "https://let-chat-60e69-default-rtdb.firebaseio.com",
    projectId: "let-chat-60e69",
    storageBucket: "let-chat-60e69.appspot.com",
    messagingSenderId: "115420349452",
    appId: "1:115420349452:web:e544ae4d2faa4ac43dda29"
};

firebase.initializeApp(firebaseConfig);

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}