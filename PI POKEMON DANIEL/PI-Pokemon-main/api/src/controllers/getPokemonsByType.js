const axios = require('axios');
const { Type } = require('../db');

const getPokemonsByType = async (req, res) => {
try {
  const response = await axios.get('https://pokeapi.co/api/v2/type');
  const types = response.data.results;

  const newTypes = [];
  //Para buscar un tipo de la variable tipo que coincida con su nombre
  for(const type of types){
    const typeFounded = await Type.findone({where: {Nombre: type.Nombre}})
    if(!typeFounded) {
      // Creamos un nuevo tipo en la base de datos si no existe aun.
      const createdType = await Type.findOne({where: {name:type.name}})
      newTypes.push(createdType);
    }
  }
// Con esto obtenemos todos los tipos de nuestra base de datos.
const allTypes = await Type.findAll();
return res.status(200).json(allTypes)

} catch (error) {
  return res.status(500).send({error: error.message})
}
}

module.exports = getPokemonsByType;