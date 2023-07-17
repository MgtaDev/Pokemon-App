import { useNavigate, useParams } from 'react-router-dom';
import style from './Detail.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  const active = {
    borderBottom: '5px solid rgb(162, 1, 168)',
    color: "#000"
  }

const unactive = {
    border: "none",
    color: 'rgba(177, 176, 176,90)'
  }

const [navM1, setNavM1] = useState(true)
const [navM2, setNavM2] = useState(false)
const [navM3, setNavM3] = useState(false)
const [navStyles, setNavStyles] = useState([active, unactive, unactive]);
const navigate = useNavigate()

const navigateHome = () => {
    navigate('/home')
  }

const handleNav = () => {
    setNavM1(true)
    setNavM2(false)
    setNavM3(false)
    setNavStyles([active, unactive, unactive])
}
const handleNav2 = () => {
    setNavM1(false)
    setNavM2(true)
    setNavM3(false)
    setNavStyles([unactive, active, unactive])
}




  useEffect(() => {
      axios(`http://localhost:3001/pokemons/${id}`)
     .then((response) => response.data)
     .then((data) => {
       if (data.id) {
         setPokemon(data);
       } else {
         window.alert("No existe ese pokemon.");
       }
     })
     .catch((err) => {
       window.alert("No hay pokemon con ese nombre.");
     });
 }, [id]); 

    return(
        <div className={style.Detail}>
          <div className={style.Card}>
       
            <div className={style.Left}>
            <img src={pokemon.image} alt="" />  
            </div>

            <div className={style.Right}>
            <h1>{pokemon?.name}</h1>
            <nav className={style.Nav}>
              <ul>
                <li style={navStyles[0]} onClick={handleNav}>About</li>
                <li style={navStyles[1]} onClick={handleNav2}>Base Stats</li>
              </ul>
            </nav>
            {
            navM1 ? 
            <>
            <h3>Description</h3>
            <p style={{color:'rgb(84, 84, 84)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={style.bottomDetail}>
            
            <div className={style.stats}>
            <h4 style={{color:'black'}}>Combat</h4>
            <p>Abilities:</p>
            <ul>
            <li>{pokemon.hp}</li>
            <li>{pokemon.hp}</li>
            </ul>
            <p>Moves:</p>
            <ul>
            <li>{pokemon.hp}</li>
            <li>{pokemon.hp}</li>
            </ul>
            </div>

            <div className={style.stats}>
            <h4 style={{color:'black'}}>Breading</h4>
            <p>Species: {pokemon.hp}</p>
            <p>Habitat: {pokemon.hp}</p>
            <p>Growth Rate: {pokemon.hp}</p>
            <p>Location area encounters:</p>
            <ul style={{position:'relative', left: '0', bottom:'2%'}}>
            <li>{pokemon.hp}</li>
            <li>{pokemon.hp}</li>
            </ul>
            </div>
          
            </div>
            <div className={style.button}>
            <button className={style.button} onClick={navigateHome}>
              Back
            </button>
            </div>
            </>
            : ''
        }
          {
            navM2 ?
            <>
            <div className={style.top}>
            <label>Hp</label>
            <p>{pokemon.hp}</p>
            <input type='range' />

            <label>Attack</label>
            <p>{pokemon.attack}</p>
            <input type='range' />

            <label>Defense</label>
            <p>{pokemon.defense}</p>
            <input type='range' />

            <label>Speed</label>
            <p>{pokemon.speed}</p>
            <input type='range' />
            </div>


            <div className={style.bottomDetail}>
            <div className={style.row1}>
              <p className={style.p}><i></i>{pokemon.weight}Hp</p>
              <span className={style.p}>Weight</span>

              <p className={style.span}><i></i>{pokemon.happiness}Hp</p>
              <span className={style.p}>Hapinnes</span>
              </div>
          
            <div className={style.row1}>

              <p className={style.span}><i></i>{pokemon.weight}Hp</p>
              <span className={style.p}>Weight</span>

              <p className={style.p}><i></i>{pokemon.happiness}Hp</p>
              <span className={style.span}>Hapinnes</span>            
              </div>
            </div>

            
            <div className={style.button}>
            <button className={style.button} onClick={navigateHome}>
              Back
            </button>
            </div>
            </> 
            : ''
        }
          {
            navM3 ? 
            <p>Hola 👋, soy Daniel Passantino ✔️ Soy un programador Full Stack jr! <br />Me especializo en Frontend y Responsive Web Design

            📚 Actualmente estoy estudiando Ingles, Frances, React Native y Next.js </p>
            : ''
        }
            
           
            </div>

          </div>
        </div>
    )
}
export default Detail;