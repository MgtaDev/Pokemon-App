import style from './Detail.module.css'
import Pokemon from '../assets/pokemonGift.gif'

const Detail = () => {
    return(
        <div className={style.Detail}>
          <div className={style.Card}>
       
            <div className={style.Img}>
            <img src={Pokemon} alt="" />  
            </div>

            <div className={style.Content}>
            <h1>Stats</h1>
            <h4>Hp:100❤️‍🔥</h4>
            <h4>Attack:100⚔️</h4>
            <h4>Defense:80🛡️ </h4>
            <h4>Speed:50⚡</h4>
            <h4>Height:180🧬</h4>
            <h4>Weight:70🩻 </h4>
            </div>

          </div>
        </div>
    )
}
export default Detail;