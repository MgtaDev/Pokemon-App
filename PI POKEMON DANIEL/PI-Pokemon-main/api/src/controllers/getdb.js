const { Pokemon } = require('../db')

//Obtenemos los pokemones desde nuestra instancia de nuestra base de datos
//de sequelize que importamos arriba.
 const getPokemonFromDb = async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    return res.json(pokemons);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
module.exports = getPokemonFromDb;