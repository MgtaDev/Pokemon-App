import styles from './ButtonsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonsTypes, getPokemonsTypes,  } from '../../../Redux/Actions'
//import { fechpokemonstype } from '../../../redux/actions';

const ButtonsContainer = () => {

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  
  console.log(types)

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

  return (
    <>
     <div className={styles.ButtonsContainer}>
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