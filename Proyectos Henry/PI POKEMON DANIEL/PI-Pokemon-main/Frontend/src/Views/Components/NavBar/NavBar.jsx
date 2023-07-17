import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/PokemonLogo.png'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {    
    
    return(
        <nav className={style.navBar}>
            <NavLink to='/'>
            <img src={Logo} alt='Logo'/>
            </NavLink>

            <SearchBar/>


        <div className={style.navButtons}>
            
            <NavLink to='/form'>
                Create
            </NavLink>
            <NavLink to='/about'>
                About Me
            </NavLink>
        </div>

        </nav>
    )
}
export default NavBar;