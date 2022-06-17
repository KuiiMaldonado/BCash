const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Payment extends Model {

}

Payment.init(
    {
        paymentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        creditorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userId',
            },
        },
        debtorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userId',
            },
        },
        isPayed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        listId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'list',
                key: 'listId',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'payment',
        underscored: false,
        freezeTableName: true,
    }
);

module.exports = Payment;