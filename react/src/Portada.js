import './Portada.css';
import Items from './Items';
import pastel from './assets/pictures/pastel.png'

function Portada() {
  return (
    <section className='section-portada'>

      <div className='contenedor1'>
          {/* <Items name="carta dia de la madre" 
           picture={pastel} link="https://drive.google.com/file/d/1QiuNROxQ9mrMAGQ56t81MHb3b0Ns1tLq/view"/>
           <Items name="porciones cuchareables" link="https://drive.google.com/file/d/1Ffdnr8dfVpdMfGqfk-ShTNVydXOe2wCO/view"/>
           <Items name="postres de carta" link="https://drive.google.com/file/d/1g4mkcCAJ9hKJIn_AoaPXoevjmW_12wQ3/view"/>
           <Items name="moldes enteros" link="https://drive.google.com/file/d/16me20skVag-J2U2Sv5OB-5ihwDhDRD5-/view"/> */  }        
           <Items/><Items/><Items/><Items/>
     
      
      </div>
       <div className='contenedor2'>
           {/*<Items name="rappi"/>
           <Items name="pedidosya"/>*/}
           <Items/><Items/><Items/>
           
     
      
      </div>
      <div className='icons'>
        {/*iconos de whasatpp revisar iconos de pabinas*/}
        <icon></icon>
      </div>
    </section>
   
  );
}

export default Portada;
