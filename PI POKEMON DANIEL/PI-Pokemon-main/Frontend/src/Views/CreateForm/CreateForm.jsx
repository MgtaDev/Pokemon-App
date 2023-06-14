import style from './CreateForm.module.css'
import Photo from '../assets/GiftIslandBackground.gif'
import Logo from '../assets/Pokemon.png'

const CreateForm = () => {
    return(
        <div className={style.Detail}>
          <h2>Crea tu Pokemon!</h2>
          <div className={style.Card}>

            <div className= {style.imgWrapper}>
            <div className={style.Img}>
            <img src={Logo} alt="" />  
            </div>

            <div className={style.Img2}>
            <img src={Photo} alt="" />  
            </div>

            </div>
       

            <div className={style.Content}>
            <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder='Ingresa un nombre'/>

        <label for="imagen">Imagen:</label>
        <input type="text" id="imagen" name="imagen" placeholder='Escoje una imagen'/>
       

        <label for="vida">Vida:</label>
        <input type="range" id="vida" name="vida" />

        <label for="ataque">Ataque:</label>
        <input type="range" id="ataque" name="ataque" />

        <label for="defensa">Defensa:</label>
        <input type="range" id="defensa" name="defensa" />

        <label for="velocidad">Velocidad:</label>
        <input type="range" id="velocidad" name="velocidad" />

        <label for="altura">Altura:</label>
        <input type="number" id="altura" name="altura" placeholder='Ingresa una altura'/>

        <label for="peso">Peso:</label>
        <input type="number" id="peso" name="peso" placeholder='Ingresa el peso'/>

        <label for="tipos">Tipos:</label>
        <select name="tipos">
          {/* {types.map(type => { */}
            {/* return (<option key={type} value={type}>{type}</option>) */}
          {/* })} */}
        </select>
          
        <button type="submit">Crear nuevo Pokémon</button>
      
      </form>

            {/* <h1>Stats</h1>
            <h4>Hp:100❤️‍🔥</h4>
            <h4>Attack:100⚔️</h4>
            <h4>Defense:80🛡️ </h4>
            <h4>Speed:50⚡</h4>
            <h4>Height:180🧬</h4>
            <h4>Weight:70🩻 </h4> */}
            </div>

          </div>
        </div>
    )
}
export default CreateForm;