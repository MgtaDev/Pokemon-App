import style from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { Loading } from '../../index'
import { orderZ_A, orderA_Z, filterByAttackMaxMin, filterByAttackMinMax} from '../../../Redux/Actions'

const CardsContainer = () => {
  const pokemons = useSelector(state=> state.pokemons);

  //Empaginado
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const lastPokemon = currentPage * itemsPerPage;
  const firtsPokemon = lastPokemon - itemsPerPage
  const currentPokemons = pokemons.slice(firtsPokemon,lastPokemon)
  console.log(pokemons)
  
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  // Filtrado
  const dispatch = useDispatch()
  const handleOrderA_Z = () => {
    dispatch(orderA_Z())
  }

  const handleOrderZ_A = ()=> {
    dispatch(orderZ_A())
  }

  const handleFilterByAttackMinMax = () => {
    dispatch(filterByAttackMinMax());
  }

  const handleFilterByAttackMaxMin = () => {
    dispatch(filterByAttackMaxMin())
  }
  
    
    
    return(
      

        <div className={style.CardsContainer}>
          <h2>Filtros:</h2> <span>Filtros:</span>
          <div className={style.filterButtons}>
          <button value="default">Default</button>
          <button onClick={handleOrderA_Z} value="A">A-Z</button>
          <button onClick={handleOrderZ_A} value="Z">Z-A</button>
          <button onClick={handleFilterByAttackMaxMin} value="MAX">Attack +/- </button>
          <button onClick={handleFilterByAttackMinMax} value="MIN">Attack -/+ </button>
            </div>

          <div style={{position: 'relative', left:'19%',}} className={style.filterButtons}>
          <button value="ALL">All</button> 
          <button Change={handleOrderA_Z} value="API">Origin</button>
          <button value="DB">User created</button>
          </div>
        {
            currentPokemons.length 
            ? currentPokemons.map((pokemon)=> {
                return <Card
                key={pokemon.id}
                id={pokemon.id}
                img={pokemon.image}
                name={pokemon.name}
                types={pokemon.types}
                />
            })
            :<Loading/>
        }

        { 
        currentPokemons.length ?
        <div className={style.pageButtons}>
        <button  onClick={handlePrevPage} disabled={currentPage === 1}> ⬅️ </button>
        <button  onClick={handleNextPage} disabled={lastPokemon >= pokemons.length}> ➡️ </button>
        </div> : null
        }
          
        
        </div>
    )
}
export default CardsContainer
