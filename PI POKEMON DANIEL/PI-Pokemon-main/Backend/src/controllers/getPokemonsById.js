const axios = require('axios');
const {Pokemon} = require('../db');

const getPokemonsById=async(req, res)=>{
  const { id } = req.params;
  
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  if (uuidRegex.test(id)) {
     try {
      const pokemon = await Pokemon.findOne({ where: { id } });
      if (!pokemon) {
        return res.status(404).json({ message: 'el pokemon no existe en la base de datos' });
      }
      return res.json(pokemon);
    } catch (error) {
    }
  } else {
  
    try {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other.home.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        type: response.data.types.map(type => type.type.name),
      };
      return res.json(pokemon);

    } 
    catch (error) {
    if (error.response.status === 404) {
    return res.status(404).json({ message: 'el pokemon no existe en la api' });
      } } }
   } 
module.exports = getPokemonsById;