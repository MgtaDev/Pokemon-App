import style from './CreateForm.module.css'
import Photo from '../../assets/gengarLoadingGif.gif'
import Logo from '../../assets//PokemonLogo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const CreateForm = () => {
  const  types = useSelector(state=>state.types)
  const [formData, setFormData] = useState({
    nombre: '',
    imagen: '',
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
  const expresiones = {
    numeros: /^\d{1,3}$/, 
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, 
    imagen:/^.+\.(jpg|png|svg|jfif)$/i
 }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!expresiones.nombre.test(formData.nombre)) {
        alert('El campo nombre  debe contener solo letras con espacios y no ser mayor de de 30 letras.');
        return;
      }
      if (!expresiones.numeros.test(formData.vida)) {
        alert('El campo  debe vida debe tener de 1 a maximo 3 numeros.');
        return;
      }
      if (!expresiones.numeros.test(formData.ataque)) {
        alert('El campo  debe ataque debe tener de 1 a maximo 3 numeros.');
        return;
      }
      if (!expresiones.numeros.test(formData.defensa)) {
        alert('El campo  debe defensa debe tener de 1 a maximo 3 numeros.');
        return;
      }
      if (!expresiones.numeros.test(formData.velocidad)) {
        alert('El campo  debe velocidad debe tener de 1 a maximo 3 numeros.');
        return;
      }
      if (!expresiones.numeros.test(formData.altura)) {
        alert('El campo  debe altura debe tener de 1 a maximo 3 numeros.');
        return;
      }
      if (!expresiones.numeros.test(formData.peso)) {
        alert('El campo  debe peso debe tener de 1 a maximo 3 numeros.');
        return;
      }
      
      if (!formData.nombre || !formData.imagen || !formData.vida || !formData.ataque || !formData.defensa || !formData.velocidad || !formData.altura || !formData.peso || !formData.tipos) {
        alert('Todos los campos son obligatorios');
        return;
      }
    }
  console.log(formData)
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
        <label html="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder='Ingresa un nombre' value={formData.nombre} onChange={handlechange}/>

        <label htmlFor="imagen">Imagen:</label>
        <input type='image' alt='' id="imagen" name="imagen" placeholder='Escoje una imagen' value={formData.imagen} onChange={handlechange}/>
       
        <label htmlFor="altura">Altura:</label>
        <input type="number" id="altura" name="altura" placeholder='Ingresa una altura'  value={formData.altura} onChange={handlechange}/>
       
        <label htmlFor="peso">Peso:</label>
        <input type="number" id="peso" name="peso" placeholder='Ingresa el peso' value={formData.peso} onChange={handlechange}/>

        <label htmlFor="tipos">Tipos:</label>
        <select name="tipos" required value={formData.tipos} onChange={handlechange}>
          {
          types.map(type => {
            return (<option key={type} value={type}>{type}</option>)
          })
          }
        </select>
        </div>

        <div className={style.RightContent}>
        <label htmlFor="vida">Vida:</label>
        <input type="range" id="vida" name="vida" value={formData.vida} onChange={handlechange}/>

        <label htmlFor="ataque">Ataque:</label>
        <input type="range" id="ataque" name="ataque" value={formData.ataque} onChange={handlechange}/>

        <label htmlFor="defensa">Defensa:</label>
        <input type="range" id="defensa" name="defensa" value={formData.defensa} onChange={handlechange}/>

        <label htmlFor="velocidad">Velocidad:</label>
        <input type="range" id="velocidad" name="velocidad" value={formData.velocidad} onChange={handlechange}/>
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