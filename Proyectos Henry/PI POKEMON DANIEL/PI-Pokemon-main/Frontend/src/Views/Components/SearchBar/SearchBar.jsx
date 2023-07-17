import { useState } from 'react'
import style from './SearchBar.module.css'
import { getPokemonForSearchBar } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [pokemonSearched, setPokemonSearched] = useState(' ')
    console.log(pokemonSearched)

    const handleInputChange = (event) => {
        setPokemonSearched(event.target.value)
    }

    const dispatchSearchFunction = () => {
        const pokemonName = pokemonSearched.trim().toLowerCase();
        dispatch(getPokemonForSearchBar(pokemonName))
    }

    return(
        <div className={style.searchBar}>
            <input onChange={handleInputChange}type="search" name="search" value={pokemonSearched} placeholder='Busca tu pokemon...' />
            <button onClick={dispatchSearchFunction}>🔍</button>
        </div>
    )
}
export default SearchBar;