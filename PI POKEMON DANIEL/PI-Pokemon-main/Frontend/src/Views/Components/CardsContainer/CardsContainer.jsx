import style from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { Loading } from '../../index'

  const CardsContainer = () => {
  const pokemons = useSelector(state=> state.pokemons);

  //Empaginado
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const lastPokemon = currentPage * itemsPerPage;
  const firtsPokemon = lastPokemon - itemsPerPage
  const currentPokemons = pokemons.slice(firtsPokemon,lastPokemon)
  
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
    
    return(
      

        <div className={style.CardsContainer}>
          
        {
            currentPokemons.length 
            ? currentPokemons.map((pokemon)=> {
                return <Card
                key={pokemon.id}
                id={pokemon.id}
                img={pokemon.image}
                name={pokemon.name}
                type={pokemon.type}
                />
            })
            :<Loading/>
        }

        { 
        currentPokemons.length ?
        <div className={style.pageButtons}>
        <button  onClick={handlePrevPage} disabled={currentPage === 1}> ➤</button>
        <button  onClick={handleNextPage} disabled={lastPokemon >= pokemons.length}>➤</button>
        </div> : null
        }
          
        
        </div>
    )
}

export default CardsContainer
