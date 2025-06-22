import './Navegador.css';
import logo from './assets/pictures/logo-oscuro.png'
import { Link } from 'react-router-dom';
import './AboutUs';
import { useState } from 'react';

function Navegador() {


    return (
        <nav className='nav-bar'>

            <img className="nav-img" src={logo} />
            <ul className="nav-list">
                <li className='nav-list-item'>Conocenos más..</li>
                <li className='nav-list-item'>tarado</li>
                <li className='nav-list-item'>Conocenos más..</li>
                <li className='nav-list-item'>tarado</li>
            </ul>

        </nav>
    )
}
export default Navegador;
