//el modelo es una funcion que recibe a sequalize y dataTypes y me devuelve la tabla que estoy configurando
module.exports = (sequelize,dataTypes) => {
    /* genero 3 constantes y esa las guardo como parametro de otra llamada movie, donde con el metodo sequalize, se envian */


    const alias = 'Movie'//el alias lo nombro como el MODELO, en singular y mayuscula la orimer letra
    
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,//clave primaria
            allowNull: false,//soporta nulo
            autoIncrement: true// auto incrementable
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,//posee 3 digitos de los cuales 1 es decimal
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,//soporta nulo 
            defaultValue :'0'
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,//soporta nulo 
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,//soporta nulo 
        },
        genre_id:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: true,//soporta nulo 
        }
    };
    const config = {
        tablaName :"movies",//el nombre de la tabla, esto es importante porque muchas veces deacuerdo al sistema operativo sequalize no llega a captar el nombre y de esa manera la lee de este sector.
        timestamps :true, // si la tabla no tiene tabla de tiempo debemos ponerla de forma obligatoria
        underscored : true // tiene algun subrayado? se refiere al guion bajo
    }

const Movie = sequelize.define(alias, cols, config)
return Movie //lo retorno en singular, porque sequalize deduce que el nombre de la tabla es en plural
}


