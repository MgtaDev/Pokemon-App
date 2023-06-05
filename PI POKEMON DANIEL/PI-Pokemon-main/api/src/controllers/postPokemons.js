const {Pokemon,Type} = require('../db');

const postPokemon = async (req,res) => {
try {
  const { name, image, hp, attack, defense, speed, height, weight } = req.body;
   //Creamos un nuevo pokemon;
   const newPokemon = await Pokemon.create ({
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight
   })
   //Le asignamos uno o varios tipos existentes a nuestro pokemon;
   const typesToAdd = await Type.findOne({ where: { name: type } });
   await newPokemon.addTypes([typesToAdd]);
       

return res.status(200).json(newPokemon)

} catch (error) {
  return res.status(400).send(error.message)
}
}

module.exports = postPokemon;