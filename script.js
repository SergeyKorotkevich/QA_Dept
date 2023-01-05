
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCjEX8Bp6ffTIWykC7SPx_4PS3atQL9_38",
      authDomain: "qa-dept.firebaseapp.com",
      projectId: "qa-dept",
      storageBucket: "qa-dept.appspot.com",
      messagingSenderId: "128166239839",
      appId: "1:128166239839:web:2e7e8d1f9435cc884705ea",
      measurementId: "G-Q5P1N73FNF"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const analytics = getAnalytics(app);
    let btn = document.getElementById("submitData");
    btn.addEventListener('click', (e) =>{
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href = 'page2.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    });
