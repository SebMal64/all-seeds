
import './Items.css'

function Items(props) {
    const handleClick = () => {
        window.open(props.link,'_blank')
    }
    return (

<button onClick={handleClick} className='cont-item'>  

    <img src={props.picture} alt={props.name}/>
<h3 className='text-enlace text-uppercase'>{props.name}</h3>
    
     </button>
    );
}
export default Items;