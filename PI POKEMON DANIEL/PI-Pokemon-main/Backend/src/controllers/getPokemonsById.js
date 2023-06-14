const axios = require('axios')
const { Pokemon } = require('../db.js')

const getPokemonById = async (req, res)=>{
//Traemos al id de params
const { id } = req.params
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
if(uuidRegex.test(id)){
  try {
    const foundedPokemon = await Pokemon.findOne({where: {id}})
    if(!foundedPokemon) return res.status(404).send({errorMessage: 'El pokemon no existe en la Poke Data Base'})
   
    return res.status(200).json(foundedPokemon)
  
  } catch (error) {
    return res.status(400).send({errorMessage: error.message})
  }
}
else{
  try {
    //Si no consigue el pokemon con el id especifico en la base de datos
    //procede a pedirlo a la api, para esto obtenemos todos los atributos que nos brinda la api y
    //lo guardamos en una constante respuesta
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    //Guardamos en una constante el pokemon obtenido junto con sus atributos obtenidos de response.
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
        type: response.data.types.map(type => type.type.name)
    }
    return res.status(200).json(obtainedPokemon)
    
  } catch (error) {
    return res.status(404).json({ errorMessage: 'El pokemon no existe en la PokeApi'});
  }
}

}
module.exports = getPokemonById;