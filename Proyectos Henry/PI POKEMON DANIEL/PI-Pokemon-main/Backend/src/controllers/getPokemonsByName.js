const axios = require('axios');
const { Pokemon } = require('../db.js');

const getPokemonsByName = async (req, res) => {
  const { name } = req.query.toLowerCase();

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const apiPokemon = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      speed: response.data.stats[5].base_stat,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map(type => type.type.name.toLowerCase())
    };

    const pokemonDb = await Pokemon.findOne({ where: { name } });

    const dbPokemon = pokemonDb ? {
      id: pokemonDb.id,
      name: pokemonDb.name,
      image: pokemonDb.image,
      hp: pokemonDb.hp,
      attack: pokemonDb.attack,
      defense: pokemonDb.defense,
      speed: pokemonDb.speed,
      height: pokemonDb.height,
      weight: pokemonDb.weight,
      types: pokemonDb.types.split(',')
    } : null;

    const pokemon = dbPokemon ? { ...dbPokemon, ...apiPokemon } : apiPokemon;

    return res.status(200).json(pokemon);
  } catch (error) {
    const pokemonDb = await Pokemon.findOne({ where: { name } });
    if (pokemonDb) {
      const dbPokemon = {
        id: Pokemon.id,
        name: Pokemon.name,
        image: Pokemon.image,
        hp: Pokemon.hp,
        attack: Pokemon.attack,
        defense: Pokemon.defense,
        speed: Pokemon.speed,
        height: Pokemon.height,
        weight: Pokemon.weight,
        types: Pokemon.types.split(',')
      };
      return res.status(200).json(dbPokemon);
    } else {
      return res.status(404).json({ message: 'El Pokemon no existe' });
    }
  }
}
module.exports = getPokemonsByName;
// Status: completed