import style from './Home.module.css'
import ButtonsContainer from '../Components/ButtonsContainer/ButtonsContainer.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemons } from '../../Redux/Actions'
import Pagination  from "../Pagination/pagination";
import Loading from '../Loading/Loading'
import NavBar from '../Components/NavBar/NavBar'

const Home = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)
    
    useEffect(()=>{
        dispatch(addPokemons())
    }, [dispatch])
    

    return(
        <div className={style.Home}>
            {
                pokemons.length < 1
                ?<><NavBar /><Loading /></>
                : <><NavBar /><ButtonsContainer /><Pagination /></> 
            }
            {/* <ButtonsContainer/>
            <Pagination/> */}
        </div>
    )
}
export default Home;