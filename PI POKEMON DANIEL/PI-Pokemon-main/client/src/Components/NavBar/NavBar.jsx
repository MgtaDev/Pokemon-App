import style from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";


const NavBar = ({onSearch})=> {
    return(
        <div className={style.container}>
            <img src="/client/assets/Logo.png" alt="" />
        <SearchBar onSearch={onSearch}/>

        <Link to=''>About me</Link>

        <Link to=''>Types</Link>

        <Link to=''>Home</Link>

        </div>
    )
    }
export default NavBar;