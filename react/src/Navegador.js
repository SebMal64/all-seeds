import './Navegador.css';
import logo from './assets/pictures/logo-oscuro.png'
import {Link} from 'react-router-dom';

function Navegador() {

    
    return (
        <div className='nav-bar'>
      
            <img className="nav-img" src={logo}/>
                
        </div>
    )
}
export default Navegador;
