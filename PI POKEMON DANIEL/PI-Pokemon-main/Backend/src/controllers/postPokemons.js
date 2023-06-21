const { Pokemon, Type } = require('../db.js');

//Creamos un nuevo pokemon en nuestra app
const postPokemons = async (req,res) => {
try {
  //Nos traemos los datos que requerira el pokemon por body
  const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;

   //Creamos un nuevo pokemon con sus valores por default en undefined
   const newPokemon = await Pokemon.create ({
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    type
   })

   //Le asignamos uno o varios tipos existentes a nuestro pokemon;
   const typesToAdd = await Type.findOne({ where: { name: type } });
   
   //Agregamos los tipos a nuestro pokemon creado
   await newPokemon.addTypes([typesToAdd]);
       
//En caso 200, retornamos el pokemon creado
return res.status(200).json(newPokemon)

} catch (error) {
  return res.status(400).send(error.message)
}
}

module.exports = postPokemons;