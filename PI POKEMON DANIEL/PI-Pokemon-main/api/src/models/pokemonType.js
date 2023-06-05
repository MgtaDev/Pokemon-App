const { DataTypes }= require('sequelize')

module.exports = (sequelize) => {
   sequelize.define('type', {
    Id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.UUID,
      allowNull: false
    }
   }, {timestamps: false})
}