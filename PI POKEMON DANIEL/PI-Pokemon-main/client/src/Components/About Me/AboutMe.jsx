import style from './AboutMe.module.css'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className={style.container}>
            <h1>About <span>Me </span></h1>
            <h2>Full stack developer</h2>
            <img src="" alt="" />
            <p>Hola, soy Daniel, un estudiante en proceso de Full stack jr developer, orientado al FrontEnd y el Responsive Web Design</p>
            <Link to={"/"}>
                <button>Home</button>
            </Link>
        </div>
    );
};
//status: completed