import style from './CardsContainer.module.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux'
import { useState } from 'react';
// import { addPokemons } from '../../../Redux/Actions';




const CardsContainer = () => {
    const pokemons = useSelector(state=> state.pokemons);
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage] = useState(12)

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
            currentPokemons.map((pokemon)=> {
                return <Card
                id={pokemon.id}
                img={pokemon.img}
                name={pokemon.name}
                types={pokemon.types}
                />
            })
        }
        {
            currentPokemons.length > 1 
            ? <div className={style.pageButtons}>
            <button  onClick={handlePrevPage} disabled={currentPage === 1}>Atras</button>
            <button  onClick={handleNextPage} disabled={lastPokemon >= pokemons.length}>Adelante</button>
             </div>
            : ''
        }
        </div>
    )
}
export default CardsContainer
