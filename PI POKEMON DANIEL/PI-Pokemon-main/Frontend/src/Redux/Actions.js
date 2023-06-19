import axios from "axios"
import { SET_POKEMONS_TYPE_RENDER, GET_POKEMONS_TYPE , ADD_POKEMONS, SET_ORDER_A_Z, SET_ORDER_Z_A, FILTER_BY_ATTACK_MIN_MAX,FILTER_BY_ATTACK_MAX_MIN, SHOW_API_POKEMONS, SHOW_DB_POKEMONS } from '../Redux/Types'
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

  export const filterByAttackMinMax = () => ({
    type: FILTER_BY_ATTACK_MIN_MAX
  });

  export const filterByAttackMaxMin = () => ({
    type: FILTER_BY_ATTACK_MAX_MIN
  });


  export const filterPokemonFromApi = (payload) => ({
    type:SHOW_API_POKEMONS,
    payload: payload
  });

  export const filterPokemonFromDb = (payload) => ({
    type:SHOW_DB_POKEMONS,
    payload: payload
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