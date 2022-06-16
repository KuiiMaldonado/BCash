const {Model, DataTypes} = require('sequelize');
const uuid = require('uuid');
const sequelize = require('../config/connection');

class List extends Model {

}

List.init(
    {
        listId: {
            type: DataTypes.UUID,
            unique: true,
            allowNull: true,
            primaryKey: true,
            validate: {
                isUUID: true,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        hooks: {
            beforeCreate(newListData) {
                newListData.listId = uuid.v4();
            },
        },
        sequelize,
        timestamps: false,
        modelName: 'list',
        underscored: false,
    }
);

module.exports = List;