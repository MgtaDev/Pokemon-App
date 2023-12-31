require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


// // //Definimos nuestras tablas:
// PokemonsModel(sequelize)
// pokemonType(sequelize)




// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Type.belongsToMany(Pokemon, { through: "Pokemon_type" });
Pokemon.belongsToMany(Type, { through: "Pokemon_type" });

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};















// //Requirimo nuestro proctector de variables de entorno
// require('dotenv').config();

// //Traemos Sequelize para instanciarlo de 'sequelize'
// const { Sequelize } = require('sequelize');
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// //Traemos nuestros modelos:
// const PokemonsModel = require('./models/Pokemons.js')
// const TypesModel = require('./models/pokemonType.js');
// const pokemonType = require('./models/pokemonType.js');

// //Creamos la instancia de sequelize
// const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//    {
//       logging: false, // set to console.log to see the raw SQL queries
//       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//    }
// );

// //Definimos nuestras tablas:
// PokemonsModel(sequelize)
// pokemonType(sequelize)

// //Y la relacion entre ellos, hacemos destructuring de nuestros modelos que se encuentran en sequelize.models
// const {Pokemon,Type} = sequelize.models

// //Y le indicamos su tipo de relacion, y la tabla intermedia que seria Pokemon_Type
// Pokemon.belongsToMany(Type,{ through: 'Pokemon_Type' })
// Type.belongsToMany(Pokemon,{ through: 'Pokemon_Type' })

// //Exportamos nuestros modelos conectados con sequelize
// module.exports = {
//   ...sequelize.models,
//   comn:sequelize};

