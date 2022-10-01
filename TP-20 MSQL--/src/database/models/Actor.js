const { STRING } = require("sequelize");

module.exports = (Sequelize, dataTypes) => {

    const alias = 'Actor'

    const cols = {
    
        id :{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,//clave primaria
            allowNull: false,//soporta nulo
            autoIncrement: true// auto incrementable
        } ,
        first_name :{
            type : dataTypes.STRING(100),
            allowNull: false,//soporta nulo
        },
        last_name:{
            type : dataTypes.STRING(100),
            allowNull: false,//soporta nulo
        },
        rating:{
            type: dataTypes.DECIMAL(3, 1),
            allowNull: true,//soporta nulo 

        } ,
        favorite_movie_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,//soporta nulo 

        } 
    }

    
    const config = {
        tablaName: "actors",
        timestamps: true,
        underscored: true
        
    }

    const Actor = Sequelize.define(alias, cols, config);
    return Actor

}