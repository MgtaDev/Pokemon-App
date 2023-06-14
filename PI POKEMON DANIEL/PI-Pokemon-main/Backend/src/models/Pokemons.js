//Nos traemos a DataTypes de sequelize para asignar los valores de nuestra db
const { DataTypes } = require('sequelize');

// Luego le injectamos la conexion a sequelize.
// Exportamos una funcion que define el modelo
module.exports = (sequelize) => {
  // Definimos nuestro modelo
  sequelize.define('Pokemon', {
    id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue:DataTypes.UUIDV4,
    allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  
  },{timestamps: false});
};
