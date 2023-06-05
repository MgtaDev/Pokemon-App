import style from './DetailPage.module.css'
import { Link } from 'react-router-dom'

const DetailPage = ({id,nombre,imagen,vida,ataque,defensa,velocidad,atlura,peso,tipo})=> {
    return(
        
        <div className={style.container}>

        <div className={style.detailCard}>
        <h2>Id</h2>
        <h2>Nombre</h2>
        <img src="" alt="" />
        <h2>Vida:</h2>
        <h2>Ataque:</h2>
        <h2>Defensa:</h2>
        <h2>Velocidad:</h2>
        <h2>Altura:</h2>
        <h2>Peso:</h2>
        <h2>Tipo:</h2>
        </div>
        
        <Link>
        <button className={style.button}>Back to Home</button>
        </Link>
    
        </div>
    )
    }
export default DetailPage;