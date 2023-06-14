const axios = require('axios');

//Solicitamos nuestra tabla de types a nuestra db para proceder con la respectiva funcion
const { Type } = require('../db.js');

const getPokemonsByType = async (req, res) => {
try {
  // Obtenemos todos los datos que nos brinda la api y lo guardamos en una constante respuesta
  const response = await axios.get('https://pokeapi.co/api/v2/type');

  //Iniciamos una variable types, con info proveniente de response, donde se encuentran los
  // datos obtenidos por nuestra api
  const types = response.data.results;

  const newTypes = [];

  //Creamos un bucle for para recorrer los tipos en types
  for(const type of types){

    //Buscamos el tipo solicitado en nuestra base de datos con el metodo findOne
    //El método findOne obtiene la primera entrada que encuentra (que cumple con 
    //las opciones de consulta opcionales, si se proporcionan).
    const typeFounded = await Type.findone({where: {Nombre: type.Nombre}})
    if(!typeFounded) {

    // Creamos un nuevo tipo en la base de datos si no existe aun. Y lo pusheamos a 
    //nuestro arreglo newTypes vacio declarado al comienzo
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