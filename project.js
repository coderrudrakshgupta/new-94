

var firebaseConfig = {
    apiKey: "AIzaSyBGMgXAFDLsIe-NBwI7laGCYoN5QIf9TWg",
    authDomain: "project-42-59d81.firebaseapp.com",
    databaseURL: "https://project-42-59d81.firebaseio.com",
    projectId: "project-42-59d81",
    storageBucket: "project-42-59d81.appspot.com",
    messagingSenderId: "60144034215",
    appId: "1:60144034215:web:fc44c07e67ebf4a56dd682"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").Value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});}