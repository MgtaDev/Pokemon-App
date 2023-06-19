const axios = require('axios');

//Solicitamos nuestra tabla de types a nuestra db para proceder con la respectiva funcion
const { Type } = require('../db.js');

const getPokemonsByType = async (req, res) => {
try {
  // Obtenemos todos los datos que nos brinda la api y lo guardamos en una constante respuesta
  const response = await axios.get('https://pokeapi.co/api/v2/type?limit=24');

  //Iniciamos una variable types, con info proveniente de response, donde se encuentran los
  // datos obtenidos por nuestra api
  const types = response.data.results;
  return res.status(200).json(types)

} catch (error) {
  return res.status(500).send({error: error.message})
}
}

module.exports = getPokemonsByType;