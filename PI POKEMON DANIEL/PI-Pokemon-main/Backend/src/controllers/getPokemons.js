const axios = require('axios');

const getpokemons = async(req, res) => {
  
try {
  //Nos trae a los pokemones con limite de 1281
  const apiResponse = await axios.get('http://pokeapi.co/api/v2/pokemon?limit=1281')
  
  //Aqui se encuentran guardados todos los pokemones
  const pokemon = apiResponse.data.results

    //El método Promise. all(iterable) devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, 
    //o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.
    const pokemonInfo = await Promise.all(pokemon.map(async (pokemon)=> {
    
    const response = await axios.get(pokemon.url)
    return {
    id: response.data.id,
    name:response.data.name,
    image:response.data.sprites.other.home.front_dafault,
    hp:response.data.stats[0].base_stat,
    attack:response.data.stats[1].base_stat,
    defense:response.data.stats[2].base_stat,
    speed:response.data.stats[5].base_stat,
    height:response.data.height,
    weight:response.data.weight,
    type:response.data.types.map((type)=> type => type.type.name)
  }
  }))
  return res.status(200).json(pokemonInfo)

} catch (error) {
  return res.status(400),json({error: error.message})
}
};

module.exports = getpokemons;