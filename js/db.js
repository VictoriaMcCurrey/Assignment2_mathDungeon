    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { 
      getFirestore, 
      collection, 
      getDocs, 
      onSnapshot,
      enableIndexedDbPersistence,
    } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
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
    const db = getFirestore(app);

    async function getFact(db) {
      const onesCol = collection(db, "ones");
      const onesSnapshot = await getDocs(onesCol);
      const onesList = onesSnapshot.docs.map((doc) => doc);
      return onesList;
    }

    // enable indexDB offline data
    enableIndexedDbPersistence(db).catch((err) => {
          if (err.code == "failed-precondition") {
              // Multiple tabs open, persistence can only be enabled
              // in one tab at a a time.
              console.log("Persistence failed");
          } else if (err.code == 'unimplemented') {
              // The current browser does not support all of the
              // features required to enable persistence
              console.log("Persistence is not valid");
          }
      });

    // get facts from database
    getFact(db).then((doc) => {
      doc.forEach((d) =>{
        // currently displays facts from database to console to verify connection to db for final
        // till app code to render the facts on the app is completed 
        console.log(d.data());
      })
    })

    // select random fact
    // bring facts to main page and display in li
    // check input text with fact answer  
    // if correct display dungeon map 
    // dungeon task
    // display new fact
    // if incorrect display "incorrect try again"
  
      