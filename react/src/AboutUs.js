import './AboutUs.css'
import icon1 from './assets/pictures/icon1.png';
import icon2 from './assets/pictures/icon2.png';
import icon3 from './assets/pictures/icon3.png';

function AboutUs() {
    return (
        <div >
            <div className="about">

                <div className="foto shadow">
                    <img alt="foto"></img>
                </div>

                <div className="cont">
                    <h2 className="tit">Sobre nosotros</h2>
                    <p className="text">Bienvenido a All Seeds, donde la pasión por la repostería se une con un compromiso inquebrantable con tu bienestar. Nos enorgullecemos de crear exquisitos manjares que deleitan tu paladar sin comprometer tu salud.</p>
                    <div className="cont-pic">
                        <div className="pic shadow">
                            <img src={icon1} alt="icono" />
                            <span className="span-icon">Libre de gluten</span>
                        </div>
                        <div className="pic shadow">
                            <img src={icon2} alt="icono" />
                            <span className="span-icon">Endulzantes naturales</span>
                        </div>
                        <div className="pic shadow">
                            <img src={icon3} alt="icono" />
                            <span className="span-icon">Opcion vegana</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default AboutUs