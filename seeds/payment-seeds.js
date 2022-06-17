const {Payment, List} = require('../models');

const paymentData = [
    {
        description: 'descripcion de pago 1',
        amount: 100.00,
        creditorId: 1,
        debtorId: 2,
        isPayed: true,
        listId: '0aa64c98-1e8f-4022-af59-9c5f629255fc',
    },
    {
        description: 'descripcion de pago 2',
        amount: 200.00,
        creditorId: 2,
        debtorId: 3,
        isPayed: false,
        listId: '19dd8a47-d05b-4377-95aa-4f3bb98e295e',
    },
    {
        description: 'descripcion de pago 3',
        amount: 300.00,
        creditorId: 3,
        debtorId: 4,
        isPayed: false,
        listId: '3106c77d-b042-470f-bb96-d658a1059954',
    },
    {
        description: 'descripcion de pago 4',
        amount: 400.00,
        creditorId: 4,
        debtorId: 5,
        isPayed: true,
        listId: '97c897c4-45e9-489c-8d02-29f11e5d6791',
    },
    {
        description: 'descripcion de pago 5',
        amount: 500.00,
        creditorId: 5,
        debtorId: 1,
        isPayed: true,
        listId: 'f72125f6-b636-4180-882e-3a8067b8e80a',
    },
];

const seedPayments = () => Payment.bulkCreate(paymentData);

module.exports = seedPayments;