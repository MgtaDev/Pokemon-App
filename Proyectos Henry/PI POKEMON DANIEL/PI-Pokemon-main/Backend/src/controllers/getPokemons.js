const axios = require('axios');
const { Pokemon, Type } = require('../db.js');

const getPokemons = async(req, res) => {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=24'
    const apiResponse = await axios.get(url)
    const apiPokemons = apiResponse.data.results
    const dbPokemons = await Pokemon.findAll()

    const apiGames = await Promise.all(apiPokemons.map(async (pokemon) => {
      const response = await axios.get(pokemon.url)
      const modifiedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

      return {
        id: response.data.id,
        name: modifiedName,
        image: response.data.sprites.other.home.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        type: response.data.types.map(type => type.type.name)
      }
    }))

    const allGames = [...apiGames, ...dbPokemons]

    return res.status(200).json(allGames)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
}

module.exports = getPokemons;