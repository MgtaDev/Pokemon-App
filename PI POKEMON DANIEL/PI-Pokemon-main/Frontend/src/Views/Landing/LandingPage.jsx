import style from './LandingPage.module.css'
import Pokemon from '../assets/Pokemon.png'
import { NavLink } from 'react-router-dom'

const Landing = () => {
    return(
        <div className={style.Landing}>
            <img src={Pokemon} alt="img" />

            <div className={style.content}>
           
        
            <NavLink to='/home'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
               Entrar
           </NavLink>
         
            </div>
        </div>
    )
}
export default Landing;