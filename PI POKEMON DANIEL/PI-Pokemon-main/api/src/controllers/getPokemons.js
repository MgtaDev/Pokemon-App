const axios = require('axios');

const getpokemons = async(req, res) => {
  
try {
  const apiResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
  
  //Aqui se encuentran guardados todos los pokemones
  const pokemon = apiResponse.data.results
  const pokemonInfo = await Promise.all(pokemon.map(async (pokemon)=> {
    const response = await axios.get(pokemon.url)
    return {
    id: response,
    name:response,
    image:response,
    hp:response,
    attack:response,
    defense:response,
    speed:response,
    height:response,
    weight:response,
    type:response
  }
  }))
  return res.status(200).json(pokemonInfo)

} catch (error) {
  return res.status(400),json({error: error.message})
}
};

module.exports = getpokemons;