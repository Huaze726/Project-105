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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "index.html";
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                like = message_data['like'];
                message = message_data["message"];
                name_with_tag = "<h4 style='color: darkgray;'><b><u>" + name + "</u></b></h4>";
                message_with_tag = "<h4 class='message_h4' style='color: lime;'>" + message + "</h4>"
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
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

function leaveroom() {
    window.location = "chat_page.html"
}