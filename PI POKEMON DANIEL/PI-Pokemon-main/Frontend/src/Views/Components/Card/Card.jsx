import style from './Card.module.css'
import {Link} from 'react-router-dom'
// import backCardImg from '../assets/BackCard Pokemon.jpeg'

const Card = ({id, name, type, img}) => {
    return(
        <div className={style.Card}>
    <div className={style.Content}>
    <div> 
    <img src={img} alt='pic' />
    
    <p>{id}</p>
    <h1>{name}</h1>
    <p>{type}</p>

    <div> 
    <Link to={`/details/${id}`}>
    <button>DETAILS</button>
    </Link>
    </div>
    
    </div>
    </div>

    </div>
    )
}
export default Card;