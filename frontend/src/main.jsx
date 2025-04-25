// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import AppcontextProvider from './Context/appcontext.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
   
// <AppcontextProvider> <App />  </AppcontextProvider>
//   </BrowserRouter>,
// )






// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppContext } from './context/Appcontext.jsx';
import AppContextProvider from './context/Appcontext.jsx'; // Correct import path

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
