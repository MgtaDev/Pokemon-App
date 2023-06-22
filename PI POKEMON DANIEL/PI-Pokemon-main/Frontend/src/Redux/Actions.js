import axios from "axios"
import {FILTER_BY_HIGH_SPEED, FILTER_BY_MIN_SPEED ,FILTER_BY_MIN_HP, FILTER_BY_HIGH_HP , ORDER_DEFAULT ,GET_POKEMON_PER_NAME ,SET_POKEMONS_TYPE_RENDER, GET_POKEMONS_TYPE , ADD_POKEMONS, SET_ORDER_A_Z, SET_ORDER_Z_A, FILTER_BY_ATTACK_MIN_MAX,FILTER_BY_ATTACK_MAX_MIN, SHOW_API_POKEMONS, SHOW_DB_POKEMONS, SHOW_ALL_POKEMONS, FILTER_BY_MIN_WEIGHT, FILTER_BY_HIGH_WEIGHT, FILTER_BY_MIN_DEFENSE, FILTER_BY_HIGH_DEFENSE } from '../Redux/Types'
import { getPokemonsType, getPokemonsDetail } from "./api"

export const addPokemons = ()=> {
    const myUrl = 'http://localhost:3001/pokemons'
    return async (dispatch)=> {
    try {
        const { data } = await axios.get(myUrl)
        if(!data) return ('No hay pokemones en estos momentos')
        return dispatch({
            type: ADD_POKEMONS,
            payload: data
        })


    } catch (error) {
       console.log('Error inesperado')
    }
    }
    }

  export const orderA_Z=()=>({
    type:SET_ORDER_A_Z,
    
  })
  
  export const orderZ_A=()=>({
    type:SET_ORDER_Z_A,
    
  })

  export const ordenarDefault = () => ({
    type: ORDER_DEFAULT 
  })

  export const filterByAttackMinMax = () => ({
    type: FILTER_BY_ATTACK_MIN_MAX
  });

  export const filterByMinHp = () => ({
    type: FILTER_BY_MIN_HP
  });

  export const filterByHighHp = () => ({
    type: FILTER_BY_HIGH_HP
  });

  export const filterByMinWeight = () => ({
    type: FILTER_BY_MIN_WEIGHT
  });

  export const filterByHighWeight = () => ({
    type: FILTER_BY_HIGH_WEIGHT
  });

  export const filterByMinDefense = () => ({
    type: FILTER_BY_MIN_DEFENSE
  });

  export const filterByHighDefense = () => ({
    type: FILTER_BY_HIGH_DEFENSE
  });

  export const filterByMinSpeed = () => ({
    type: FILTER_BY_MIN_SPEED
  });

  export const filterByHighSpeed = () => ({
    type: FILTER_BY_HIGH_SPEED
  });


  

  export const filterByAttackMaxMin = () => ({
    type: FILTER_BY_ATTACK_MAX_MIN
  });

  export const filterAllPokemons = (payload) => ({
    type: SHOW_ALL_POKEMONS,
    payload: payload
  })

  export const filterPokemonFromApi = (payload) => ({
    type:SHOW_API_POKEMONS,
    payload
  });

  export const filterPokemonFromDb = (payload) => ({
    type:SHOW_DB_POKEMONS,
    payload
  });

 
export const getPokemonsTypes = (payload) => ({
  type:GET_POKEMONS_TYPE,
  payload: payload
});

export const setPokemosTypeRender=(payload)=>({
  type:SET_POKEMONS_TYPE_RENDER,
  payload
 })




export const fetchPokemonsTypes = (type) => async(dispatch) => {
  try {
    const response = await getPokemonsType(type);
    const pokemons = response.pokemon.map((poke) => poke.pokemon);
    const pokemontypedetails = await Promise.all(pokemons.map(pokeurl => getPokemonsDetail(pokeurl)));
    
    // Crear un array vacío para almacenar los detalles de los Pokemon
    const pokemonsPerType = [];
  
    // Iterar a través de cada objeto Pokemon devuelto por getPokemondetails y agregarlo al array
    pokemontypedetails.forEach((pokemon) => {
      pokemonsPerType.push({
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        height: pokemon.height,
        hp: pokemon.stats[0].base_stat,
        id: pokemon.id,
        image:pokemon.sprites.other.home.front_default,
        name: pokemon.name,
        speed: pokemon.stats[5].base_stat,
        type: pokemon.types.map((type) => type.type.name),
        weight: pokemon.weight,
      });
    });

    dispatch(setPokemosTypeRender(pokemonsPerType));

  } catch (error) {
    console.log(error);
  }
}

export const getPokemonForSearchBar = (nombre) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/pokemons/${nombre}`)
      .then((response) => {
        dispatch({
          type: GET_POKEMON_PER_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        window.alert('Ingrese el nombre de un pokemon existente');
      });
  };
};