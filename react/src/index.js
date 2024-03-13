import React from 'react';
import ReactDOM from 'react-dom/client';
import Portada from './Portada.js';
import AboutUs from './AboutUs.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Productos from './Productos.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='fondo'>
        <Portada />
        
        <div className='craft'>
          <div className='esfera'></div>
      <div className='seccion'>
        <Productos/></div>
      </div>
      <div className='seccion'>
        <AboutUs />
        </div>
    </div>
  </React.StrictMode>
);
