import './AboutUs.css';
import pos1 from './assets/pictures/pos1.jpg';


function AboutUs() {
  //const Texto_AboutUs_1 = "En AllSeeds creemos que comer bien no debería significar renunciar al sabor. Por eso creamos postres saludables hechos con insumos orgánicos y naturales, sin aditivos ni procesos industriales. Todo comenzó de forma sencilla: vendiendo un postre a la vez, hecho en casa, con dedicación y cuidado. Poco a poco, más personas empezaron a probar, recomendar y pedir más. Así nació este emprendimiento, con la convicción de que la alimentación saludable puede ser también deliciosa y accesible. A diferencia de los productos hechos en masa, cada postre AllSeeds se elabora de manera artesanal, con atención a cada ingrediente y cada detalle. No usamos azúcar refinada, harinas procesadas ni conservantes, porque creemos que el cuerpo merece lo mejor de la naturaleza. Nuestra visión: Queremos que cada vez más personas descubran que alimentarse bien no es aburrido ni complicado. Nuestro objetivo es inspirar una vida más saludable, una cucharada a la vez."
  const Texto_AboutUs_2 = "En AllSeeds, creemos que lo saludable también puede ser delicioso. Desde hace más de 5 años, nos dedicamos a elaborar postres nutritivos a base de insumos 100% orgánicos, seleccionados con cuidado para brindarte lo mejor de la naturaleza en cada bocado. Nuestra pasión es ofrecer opciones dulces, libres de culpa, pensadas para quienes buscan cuidar su bienestar sin renunciar al sabor. "
  return (

<section className="about bg-danger text-center">
      <img src={pos1} alt="About-us" className='square'/>
     <div className='square text-about'>
      <h1 className="text-uppercase mb-4">About us</h1>
      <p className="font-2">
{Texto_AboutUs_2}</p>
      <ul>
        <li>🌿 Ingredientes 100% naturales</li>
        <li>💚 Opciones veganas</li>
        <li>🍯 Endulzados con dátiles, panela o stevia</li>
      </ul></div>
    </section>
        )
}
export default AboutUs