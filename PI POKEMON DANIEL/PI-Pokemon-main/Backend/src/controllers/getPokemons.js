const axios = require('axios');

const getPokemons = async(req, res) => {
  try {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=24'
  //Nos trae a los pokemones con limite de 1281
  const apiResponse = await axios.get(url)
  
  //Aqui se encuentran guardados todos los pokemones
  const pokemons = apiResponse.data.results

    //El método Promise. all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
    //o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
    const pokemonInfo = await Promise.all(pokemons.map(async (pokemon)=> {
    
    const response = await axios.get(pokemon.url)
    return {
    id: response.data.id,
    name:response.data.name,
    image:response.data.sprites.other.home.front_default,
    hp:response.data.stats[0].base_stat,
    attack:response.data.stats[1].base_stat,
    defense:response.data.stats[2].base_stat,
    speed:response.data.stats[5].base_stat,
    height:response.data.height,
    weight:response.data.weight,
    type:response.data.types.map(type => type.type.name)
  }
  }))
  return res.status(200).json(pokemonInfo)

} catch (error) {
  return res.status(400).json({error: error.message})
}
};

module.exports = getPokemons;