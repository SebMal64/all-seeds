import './Portada.css';
import Items from './Items';
import pastel from './assets/pictures/pastel.png';
import pos3 from './assets/pictures/pos3.jpg';
import elemento_1 from './assets/pictures/elemento-1.png'
import elemento_2 from './assets/pictures/elemento-2.png'
import elemento_3 from './assets/pictures/elemento-3.png'
import elemento_4 from './assets/pictures/elemento-4.png'
import logo1 from './assets/pictures/logo-pedidosya.jpg'
import logo2 from './assets/pictures/logo-rappi.png'
import logo3 from './assets/pictures/logo-whatsapp.png'





function Portada() {
  return (
    <section className='section-portada'>
      <div className='contenedor1'>
        <Items name="cartera"
          picture={elemento_1} link="https://drive.google.com/file/d/1QiuNROxQ9mrMAGQ56t81MHb3b0Ns1tLq/view" />
        <Items name="porciones cuchareables" picture={elemento_2}
          link="https://drive.google.com/file/d/1Ffdnr8dfVpdMfGqfk-ShTNVydXOe2wCO/view" />

        <div className='cont-2'>
          <Items name="postres de carta" picture={elemento_3} link="https://drive.google.com/file/d/1g4mkcCAJ9hKJIn_AoaPXoevjmW_12wQ3/view" />
          <Items name="moldes enteros" picture={elemento_4} link="https://drive.google.com/file/d/16me20skVag-J2U2Sv5OB-5ihwDhDRD5-/view" />
        </div>


      </div>
      <div className='cont-3'>
        <Items picture={logo1} />
        <Items picture={logo2} />
        <Items picture={logo3} />
      </div>
      <div className='icons'>
        {/*iconos de whasatpp revisar iconos de pabinas*/}
        <icon></icon>
      </div>
    </section>

  );
}

export default Portada;
