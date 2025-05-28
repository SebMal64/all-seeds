import './Navegador.css';
import logo from './assets/pictures/logo.png'
import {Link} from 'react-router-dom';

function Navegador() {

    
    return (
        <div className='navi rounded-pill shadow'>
            <ul className="items item-1">

                    <li className="word">
                        <Link to="/about-us">About us</Link>
                    </li>
                    <li className="word">nosotdfros</li>
                    <li className="word">catálogo</li>



            </ul>
            <div className="logo shadow rounded-circle">
                <img alt="logo" className="img-logo" src={logo}></img>
            </div>
            <ul className="items item-2">
                <li className="word">mascfevsd</li>
                <li className="word">mascare</li>
                <li className="word">mascare</li>


                </ul>
                
        </div>
    )
}
export default Navegador;
