import './Navegador.css';
import logo from './assets/pictures/logo-oscuro.png'

function Navegador() {


    return (
        <nav className='nav-bar'>
            <img className="nav-img" alt="img" src={logo} />
            <ul className="nav-list">
                <li className='nav-list-item'>Conocenos más..</li>
                <li className='nav-list-item'>Conocenos más..</li>
                <li className='nav-list-item'>tarado</li>
            </ul>
            
                

        </nav>
    )
}
export default Navegador;
