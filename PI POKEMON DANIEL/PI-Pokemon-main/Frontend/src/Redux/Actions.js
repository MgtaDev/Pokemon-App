import axios from "axios"
import {ADD_POKEMONS, SET_ORDER_A_Z, SET_ORDER_Z_A, FILTER_BY_ATTACK, SHOW_API_POKEMONS, SHOW_DB_POKEMONS } from '../Redux/Types'

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
  export const filterByAttack = () => ({
    type: FILTER_BY_ATTACK
  });
  export const filterPokemonFromApi = (payload) => ({
    type:SHOW_API_POKEMONS,
    payload
  });
  export const filterPokemonFromDb = (payload) => ({
    type:SHOW_DB_POKEMONS,
    payload
  });