import style from './CreateForm.module.css'
import Photo from '../assets/gengarLoadingGif.gif'
import Logo from '../assets/PokemonLogo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const CreateForm = () => {
  const  types = useSelector(state=>state.types)
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: null,
    vida: '',
    ataque: '',
    defensa: '',
    velocidad: '',
    altura: '',
    peso: '',
    tipos: ''
  });

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:  event.target.value
    })
  }

  const handleSubmit = ()=> {

  }

  const dataToCreatePokemon = {
    name: formData.nombre,
    hp: formData.vida,
    attack: formData.ataque,
    defense: formData.defensa,
    speed: formData.velocidad,
    height: formData.altura,
    weight: formData.peso,
    image: formData.imagen,
    type:formData.tipos
  };
  fetch('http://localhost:3001/pokemons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToCreatePokemon),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    return(
        <div className={style.Detail}>
          <div className={style.Card}>

            <div className= {style.imgWrapper}>

            <div className={style.Img2}>
            <img  src={Photo} alt="" />  
            </div>

            </div>
       

            <div className={style.Content}>
            <div className={style.Img}>
            <img style={{width: '250px', position:'relative', left:'4%', marginTop:'1rem'}} src={Logo} alt="" />  
            </div>
            <form>

        <div className={style.LeftSide}>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder='Ingresa un nombre' required value={formData.nombre} onChange={handlechange}/>

        <label for="imagen">Imagen:</label>
        <input type="text" id="imagen" name="imagen" placeholder='Escoje una imagen' required value={formData.imagen} onChange={handlechange}/>
       
        <label for="altura">Altura:</label>
        <input type="number" id="altura" name="altura" placeholder='Ingresa una altura' required value={formData.altura} onChange={handlechange}/>
       
        <label for="peso">Peso:</label>
        <input type="number" id="peso" name="peso" placeholder='Ingresa el peso' required value={formData.peso} onChange={handlechange}/>

        <label for="tipos">Tipos:</label>
        <select name="tipos" required value={formData.tipos} onChange={handlechange}>
          {
          types.map(type => {
            return (<option key={type} value={type}>{type}</option>)
          })
          }
        </select>
        </div>

        <div className={style.RightContent}>
        <label for="vida">Vida:</label>
        <input type="range" id="vida" name="vida" required value={formData.vida} onChange={handlechange}/>

        <label for="ataque">Ataque:</label>
        <input type="range" id="ataque" name="ataque" required value={formData.ataque} onChange={handlechange}/>

        <label for="defensa">Defensa:</label>
        <input type="range" id="defensa" name="defensa" required value={formData.defensa} onChange={handlechange}/>

        <label for="velocidad">Velocidad:</label>
        <input type="range" id="velocidad" name="velocidad" required value={formData.velocidad} onChange={handlechange}/>
        </div>
          

        <button type='submit' onSubmit={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
               Crear Nuevo Pokemon
           </button>
         
      
      </form>

            </div>

          </div>
        </div>
    )
}
export default CreateForm;