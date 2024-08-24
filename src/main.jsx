import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLY_JyVP4tFzwH-yJF6bEyfb6CckWHWuY",
  authDomain: "guzman-57805.firebaseapp.com",
  projectId: "guzman-57805",
  storageBucket: "guzman-57805.appspot.com",
  messagingSenderId: "600532237277",
  appId: "1:600532237277:web:b0a6a924cecce3ede65434"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
