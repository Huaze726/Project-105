// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

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

function addUser() {
  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

  document.getElementById("user_name").value = "";

  window.location = "chat_page.html";
}