
import './Items.css'

function Items(props) {
    const handleClick = () => {
        window.open(props.link,'_blank')
    }
    return (

<button onClick={handleClick} className='cont-item'>  

    <img className="item-pic" src={props.picture} alt={props.name}/>
<p className='text-uppercase'>{props.name}</p>
    
     </button>
    );
}
export default Items;