const axios = require('axios');
const {Pokemon} = require('../db');

const getPokemonsByName = async(req, res)=>{
const { name } = req.query;

try {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const obtainedPokemon = {
    Id: response.data.id,
    Nombre: response.data.name,
    Imagen: response.data.sprites.other.home.front_default,
    Hp: response.data.stats[0].base_stat,
    Ataque: response.data.stats[1].base_stat,
    Defensa: response.data.stats[2].base_stat,
    Velocidad: response.data.stats[5].base_stat,
    Altura: response.data.height,
    Peso: response.data.weight,
    Tipos: response.data.types.map(type => type.type.name)
  };
  return res.status(200).json(obtainedPokemon)
  
} catch (error) {
  // 
  const pokemon = await Pokemon.findOne({ where: { name } });
    if (pokemon) {
      return res.json(pokemon);
} else {
  return res.status(400).send({message: 'El pokemon no existe'})
}

}}
module.exports = getPokemonsByName;

// Status: completed