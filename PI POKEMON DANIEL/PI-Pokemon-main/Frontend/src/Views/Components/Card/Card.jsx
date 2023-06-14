import style from './Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({id, name, type, img}) => {
    return(
        <div className={style.Card}>
    <div>

    <div> 
    <img src={img} alt={name} />
    </div>

    <p>{id}</p>
    <h1>{name}</h1>
    <p>{type}</p>
    </div>

    <div> 
    <Link>
    <button>DETAILS</button>
    </Link>
    </div>
    
    </div>
    )
}
export default Card;