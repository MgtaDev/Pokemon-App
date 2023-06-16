import style from './Home.module.css'
import SearchBar from '../Components/SearchBar/SearchBar.jsx'
import PokemonLogo from '../assets/PokemonLogo.png'
import ButtonsContainer from '../Components/ButtonsContainer/ButtonsContainer.jsx'
import CardsContainer from '../Components/CardsContainer/CardsContainer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPokemons } from '../../Redux/Actions'

const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(addPokemons())
    }, [dispatch])
    
    const onSearch = (id) => {
        //Aqui traeremos la funcion de la store para obtnere
        //pokemones por id:
        dispatch()
    }

    return(
        <div className={style.Home}>
            <img src={PokemonLogo} alt="img" />
            <SearchBar onSearch={onSearch}/>
            <ButtonsContainer/>
            <CardsContainer/>
        </div>
    )
}
export default Home;