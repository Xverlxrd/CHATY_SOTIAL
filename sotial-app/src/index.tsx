import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrivateRoutes from "./Components/UI/PrivateRoutes/PrivateRoutes";
import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDuaaC63PgQdaJmWJwOKTvxohZ_NFUbJfc",
    authDomain: "sotial-app-fbcf5.firebaseapp.com",
    projectId: "sotial-app-fbcf5",
    storageBucket: "sotial-app-fbcf5.appspot.com",
    messagingSenderId: "556835618879",
    appId: "1:556835618879:web:129151b40a890fe966388a",
    measurementId: "G-HWEYTEZTEX"
};
firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <PrivateRoutes/>
);

