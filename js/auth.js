import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signOut, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrLdeHTSI6gmJ9rdFeZ4Ov0cE6x6_1ACE",
    authDomain: "multiplication-facts-b2253.firebaseapp.com",
    projectId: "multiplication-facts-b2253",
    storageBucket: "multiplication-facts-b2253.appspot.com",
    messagingSenderId: "192994792651",
    appId: "1:192994792651:web:1263912fe4c89303d4374e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// listen for auth status changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User logged in: ", user.email);
        
    } else {
        console.log("User Logged out");
    }
});


// sign up
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // sign up
            const user = userCredential.user;
            console.log(user);
            const model = document.querySelector("#modal-signup");
            Map.Modal.getInstance(modal).close();
            signupForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
            console.log("User has signed out");
    })
    .catch((error) => {
        //an error happened
        console.log("Error on logout");
    });
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // sign in
            const user = userCredential.user;
            console.log(user);
            const modal = document.querySelector("#modal-signup");
            M.Modal.getInstance(modal).close();
            loginForm.reset();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
});

