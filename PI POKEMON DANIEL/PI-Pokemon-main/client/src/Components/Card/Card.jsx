import style from './Card.module.css'

const Card = ({img,name, types })=> {
return(
    <div className={style.container}>
        <div className={style.card}>
        <img src={img} alt="" />
        <p>${name}</p>
        <p>${types}</p>
        </div>
    </div>
)
}
export default Card;