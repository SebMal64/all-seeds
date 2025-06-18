import React from 'react';
import ReactDOM from 'react-dom/client';
import Navegador from './Navegador.js'
import Portada from './Portada.js'
import AboutUs from './AboutUs.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from './Steps.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <Navegador/>
      <Portada/>
      <AboutUs/>
      <Steps/>
 
  </React.StrictMode>
);
