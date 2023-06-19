import axios from "axios"

export const getPokemons = () => {
    return axios.get('http://localhost:3001/pokemons')
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
  };

export  const getPokemonsDetail = (pokemon) => {
    return axios.get(pokemon.url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
   }

   export const getPokemonsType = (type) => {
    return axios.get(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }