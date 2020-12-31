import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeTable from './components/timetable';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";


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
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const [batch, setBatch] = useState();

  const signInWithGoogle = () => {
    console.log("signin");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  console.log(user);
  if (user) {
    let username = user.email.split("@")[0];
    let domain = user.email.split("@")[1];
    let year=username.slice(-2);
    if(isNaN(year))
    {
      if(domain==="cse.iiitp.ac.in")setBatch("cse"+year);
      if(domain==="ece.iiitp.ac.in")setBatch("ece"+year);
    }
  }
  return (
    <div>
      <NavBar user={user} logout={() => auth.signOut()} />
      {user ? (
        <TimeTable userdata={user} />
      ) : (
        <Login signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
}

export default App;
