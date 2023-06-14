const { Pokemon } = require('../db.js')
//Solicitamos nuestra tabla de pokemons a nuestra db para proceder con la respectiva funcion
//Obtenemos los pokemones desde nuestra instancia de nuestra base de datos

const getPokemonFromDb = async (req, res) => {
  try {
    //El método findAll() nos trae todos los registros de esta tabla.
    const pokemons = await Pokemon.findAll();
    return res.json(pokemons);
    
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
module.exports = getPokemonFromDb;