  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import {getDatabase , ref , get, child} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyApFwTd1Co19uqzd_enGfVkfgLG7NJjJbs",
    authDomain: "fitness-40e1f.firebaseapp.com",
    projectId: "fitness-40e1f",
    storageBucket: "fitness-40e1f.appspot.com",
    messagingSenderId: "887213343607",
    appId: "1:887213343607:web:e159258751252fb3641772"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services
  const db = getDatabase(app);

  document.getElementById("Register").addEventListener('click', function(e){


    set(ref(db, 'user/' + document.getElementById("Firstname").value),
    {
      Firstname : document.getElementById("Firstname").value,
      Lastname : document.getElementById("Lastname").value,
      Email : document.getElementById("Email").value,
      Password : document.getElementById("Password").value,
    });
      alert("Signup successful !")
  });