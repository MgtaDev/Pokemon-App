import style from './CreateForm.module.css'
import Photo from '../../assets/Laboratorio Form.webp'
import Logo from '../../assets//PokemonLogo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import validate from './Validate'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
  const  types = useSelector(state=>state.types)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: ''
  });

  const [errors, setErrors] = useState({});

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:  event.target.value
    })
    setErrors(
      validate({
        ...formData,
        [event.target.name]: event.target.value,
      }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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
  fetch('http://localhost:3001/pokemons', {method: 'POST',
  headers: { 'Content-Type': 'application/json',},
  body: JSON.stringify(dataToCreatePokemon),
  })
    .then((response) => response.json())
    .then((data) => {
      window.alert('Pokemon Creado', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    navigate('/home')
  }

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
        <label html="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder='Ingresa un nombre' value={formData.nombre} onChange={handlechange}/>
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="altura">Altura:</label>
        <input type="number" id="altura" name="altura" placeholder='Ingresa una altura'  value={formData.altura} onChange={handlechange}/>
        {errors.name && <p>{errors.height}</p>}

        <label htmlFor="peso">Peso:</label>
        <input type="number" id="peso" name="peso" placeholder='Ingresa el peso' value={formData.peso} onChange={handlechange}/>
        {errors.name && <p>{errors.weight}</p>}

        <label htmlFor="tipos">Tipo 1</label>
        <select name="tipos" required value={formData.tipos} onChange={handlechange}>
          {
          types.map(type => {
            return (<option key={type} value={type}>{type}</option>)
          })
          }
        </select>
        {errors.name && <p>{errors.types}</p>}

        <br />
        <label htmlFor="tipos">Tipo 2</label>
        <select name="tipos" required value={formData.tipos} onChange={handlechange}>
          {
          types.map(type => {
            return (<option key={type} value={type}>{type}</option>)
          })
          }
        </select>
        {errors.name && <p>{errors.types}</p>}

        </div>

        <div className={style.RightContent}>
        <label htmlFor="vida">Vida:</label>
        <input type="text" id="vida" name="vida" value={formData.vida} onChange={handlechange} placeholder='Ingresa un valor'/>
        {errors.name && <p>{errors.hp}</p>}
          

        <label htmlFor="ataque">Ataque:</label>
        <input type="text" id="ataque" name="ataque" value={formData.ataque} onChange={handlechange} placeholder='Ingresa una valor'/>
        {errors.name && <p>{errors.attack}</p>}


        <label htmlFor="defensa">Defensa:</label>
        <input type="text" id="defensa" name="defensa" value={formData.defensa} onChange={handlechange} placeholder='Ingresa un valor'/>
        {errors.name && <p>{errors.defense}</p>}


        <label htmlFor="velocidad">Velocidad:</label>
        <input type="text" id="velocidad" name="velocidad" value={formData.velocidad} onChange={handlechange} placeholder='Ingresa una valor'/>
        {errors.name && <p>{errors.speed}</p>}
       
        </div>
          

        <button type='submit' onSubmit={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
               Crear Pokemon
           </button>
         
      
      </form>

            </div>

          </div>
        </div>
    )
}
export default CreateForm;