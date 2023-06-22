import styles from './ButtonsContainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterByHighDefense, filterByMinDefense ,filterByHighWeight, filterByMinWeight,filterByHighHp, filterByMinHp ,fetchPokemonsTypes, filterByAttackMaxMin, filterByAttackMinMax, filterPokemonFromApi, filterPokemonFromDb, getPokemonsTypes, ordenarDefault, orderA_Z, orderZ_A, filterByHighSpeed, filterByMinSpeed,  } from '../../../Redux/Actions'
//import { fechpokemonstype } from '../../../redux/actions';

const ButtonsContainer = () => {

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);

  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  const [showMenu2, setShowMenu2] = useState(false);
  function toggleMenu2() {
    setShowMenu2(!showMenu2);
  }
  const [showMenu3, setShowMenu3] = useState(false);
  function toggleMenu3() {
    setShowMenu3(!showMenu3);

  }
  
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

  const handleFilterByHighHp = () => {
    dispatch(filterByHighHp());
  }

  const handleFilterByMinHp = () => {
    dispatch(filterByMinHp())
  }

  const handleFilterByHighWeight = () => {
    dispatch(filterByHighWeight());
  }

  const handleFilterByMinWeight = () => {
    dispatch(filterByMinWeight())
  }

  const handleFilterByHighDefense = () => {
    dispatch(filterByHighDefense());
  }

  const handleFilterByMinDefense = () => {
    dispatch(filterByMinDefense())
  }

  const handleFilterByHighSpeed = () => {
    dispatch(filterByHighSpeed());
  }

  const handleFilterByMinSpeed = () => {
    dispatch(filterByMinSpeed())
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
     <div className={styles.ButtonsContainer}>
    {/* Filtros basicos */}
       {showMenu?
    <div>
      <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white',color: 'white'}} className={styles.filtro} onClick={toggleMenu}>
      &#9776;
    </button>
    <ul>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleOrderDefault} value="default">Default</button></li> 
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleOrderA_Z} value="A">A-Z</button></li>  
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleOrderZ_A} value="Z">Z-A</button></li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByAttackMaxMin} value="MAX">Attack +/- </button></li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByAttackMinMax} value="MIN">Attack -/+ </button></li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByHighHp} value="MAX">Hp +/- </button></li> 
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByMinHp} value="MIN">Hp -/+ </button> </li>

         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByHighWeight} value="MAX">Weight +/- </button></li> 
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByMinWeight} value="MIN">Weight -/+ </button></li> 
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByHighDefense} value="MAX">Defense +/- </button></li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByMinDefense} value="MIN">Defense -/+ </button> </li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByHighSpeed} value="MAX">Speed +/- </button></li>
         <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterByMinSpeed} value="MIN">Speed -/+ </button> </li>



      </ul>
     </div>
     :
     <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white', color: 'white'}}  onClick={toggleMenu}>
     Filtros
   </button>
    }
     {showMenu2?
    <div>
      <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white',color: 'white'}}  onClick={toggleMenu2}>
      &#9776;
    </button>
    <ul>
    <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterOrigenApi} value="API">PokeApi</button></li> 
    <li><button style={{backgroundColor: 'rgb(100, 127, 127)', border: '1px solid white',color: 'white'}}  onClick={handleFilterCreatedPokemons} value="DB">User created</button></li> 
    </ul>
     </div>
    :
    <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white',color: 'white'}}  onClick={toggleMenu2}>
    Origen
  </button>
    }


     {showMenu3?
    <div>
      <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white',color: 'white'}}  onClick={toggleMenu3}>
      &#9776;
    </button>
    <ul>
    <li>{types.map(type=>{
      return(
        <button key={type} value={type} onClick={handleFilterButton}>{type} </button>
      )
      
     })}</li> 
    </ul>
     </div>
    :
    <button style={{backgroundColor: 'rgba(2, 25, 62, 0.8)', border: '1px solid white', color: 'white'}}  onClick={toggleMenu3}>
    Tipos
  </button>
    }


     </div>
      

  )
}

export default ButtonsContainer;