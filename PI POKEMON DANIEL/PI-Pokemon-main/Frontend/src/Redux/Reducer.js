// Importamos nuestros types para usarlos en el reducer
import { ADD_POKEMONS, SET_ORDER_A_Z, SET_ORDER_Z_A, FILTER_BY_ATTACK, SET_LOADING } from './Types'

//Estado inicial de nuestro reducer
const initialstate = {
    pokemons: [],
    loading: false,
    types:[]
  }

// Creamos a nuestro reducer
const Reducer = (state = initialstate, action) => {
switch (action.type) {
    //Con este type que nos trae la funcion de nuestra action le decimos al reducer lo que hara
    //con la info que tiene en nuestro estado global
    case ADD_POKEMONS:
    return{
        ...state,
        pokemons: action.payload
    }
    case SET_ORDER_A_Z:
        return{
            ...state,
            pokemons: state.pokemons.slice().sort((a, b) => a.name.localeCompare(b.name))
        }
    case SET_ORDER_Z_A:
        return {
             ...state,
             pokemons: state.pokemons.slice().sort((a, b) => b.name.localeCompare(a.name))
            }
    case FILTER_BY_ATTACK:
        return{
            ...state,
            pokemons: state.pokemons.slice().sort((a, b) => b.attack - a.attack)
        }
    
    case SET_LOADING:

            return {
                 ...state, loading: action.payload }
                 ;
    
    default:
        return{
            ...state
        }
}
}
export default Reducer;