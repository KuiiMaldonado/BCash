const {User} = require('../models');

const usersData = [
    {
        username: 'KuiiMaldonado',
        password: '12345678',
        email: 'cuitlahuac@email.com',
        firstName: 'Cuitlahuac',
        lastName: 'Maldonado',
    },
    {
        username: 'DanielLago',
        password: '12345678',
        email: 'lago@email.com',
        firstName: 'Daniel',
        lastName: 'Lago',
    },
    {
        username: 'AlexisGarcia',
        password: '12345678',
        email: 'alexis@email.com',
        firstName: 'Alexis',
        lastName: 'Garcia',
    },
    {
        username: 'CaroTaboada',
        password: '12345678',
        email: 'carolina@email.com',
        firstName: 'Carolina',
        lastName: 'Taboada',
    },
    {
        username: 'EdwinSimpson',
        password: '12345678',
        email: 'edwin@email.com',
        firstName: 'Edwin',
        lastName: 'Simpson',
    },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;