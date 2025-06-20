import './Navegador.css';
import logo from './assets/pictures/logo-oscuro.png'
import {Link} from 'react-router-dom';

function Navegador() {

    
    return (
        <div className='nav-bar'>
      
            <img className="nav-img" src={logo}/>
            <ul classname="nav-list">
                <li>Conocenos más..</li>
                <li>¿Como pedir?</li>
                <li>Escribenos al whatsapp</li>
            </ul>
                
        </div>
    )
}
export default Navegador;
