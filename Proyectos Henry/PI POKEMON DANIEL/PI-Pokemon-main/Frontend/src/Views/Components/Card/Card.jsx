import style from './Card.module.css'
import {Link} from 'react-router-dom'
import NormalCardBackground from '../../assets/NormalCardBackground.jpeg'
import GrassCardBackground from '../../assets/GrassCardBackground.png'
import FightingCardBackground from '../../assets/FightingCardBackground.jpeg'
import PoisonCardBackground from '../../assets/PoisonCardBackground.jpeg'
import FlyingCardBackground from '../../assets/FireCardBackground.jpeg'
import GroundCardBackground from '../../assets/GroundCardBackground.jpeg'
import RockCardBackground from '../../assets/RockCardBackground.jpeg'
import BugCardBackground from '../../assets/BugCardBackground.jpeg'
import GhostCardBackground from '../../assets/GhostCardBackground.jpeg'
import SteelCardBackground from '../../assets/SteelCardBackground.jpeg'
import FireCardBackground from '../../assets/FireCardBackground.jpeg'
import WaterCardBackground from '../../assets/WaterCardBackground.jpeg'
import ElectricCardBackground from '../../assets/ElectricCardBackground.jpeg'
import PsychicCardBackground from '../../assets/PsychicCardBackground.jpeg'
import IceCardBackground from '../../assets/IceCardBackground.jpeg'
import DragonCardBackground from '../../assets/DragonCardBackground.jpeg'
import DarkCardBackground from '../../assets/DarkCardBackground.jpeg'
import FairyCardBackground from '../../assets/FairyCardBackground.jpeg'

const Card = ({id, name, type, img, weight, height}) => {
    const types = type ? type.join(' y ') : ''
    console.log(types)
    const getTypeColor = (type) => {
      const primaryType = type.split(' ')[0];
        switch (primaryType) {
          case "normal": return 'rgb(255, 107, 230)';
          case "grass": return 'rgb(0, 250, 63)';
          case "fighting": return 'rgba(239, 69, 39, 0.836)';
          case "poison": return 'rgb(213, 170, 248)';
          case "fliying": return 'rgb(142, 155, 214)';
          case "ground": return 'rgb(218, 207, 185)';
          case "rock": return 'rgb(187, 160, 134)';
          case "bug": return 'rgb(145, 202, 94)';
          case "ghost": return 'rgb(59, 52, 71)';
          case "steel": return 'rgb(155, 113, 156)';
          case "fire":return 'rgb(233, 33, 33)';
          case "water":return ' rgb(67, 124, 198)';
          case "electric":return 'rgb(241, 215, 69)';
          case "psychic":return ' rgb(187, 71, 181)';
          case "ice":return 'rgb(211, 227, 245)';
          case "dragon":return 'rgb(129, 130, 177)';
          case "dark":return 'rgb(121, 96, 159)';
          case "fairy":return 'rgb(250, 219, 24)';
          case "unknown":return 'rgb(147, 192, 137)';
          case "shadow":return ' rgb(117, 89, 114)';

          default: break
        }
    }
    const getBackgroundImg = (type) => {
      const primaryType = type.split(' ')[0];
      switch (primaryType) {
        //2tipos
        case "grass": return `url(${GrassCardBackground})`
        case "fire": return `url(${FireCardBackground})`
        case "normal": return `url(${NormalCardBackground})`
        case "bug": return `url(${BugCardBackground})`
        case "water": return `url(${WaterCardBackground})`
        case "ground": return`url(${GroundCardBackground})`
        case "steel": return `url(${SteelCardBackground})`
        case "ice": return `url(${IceCardBackground})`
        case "rock": return `url(${RockCardBackground})`
        case "electric": return `url(${ElectricCardBackground})`
        case "ghost": return `url(${GhostCardBackground})`
        case "poison": return `url(${PoisonCardBackground})`
        case "dark": return `url(${DarkCardBackground})`
        case "psychic": return `url(${PsychicCardBackground})`
        case "fairy": return `url(${FairyCardBackground})`
        case "dragon": return `url(${DragonCardBackground})`
        case "fighting": return `url(${FightingCardBackground})`
        case "flying": return `url(${FlyingCardBackground})`
        // añadir cualquier otro tipo adicional aquí
        default: return `url(${NormalCardBackground})` // Si el tipo no aparece en la lista, se usa el fondo normal por defecto
      }
    }
    

      
    return(
    <div style={{backgroundImage: getBackgroundImg(types)}} className={style.card}>

    <div className={style.cardTop}>
    <h2>{name}</h2>
    <img src={img} alt='pic' />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,106.7C672,139,768,181,864,192C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    
    <div className={style.cardContent}> 
    <h6 style={{color: getTypeColor(types)}}>types</h6>

    <div className={style.types}>
    {/* <h6>{type[0]}</h6>
    <h6>{type[1]}</h6> */}
    </div>
   

    <p className={style.id}>#00{id}</p>
    <Link to={`/details/${id}`}>
    <button style={{color:getTypeColor(types)}}>About</button>
    </Link>

    <div className={style.cardStats}>
    <span>{weight}kg</span>
    <p>Weight</p>
    <p>Height</p>
    <span>{height}m</span>
    </div>
    </div>
    
    </div>

    )
}
export default Card;