import style from "./About.module.css"
import myPhoto from '../assets/Myphoto.jpeg'

export default function About(){
    return(
        <div className={style.aboutMe}>
            <img src={myPhoto} alt="" />
            <h2>About <span>Me </span><span>Me </span></h2>
            <h2>Full Stack Developer</h2>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero reprehenderit natus adipisci perspiciatis, distinctio odio, voluptates vitae quia doloribus eveniet tempora? Id, expedita aspernatur fugit voluptates pariatur perferendis repudiandae!</p>
            
        </div>
    );
};