import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:  "AIzaSyDmauv46kj-T3Oq_YDG6sETuPa3g2mjX_Q",
  authDomain: "wines-7ab51.firebaseapp.com",
  projectId: "wines-7ab51",
  storageBucket: "wines-7ab51.appspot.com",
  messagingSenderId: "109694442985",
  appId: "1:109694442985:web:16f6f500fd2b07dcb03f78"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
