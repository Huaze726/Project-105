const firebaseConfig = {
    apiKey: "AIzaSyAuWMw5FRQ6hGOowvLa8fZ4afFSWwy6wZQ",
    authDomain: "project-100-lets-chat-ap-d9408.firebaseapp.com",
    databaseURL: "https://project-100-lets-chat-ap-d9408-default-rtdb.firebaseio.com",
    projectId: "project-100-lets-chat-ap-d9408",
    storageBucket: "project-100-lets-chat-ap-d9408.appspot.com",
    messagingSenderId: "821097031750",
    appId: "1:821097031750:web:1f5d059937003a96220247"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "<u class='welcome-txt'>Welcome " + username + "!</u>";

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function addroom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    document.getElementById("room_name").value = "";

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapShot) {
            childKey = childSnapShot.key;
            Room_names = childKey;
            //Start code
            console.log(Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick = 'redricToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redricToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location - "kwitter_page.html";
}

//Dark and Light Modes

function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var btnmode = document.getElementById("btnmode");
btnmode.addEventListener('click', function handleClick() {
    const initialText = 'Enable Dark Mode';

    if (btnmode.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btnmode.textContent = 'Enable Light Mode';
        document.getElementById("btnmode").style.backgroundColor = "red";
    } else {
        btnmode.textContent = initialText;
        document.getElementById("btnmode").style.backgroundColor = "lime";
    }
});