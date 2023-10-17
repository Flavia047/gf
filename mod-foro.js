// en video paralelo con note.js
const { sequelize }= require ("../../database")
const { DataTypes } = require('sequelize')
/* 
 titulo descriptivo del contenido = TDC
 fecha de creacion = FC 
 URL de imagen relevante = URLI
*/
 const TDC = sequelize.define ( 'TDC', {
    autor:   DataTypes.STRING,
    title:   DataTypes.STRING,
    FC :     DataTypes.REAL,
    URLI:    DataTypes.STRING,
    content: DataTypes.TEXT
})
module.exports = {TDC}; 