import './Productos.css';
import pos1 from './assets/pictures/pos1.jpg';
import pos2 from './assets/pictures/pos2.jpg';
import pos3 from './assets/pictures/pos3.jpg';
import pos4 from './assets/pictures/pos4.jpg';



function Productos() {
    return (
        
        <div className="prod">
            <div className="cont-text">
                <h2>Nuestros postres</h2>
                <p>Presentamos las secciones de postres de
                    acuerdo a tus gustos, entre estos podras
                    encontrar, la seccion de VEGANOS, SIN GLUTEN,
                    INTEGRALES, SIN AZUCAR y los PERSONALIZADOS.
                    Todos estos pueden variar el precio de acuerdo a tus preferencias y seleciones como tambien la cantidad que ordenaste.

                    ¡A disfrutar!
                </p>
            </div>
            <div class="cont-postres">
                <div className="item shadow">
                    <img className="item-pic" src={pos1} alt="postre" />
                    <div class="item-text"><h1 className="text-pic">Postres veganos</h1></div>
                </div>
                <div className="item shadow">
                    <img className="item-pic" src={pos2} alt="postre" />
                    <div class="item-text"><h1 className="text-pic">Postres veganos</h1></div>
                </div>
                <div className="item shadow">
                    <img className="item-pic" src={pos3} alt="postre" />
                    <div class="item-text"><h1 className="text-pic">Postres veganos</h1></div>

                </div>
                <div className="item shadow">
                    <img className="item-pic" src={pos4} alt="postre" />
                    <div class="item-text"><h1 className="text-pic">Postres veganos</h1></div>

                </div>

            </div>
        </div>
    )
}

export default Productos