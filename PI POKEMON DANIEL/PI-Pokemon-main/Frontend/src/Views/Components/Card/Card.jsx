import style from './Card.module.css'
import {Link} from 'react-router-dom'
// import backCardImg from '../assets/BackCard Pokemon.jpeg'

const Card = ({id, name, type, img}) => {
    const types = type ? type.join(' y ') : ''
    return(
        <div className={style.Card}>
    <div className={style.Content}>
    <div> 
    <img src={img} alt='pic' />
    
    <h1>{name}</h1>
    <h6>{types}</h6>
    <p>#00{id}</p>

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