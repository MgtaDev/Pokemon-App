// Importamos nuestros types para usarlos en el reducer
import {FILTER_BY_HIGH_DEFENSE,FILTER_BY_MIN_DEFENSE ,FILTER_BY_HIGH_WEIGHT, FILTER_BY_MIN_WEIGHT ,FILTER_BY_HIGH_HP, FILTER_BY_MIN_HP ,SET_POKEMONS_TYPE_RENDER, GET_POKEMONS_TYPE,ADD_POKEMONS, SET_ORDER_A_Z, SET_ORDER_Z_A, FILTER_BY_ATTACK_MIN_MAX, FILTER_BY_ATTACK_MAX_MIN, GET_POKEMON_PER_NAME, ORDER_DEFAULT, SHOW_API_POKEMONS, SHOW_DB_POKEMONS, FILTER_BY_MIN_SPEED, FILTER_BY_HIGH_SPEED} from './Types'

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
    case FILTER_BY_ATTACK_MIN_MAX:
        return{
            ...state,
            pokemons: state.pokemons.slice().sort((a, b) => a.attack - b.attack)
        }
    case FILTER_BY_ATTACK_MAX_MIN:
        return{
            ...state,
            pokemons: state.pokemons.slice().sort((a, b) => b.attack - a.attack)
        }
    case GET_POKEMONS_TYPE:
        return {
             ...state,
              types: action.payload  
        }
  
    case  SET_POKEMONS_TYPE_RENDER:
        return { ...state,  
            pokemons: action.payload  
        };
    case  GET_POKEMON_PER_NAME:
        return{
            ...state,
            pokemons: [action.payload]
        }
    
    case ORDER_DEFAULT:
        return {
            ...state,
            pokemons: state.pokemons.slice().sort((a, b) => a.id - b.id),
          }

    case SHOW_API_POKEMONS:
        return{
            ...state,
            pokemons: action.payload
        }
        
    case SHOW_DB_POKEMONS:
        return{
            ...state,
            pokemons: action.payload
        }


    // EXTRA FILTERS
        case FILTER_BY_MIN_HP:
            return{
              ...state,
              pokemons: state.pokemons.slice().sort((a, b) => a.hp - b.hp)
            }
        case FILTER_BY_HIGH_HP:
            return{
                ...state,
            pokemons: state.pokemons.slice().sort((a, b) => b.hp - a.hp)
            }
        case FILTER_BY_MIN_WEIGHT:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => a.weight - b.weight)
            }
        case FILTER_BY_HIGH_WEIGHT:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => b.weight - a.weight)
            }
        case FILTER_BY_MIN_DEFENSE:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => a.defense - b.defense)
            }
        case FILTER_BY_HIGH_DEFENSE:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => b.defense - a.defense)
            }
        case FILTER_BY_MIN_SPEED:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => a.speed - b.speed)
            }
        case FILTER_BY_HIGH_SPEED:
            return{
                 ...state,
                pokemons: state.pokemons.slice().sort((a, b) => b.speed - a.speed)
            }
            


    default:
        return{
            ...state
        }
}
}
export default Reducer;