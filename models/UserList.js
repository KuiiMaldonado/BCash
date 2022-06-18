const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class UserList extends Model {

}

UserList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userId',
            },
        },
        listId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'list',
                key: 'listId'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'user_list',
        freezeTableName: true,
    },
);

module.exports = UserList;