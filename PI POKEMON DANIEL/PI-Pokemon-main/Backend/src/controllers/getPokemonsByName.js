const axios = require('axios');
const { Pokemon } = require('../db.js');

const getPokemonsByName = async(req, res)=>{
//Obtenemos el nombre por query 
const { name } = req.query;

try {
  // Obtenemos todos los atributos que nos brinda la api y lo guardamos en una constante respuesta
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  //Creamos un objeto obtainedPokemon con los datos obtenido de response
  const obtainedPokemon = {
    id: response.data.id,
    name: response.data.name,
    image: response.data.sprites.other.home.front_default,
    hp: response.data.stats[0].base_stat,
    attack: response.data.stats[1].base_stat,
    defense: response.data.stats[2].base_stat,
    speed: response.data.stats[5].base_stat,
    height: response.data.height,
    weight: response.data.weight,
    types: response.data.types.map(type => type.type.name)
  };
  return res.status(200).json(obtainedPokemon)
  
} catch (error) {
  //Solicitamos a la base de datos un pokemon por nombre, en el caso de que exista, que lo retorne, en el caso que no
  //que nos arroje el error con el mensaje de 'El pokemon no existe'
  const pokemon = await Pokemon.findOne({ where: { name } });
    if (pokemon) {
      return res.json(pokemon);
} else {
  return res.status(400).send({message: 'El pokemon no existe'})
}

}}
module.exports = getPokemonsByName;

// Status: completed