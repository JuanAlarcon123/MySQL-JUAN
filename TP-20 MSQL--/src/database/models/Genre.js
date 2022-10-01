
module.exports = (Sequelize, dataTypes) => {
    const alias = 'Genre';

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        active: {
            type: dataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: "1"
        }
    };

    const config = {
        tablaName: "genres",
        timestamps: true,
        underscored : true
    

    }

    const Genre = Sequelize.define(alias, cols, config);
    return Genre
}