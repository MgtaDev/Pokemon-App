//Nos traemos a Router de express
const { Router } = require('express');

//Importamos nuestros controladores:
const getPokemonFromDb = require('../controllers/getCreatePokemonFromDb.js')
const getPokemons = require('../controllers/getPokemons.js');
const getPokemonsById = require('../controllers/getPokemonsById.js')
const getPokemonByName = require('../controllers/getPokemonsByName.js');
const getPokemonByType = require('../controllers/getPokemonsByType.js');
const postPokemons = require('../controllers/postPokemons.js');

//Asignamos el router
const router = Router();

// Configuramos nuestras rutas;
router.get('/pokemons', getPokemons)
router.get('/pokemons/:id', getPokemonsById)
router.get('/pokemons/name',getPokemonByName)
router.get('/types',getPokemonByType)
router.get('/pokemonsdb', getPokemonFromDb)
router.post('/pokemons',postPokemons)

module.exports = router;
