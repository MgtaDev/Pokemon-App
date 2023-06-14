import style from './NavBar.module.css'
import { NavLink} from 'react-router-dom'
import Logo from '../assets/Logo.png'

const NavBar = () => {
    return(
        <nav className={style.Navbar}>
            <img src={Logo} alt='Logo'/>

        <div className={style.NavButtons}>
            <NavLink to='/home'>
                Home
            </NavLink>
            <NavLink to='/form'>
                Create Your Pokemon
            </NavLink>
            <NavLink to='/about'>
                About Me
            </NavLink>
        </div>

        </nav>
    )
}
export default NavBar;