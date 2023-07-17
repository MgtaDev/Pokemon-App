//Nos traemos a Router de express
const { Router } = require('express');

//Importamos nuestros controladores:
const getPokemonsDb = require('../controllers/getPokemonsDb.js')
const getPokemons = require('../controllers/getPokemons.js');
const getPokemonsById = require('../controllers/getPokemonsById.js')
const getPokemonByName = require('../controllers/getPokemonsByName.js');
const postPokemons = require('../controllers/postPokemons.js');
const getTypes = require('../controllers/getTypes.js')
const getApiPokemons = require('../controllers/getApiPokemons.js')
const deletePokemon = require('../controllers/deletePokemon.js')
//Asignamos el router
const router = Router();

// Configuramos nuestras rutas;
router.get('/pokemons', getPokemons)
router.get('/pokemons/:id', getPokemonsById)
router.get('/pokemons/name',getPokemonByName)
router.get('/types',getTypes)
router.get('/pokemonsdb', getPokemonsDb)
router.get('/pokemonsapi', getApiPokemons)
router.post('/pokemons', postPokemons)
router.post('/pokemonsdb',postPokemons)
router.delete('/pokemons', deletePokemon )
module.exports = router;
