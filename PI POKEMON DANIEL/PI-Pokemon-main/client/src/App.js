import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


function App() {
  const [pokemons, setPokemons] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        //urldeAPI
      );

      if (data.name) {
        setPokemons((oldPokemons) => [...oldPokemons, data]);
      } else {
        alert("Lo sentimos...¡No existen pokemones con este ID!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
   <Routes>
    <Route></Route> {/*Home*/}
    <Route></Route> {/*Filter*/}
    <Route></Route> {/*About Me*/}
    <Route></Route> {/*Detail*/}
    <Route></Route> {/*CreatePokemonForm*/}
   </Routes>
  );
}

export default App;
