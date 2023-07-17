import { useState } from "react";
import { useSelector } from "react-redux";
import style from './pagination.module.css'
import Loading from "../Loading/Loading";
import Card from "../Components/Card/Card";

const Pagination = () => {

const pokemons = useSelector( state => state.pokemons)
const [currentPage, setCurrentPage] = useState(1)
const [selectedPage, setSelectedPage] = useState(1)
const [itemsPerPage] = useState(12)
const lastPokemon = currentPage * itemsPerPage;
const firtsPokemon = lastPokemon - itemsPerPage
const currentPokemons = pokemons.slice(firtsPokemon,lastPokemon)
console.log(currentPokemons)
const generatePageNumbers = () => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemons.length / itemsPerPage); i++) {
    pageNumbers.push({number:i, selected: i === selectedPage});
  }
  return pageNumbers;
};

const handlePrevPage = () => {
    setCurrentPage(currentPage - 1 );
    setSelectedPage(selectedPage - 1);
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1 );
    setSelectedPage(selectedPage + 1);
  };
  
  
const pageNumbers = generatePageNumbers();

    return(
        
        <div className={style.Pagination}>
            <div className={style.pageButtons}>
              <button className={style.selected} onClick={handlePrevPage} disabled={currentPage === 1}>
                {"<"}
              </button>
              {pageNumbers.map((page) => (
                
                <button
                key={page.number}
                onClick={() => {
                setCurrentPage(page.number);
                setSelectedPage(page.number);
                }}
                className={`${style.pageButton} ${
                page.selected ? style.selected : style.unselected
                } ${page.number === selectedPage ? style.selected  :''}`}
                >
                {page.number}
                </button>
            ))}
              <button
                className={style.selected}
                onClick={handleNextPage}
                disabled={lastPokemon >= pokemons.length}
              >
                {">"}
              </button>
            </div>

            <div className={style.cardsContainer}>

            {!currentPokemons ?
                <Loading />

              : currentPokemons.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  img={pokemon.image}
                  name={pokemon.name}
                  type={pokemon.type}
                  weight={pokemon.weight}
                  height={pokemon.height}
                /> 
             ))
          }

            </div>
            {
              pokemons.length !== 1 
              ?
              <div className={style.pageButtons}>
              <button className={style.selected} onClick={handlePrevPage} disabled={currentPage === 1}>
                {"<"}
              </button>
              {pageNumbers.map((page) => (
                
                <button
                key={page.number}
                onClick={() => {
                setCurrentPage(page.number);
                setSelectedPage(page.number);
                }}
                className={`${style.pageButton} ${
                page.selected ? style.selected : style.unselected
                } ${page.number === selectedPage ? style.selected  :''}`}
                >
                {page.number}
                </button>
            ))}
              <button
                className={style.selected}
                onClick={handleNextPage}
                disabled={lastPokemon >= pokemons.length}
              >
                {">"}
              </button>
              </div>
              : ''
            }
          
       </div>
    )
}
export default Pagination;