import style from "./About.module.css"
import myPhoto from '../assets/Myphoto.jpeg'

export default function About(){
    return(
        <div className={style.aboutMe}>
            
            <img src={myPhoto} alt="" />
            <h1>About <span>Me </span></h1>
            <h2>Full Stack Developer</h2>
            <img src="" alt="" />
            <p>Hola 👋, soy Daniel Passantino ✔️ Soy un programador Full Stack jr! <br />Me especializo en Frontend y Responsive Web Design

📚 Actualmente estoy estudiando Ingles, Frances, React Native y Next.js <br />

👨‍💻 Todos mis proyectos estan disponibles en mi portafolio personal:

💬 Puedes consultarme acerca de React, Express, Node, PostgreSQL, MongDB, HTML, CSS y Javascript, <br/>

📫 Contactame via Email a passantinodev@gmail.com</p>
            
        </div>
    );
};