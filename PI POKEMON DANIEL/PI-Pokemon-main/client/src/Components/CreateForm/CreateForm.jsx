import { useState } from 'react';
import style from './CreateForm.module.css'
import validation from '../formValidations'
import { Link } from 'react-router-dom'

const CreateForm = ()=> {
    const [newPokemon,setNewPokemon] = useState({
        Nombre: undefined,
        Imagen: undefined,
        Vida: undefined,
        Ataque: undefined,
        Defensa: undefined,
        Velocidad: undefined,
        Altura: undefined,
        Peso: undefined,
        Tipos: undefined,
    })

    const [errors, setErrors] = useState({});
    
    const handleChange = (event) => {
        setErrors(validation(...setNewPokemon,{[event.target.name]: event.target.value }))
        setNewPokemon({ ...newPokemon,[event.target.name]: event.target.value,})
    };

    return(
        <div className={style.container}>
          <form>
          <label htmlFor="nombre">Nombre: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Nombre}
          type="text"
          name="nombre"
          />
        {  
        //Ejemplo de manejo de errores
        // errors.e1 ? (<p>{errors.e1}</p>)
        // : errors.e2 ? (<p>{errors.e2}</p>) 
        // : (<p>{errors.e3}</p>)
        }
           <label htmlFor="imagen">Imagen: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Imagen}
          type='image'
          name="imagen"
          alt={newPokemon.name}
          />
           {
            
        }
           <label htmlFor="vida">Vida: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Vida}
          type='range'
          name="email"
          />
           {
            
        }
           <label htmlFor="ataque">Ataque: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Ataque}
          type='range'
          name="ataque"
          />
           {
            
        }
           <label htmlFor="defemsa">Defensa: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Defensa}
          type='range'
          name="defemsa"
          />
           {
            
        }
           <label htmlFor="velocidad">Velocidad: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Velocidad}
          type="range"
          name="velocidad"
          />
           {
            
        }
           <label htmlFor="altura">Altura: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Altura}
          type='number'
          name="altura"
          />
           {
            
        }
           <label htmlFor="peso">Peso: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Peso}
          type='number'
          name="peso"
          />
           {
            
        }
           <label htmlFor="tipos">Tipos: </label>
          <input
          onChange={handleChange}
          value={newPokemon.Tipos}
          type='checkbox'
          name="tipos"
          />
           {
            
        }
          
          <Link>
          <button onClick={()=>setNewPokemon}>Crear Pokemon</button>
          </Link>
          </form> 
        </div>
    )
    }
export default CreateForm;