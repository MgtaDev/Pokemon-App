import style from './CreateForm.module.css'
import Photo from '../../assets/Laboratorio Form.webp'
import Oak from '../../assets/Profesor_Oak_LGPE.png'
import validate from './Validate'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPokemonsTypes } from '../../../Redux/Actions'
import swal from 'sweetalert'

const CreateForm = () => {
  const types = useSelector(state => state.types)
  const dispatch = useDispatch()

  useEffect(() => {
    let tipos = [];
    fetch('http://localhost:3001/types')
      .then(response => response.json())
      .then(response => {
        response.forEach(type => {
          tipos.push(type.name);
        });
        dispatch(getPokemonsTypes(tipos))
      })
      .catch(err => console.error(err))
   }, [dispatch])
  const [step, setStep] = useState(0);
  const [isValid, setIsValid] = useState(false);
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
    types: []
  });
  console.log(formData)
  useEffect(() => {
    const requiredFields = ['name', 'image', 'hp', 'attack', 'defense', 'speed', 'height', 'weight'];
    const isFormValid = requiredFields.every(field => formData[field].trim().length > 0);
    setIsValid(isFormValid);
  }, [formData]);

  const [errors, setErrors] = useState({});

  const handlechange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    setErrors(
      validate({
        ...formData,
        [event.target.name]: event.target.value,
      }))
  }

  const handleTypesChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setFormData(prevState => ({
        ...prevState,
        types: [...prevState.types, value]
      }))
    } else {
      setFormData(prevState => ({
        ...prevState,
        types: prevState.types.filter(t => t !== value)
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokeData = {
      name: formData.name,
      image: formData.image,
      hp: formData.hp,
      attack: formData.attack,
      defense: formData.defense,
      speed: formData.speed,
      height: formData.height,
      weight: formData.weight,
      types: formData.types
    }
    fetch('http://localhost:3001/pokemons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokeData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Pokemon created successfully', data);
      swal('POKEMON CREATED','The pokemon was created succesfully!', 'success' );
    })
    .catch((error) => {
      swal('ERROR' ,'Error creating pokemon', 'error');
      console.log('Fetch error:', error.message);
    });
  navigate('/home');
  };

  
  const handleNext = () => {
    setStep(step + 1)
  }
  
  const handlePrevious = () => {
    setStep(step - 1)
  }

  const navigateHome = () => {
    navigate('/home')
  }

  return (
    <div className={style.Form}>
      <button onClick={navigateHome}>Return home</button>

      <img src={Photo} alt="" />
      <img src={Oak} alt="" />

      <div className={style.Content}>
      {step === 0 && (
        <form onSubmit={handleSubmit}>
          <h2>Create your Pokemon</h2>
          <div className={style.Content}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handlechange} />
            {errors.name && <p>{errors.name}</p>}

            <label htmlFor="image">Image</label>
            <input type="text" id="img" name="image" value={formData.image} onChange={handlechange} />
            {errors.image && <p>{errors.image}</p>}

            <label htmlFor="description">Hp</label>
            <input type="number" id="hp" name="hp" value={formData.hp} onChange={handlechange} />
            {errors.hp && <p>{errors.hp}</p>}

            <label htmlFor="platforms">Attack</label>
            <input type="number" id="attack" name="attack" value={formData.attack} onChange={handlechange} />
            {errors.attack && <p>{errors.attack}</p>}

            <label htmlFor="release">Defense</label>
            <input type="number" id="defense" name="defense" value={formData.defense} onChange={handlechange} />
            {errors.defense && <p>{errors.defense}</p>}

            <label htmlFor="ratings">Speed</label>
            <input type="number" name="speed" value={formData.speed} onChange={handlechange} />
            {errors.speed && <p>{errors.speed}</p>}

            <label htmlFor="ratings">Weight</label>
            <input type="number" name="weight" value={formData.weight} onChange={handlechange} />
            {errors.weight && <p>{errors.weight}</p>}

            <label htmlFor="ratings">Height</label>
            <input type="number" name="height" value={formData.height} onChange={handlechange} />
            {errors.height && <p>{errors.height}</p>}

            <button
              className={!isValid ? style.off : style.button}
              type="submit"
              disabled={!isValid}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </form>
      )}

      {step === 1 && (
        <form onSubmit={handleSubmit} className={style.form2}>
          <h2>Select up to 2 Types</h2>

          {types.map((type) => (
            <label key={type} value={type} className={style.genres}>
              <input
                type="checkbox"
                name={type}
                value={type}
                onChange={handleTypesChange}
                checked={formData.types.includes(type)}
              />
              {type}
            </label>
          ))}

          {formData.types.length > 2 && <p> ⚠️ You can only select up to types</p>}

          <div className={style.buttons}>
            <button onClick={handlePrevious}>Previous</button>
            <button type="submit" disabled={formData.types.length > 2} onClick={handleSubmit}>
              Create Game
            </button>
          </div>
        </form>
      )}
      </div>
    </div>
  )
}

export default CreateForm;