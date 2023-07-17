import styles from './ButtonsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { filterByHighDefense, filterByMinDefense ,filterByHighWeight, filterByMinWeight,filterByHighHp, filterByMinHp , filterByAttackMaxMin, filterByAttackMinMax, getPokemonsTypes, ordenarDefault, orderA_Z, orderZ_A, filterByHighSpeed, filterByMinSpeed, fetchPokemonsTypes, addPokemons, addPokemonsDb, addApiPokemons} from '../../../Redux/Actions'

  const ButtonsContainer = () => {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  
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
  
  // Filtrado
  const handleFiltrosChange = (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case 'orderAZ':
        dispatch(orderA_Z());
        break;
      case 'orderZA':
        dispatch(orderZ_A());
        break;
      case 'attackMinMax':
        dispatch(filterByAttackMinMax());
        break;
      case 'attackMaxMin':
        dispatch(filterByAttackMaxMin());
        break;
      case 'highHP':
        dispatch(filterByHighHp());
        break;
      case 'minHP':
        dispatch(filterByMinHp());
        break;
      case 'highWeight':
        dispatch(filterByHighWeight());
        break;
      case 'minWeight':
        dispatch(filterByMinWeight());
        break;
      case 'highDefense':
        dispatch(filterByHighDefense());
        break;
      case 'minDefense':
        dispatch(filterByMinDefense());
        break;
      case 'highSpeed':
        dispatch(filterByHighSpeed());
        break;
      case 'minSpeed':
        dispatch(filterByMinSpeed());
        break;
      
      case 'default' :
        dispatch(ordenarDefault())
        break;

      case 'all' :
        dispatch(addPokemons())
        break;
      
      case 'api' :
        dispatch(addApiPokemons())
        break; 

      case 'created' :
        dispatch(addPokemonsDb())
        break;
  

      default:
        dispatch(ordenarDefault());
    }
  };

  const handleTypesChange = (event) => {
    console.log(event.target.value)
    const typeToFilter = event.target.value;
    dispatch(fetchPokemonsTypes(typeToFilter))
}


  
  return (
    <div className={styles.ButtonsContainer}>
      <select value="tipos" name="tipos" id="tipos" onChange={handleTypesChange}>
        <option value="">Tipos</option>
      {types.map(type=>{
      return(
        <option key={type} value={type}>{type}</option>
      )
     })}
      </select>

      <select value="filtros" name="filtros" id="filtros" onChange={handleFiltrosChange}>
        <option value="">Filtros</option>
        <option value="default">Default</option>
        <option value="orderAZ">A-Z</option>
        <option value="orderZA">Z-A</option>
        <option value="attackMinMax">MAX ATTACK</option>
        <option value="attackMaxMin">MIX ATTACK</option>
        <option value="highHP">MAX HP</option>
        <option value="minHP">MIN HP</option>
        <option value="highWeight">MAX WEIGHT</option>
        <option value="minWeight">MIN WEIGHT</option>
        <option value="highDefense">MAX DEFENSE</option>
        <option value="minDefense">MIN DEFENSE</option>
        <option value="highSpeed">MAX SPEED</option>
        <option value="minSpeed">MIN SPEED</option>
      </select>

      <select value="origen" name="origen" id="origen" onChange={handleFiltrosChange}>
      <option value="">Origen</option>
      <option value="all">All</option>
      <option value="api">Api</option>
      <option value="created">Created</option>
      </select>
    </div>
  
  )
}
export default ButtonsContainer;