import styles from './ButtonsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsTypes, filterByAttackMaxMin, filterByAttackMinMax, filterPokemonFromApi, filterPokemonFromDb, getPokemonsTypes, ordenarDefault, orderA_Z, orderZ_A,  } from '../../../Redux/Actions'
//import { fechpokemonstype } from '../../../redux/actions';

const ButtonsContainer = () => {

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  
  useEffect(() => {
    let tipos = [];
   fetch('http://localhost:3001/types?limit=24')
      .then(response => response.json())
      .then(response => {
        response.forEach(item => {
          tipos.push(item.name);
        });
        dispatch(getPokemonsTypes(tipos))
      })
      .catch(err => console.error(err))
   }, [dispatch])
  
  const handleFilterButton = (event) => {
    const filterValueOfButton = event.target.value;
    dispatch(fetchPokemonsTypes(filterValueOfButton))
  };

  // Filtrado
  const handleOrderA_Z = () => {
    dispatch(orderA_Z())
  }

  const handleOrderZ_A = ()=> {
    dispatch(orderZ_A())
  }

  const handleOrderDefault = () => {
    dispatch(ordenarDefault())
  }

  const handleFilterByAttackMinMax = () => {
    dispatch(filterByAttackMinMax());
  }

  const handleFilterByAttackMaxMin = () => {
    dispatch(filterByAttackMaxMin())
  }

  const handleFilterOrigenApi=()=>{
    fetch('http://localhost:3001/pokemons')
    .then(response => response.json())
    .then(response => dispatch(filterPokemonFromApi(response)))
    .catch(err => console.error(err))
      
  }
  const handleFilterCreatedPokemons=()=>{
    fetch('http://localhost:3001/pokemonsdb')
    .then(response => response.json())
    .then(response => dispatch(filterPokemonFromDb(response)))
    .catch(err => console.error(err))
      
  }

  return (
    <>
     <div className={styles.ButtonsContainer}>
          <button onClick={handleOrderDefault} value="default">Default</button>
          <button onClick={handleOrderA_Z} value="A">A-Z</button>
          <button onClick={handleOrderZ_A} value="Z">Z-A</button>
          <button onClick={handleFilterByAttackMaxMin} value="MAX">Attack +/- </button>
          <button onClick={handleFilterByAttackMinMax} value="MIN">Attack -/+ </button>
          <button onClick={handleFilterOrigenApi} value="API">PokeApi</button>
          <button onClick={handleFilterCreatedPokemons} value="DB">User created</button>
     {types.map(type=>{
      return(
        <button key={type} value={type} onClick={handleFilterButton}>{type} </button>
      )
       
     })}
      


     </div>
      
    </>

  )
}

export default ButtonsContainer;