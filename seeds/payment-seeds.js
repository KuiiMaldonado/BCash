const {Payment, List} = require('../models');

const paymentData = [
    {
        description: 'descripcion de pago 1',
        amount: 100.00,
        creditor: 1,
        debtor: 2,
        isPayed: true,
        listId: '0aa64c98-1e8f-4022-af59-9c5f629255fc',
    },
    {
        description: 'descripcion de pago 2',
        amount: 200.00,
        creditor: 2,
        debtor: 3,
        isPayed: false,
        listId: '19dd8a47-d05b-4377-95aa-4f3bb98e295e',
    },
    {
        description: 'descripcion de pago 3',
        amount: 300.00,
        creditor: 3,
        debtor: 4,
        isPayed: false,
        listId: '3106c77d-b042-470f-bb96-d658a1059954',
    },
    {
        description: 'descripcion de pago 4',
        amount: 400.00,
        creditor: 4,
        debtor: 5,
        isPayed: true,
        listId: '97c897c4-45e9-489c-8d02-29f11e5d6791',
    },
    {
        description: 'descripcion de pago 5',
        amount: 500.00,
        creditor: 5,
        debtor: 1,
        isPayed: true,
        listId: 'f72125f6-b636-4180-882e-3a8067b8e80a',
    },
];

const seedPayments = () => Payment.bulkCreate(paymentData);

module.exports = seedPayments;