import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PrivateRoutes from "./Components/UI/PrivateRoutes/PrivateRoutes";
import * as firebase from "firebase/app";
import {AuthProvider} from "./Components/UI/Provider/ProviderAuth";


const firebaseConfig = {
    apiKey: "AIzaSyDrcEqSAAEuFuM6ZvymYfKkoQgIMwjKNbQ",
    authDomain: "sotial-app-3aeab.firebaseapp.com",
    projectId: "sotial-app-3aeab",
    storageBucket: "sotial-app-3aeab.appspot.com",
    messagingSenderId: "712446038558",
    appId: "1:712446038558:web:af3b4a6bd0d9e34a00140f"
};

firebase.initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
        <PrivateRoutes/>
    </AuthProvider>
);

