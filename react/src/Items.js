
import './Items.css'

function Items(props) {
    const handleClick = () => {
        window.open(props.link,'_blank')
    }
    return (

<button onClick={handleClick} className='cont-item'>  

    <img className="item-pic" src={props.picture} alt={props.name}/>
<h2 className='texto-item'>{props.name}</h2>

     </button>
    );
}
export default Items;