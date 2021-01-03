import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeTable from "./components/timetable";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDWljl_Wgo6vQ18kzn6pijmb8QmmiqTOhE",
  authDomain: "time-table-manager-9365d.firebaseapp.com",
  projectId: "time-table-manager-9365d",
  storageBucket: "time-table-manager-9365d.appspot.com",
  messagingSenderId: "1088077158816",
  appId: "1:1088077158816:web:0b7c8ed0defb94cc52acc5",
  measurementId: "G-SZ2FZH4TZV",
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const [batch, setBatch] = useState();

  const signInWithGoogle = () => {
    console.log("signin");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  if (user) {
    const [username, domain] = user.email.split("@");
    const year = username.slice(-2);
    const branch = domain.slice(0, 3);
    if (!isNaN(year)) {
      if (
        (domain === "cse.iiitp.ac.in" || domain === "ece.iiitp.ac.in") &&
        batch !== branch + year
      )
        setBatch(branch + year);
    }
  }

  return (
    <div>
      <NavBar user={user} logout={() => auth.signOut()} />
      {user ? (
        <TimeTable user={user} db={db} batch={batch} />
      ) : (
        <Login signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
}

export default App;
