// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfC08ukdscFahwh7sY1ATlEVGEv4wcGok",
  authDomain: "my-unilorin-project.firebaseapp.com",
  projectId: "my-unilorin-project",
  storageBucket: "my-unilorin-project.appspot.com",
  messagingSenderId: "710898907008",
  appId: "1:710898907008:web:b7a6177530d04b9ac47365",
  measurementId: "G-QE72W8WDL9"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp() {

  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
      window.alert("Signed Up Successfully");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      window.alert(errorMessage);
    });

}

function signIn() {
  const auth = firebase.auth();
  var email = document.getElementById("emailsignin").value;
  var password = document.getElementById("passsignin").value;


  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      window.location.replace("index1.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert(errorMessage);
    });
}


firebase.auth().onAuthStateChanged((user) => {
  var uid = null;
  if (user) {
    // User is signed in, see docs for a list of available properties
    //   https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    uid = null;
    //  window.location.replace('index1.html');
  }
});

function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    // window.location.replace('index1.html');
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
};

// var email = document.getElementById("email").value;
// var password = document.getElementById("pass").value;

// window.localStorage.setItem("app", [email, password])