import { useParams } from 'react-router-dom';
import style from './Detail.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});


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
       
            <div className={style.Img}>
            <img src={pokemon.image} alt="" />  
            </div>

            <div className={style.Content}>
            
            {/* conditional chaining */}
            <h1>{pokemon?.name}</h1>
            <h4>Hp:{pokemon?.hp}❤️‍🔥</h4> 
            <h4>Attack:{pokemon?.attack}⚔️</h4> 
            <h4>Defense:{pokemon?.defense}🛡️ </h4> 
            <h4>Speed:{pokemon?.speed}⚡</h4>
            <h4>Height:{pokemon?.height}M🧬</h4>
            <h4>Weight:{pokemon?.weight}Kg⚖️ </h4>
              
          
            </div>

          </div>
        </div>
    )
}
export default Detail;