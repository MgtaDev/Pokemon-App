const { Pokemon, Type } =require('../db.js');

//Creamos un nuevo pokemon en nuestra app
const postPokemons = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

    // Crea el nuevo Pokémon
    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    });

    // Busca los tipos por nombre y los asocia con el nuevo Pokémon
    const foundTypes = await Type.findAll({ where: { name: types } }); // types es un arreglo de nombres
    await newPokemon.addTypes(foundTypes);

    return res.status(200).json(newPokemon);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

module.exports = postPokemons;