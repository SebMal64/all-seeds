import React from 'react';
import ReactDOM from 'react-dom/client';
import Portada from './Portada.js'
import AboutUs from './AboutUs.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
  <Portada/>
        <AboutUs/>
       
  </React.StrictMode>
);
