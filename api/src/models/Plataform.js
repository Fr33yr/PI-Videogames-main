const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('plataform', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
}