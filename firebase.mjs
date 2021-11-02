// our firebase file


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, addDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";



// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAShMhlbdVGhTqJjP7Ay0yfKH0SXA-P198",
      authDomain: "my-dog-project-f9d92.firebaseapp.com",
      projectId: "my-dog-project-f9d92",
      storageBucket: "my-dog-project-f9d92.appspot.com",
      messagingSenderId: "952892503302",
      appId: "1:952892503302:web:0fde4100e32e984b805a87",
      measurementId: "G-YKS2Q9NRCY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


//////////////////////////////////////////////
// exposed functionality for auth
window.isLoggedIn = function(){
    return auth.currentUser !== null;
}

window.login = function(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}

window.signup = function(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}

window.logout = function(){
    auth.signOut();
}

window.onLogin = function( f ){
    onAuthStateChanged(auth, user => {
        f( user );
    });
}


//////////////////////////////////////////////
// exposed functionality for db
window.addComment = function(comment){
    return addDoc( collection(db, "comments"), {comment} );
}

window.forEachComment = async function( f ){
    var docs = await getDocs( collection(db, "comments") );
    console.log(docs);
    docs.forEach( doc => f(doc.data()) );
}