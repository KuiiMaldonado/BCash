const {User} = require('../models');

const usersData = [
    {
        username: 'KuiiMaldonado',
        password: '12345678',
        email: 'cuitlahuac@email.com',
        firstName: 'Cuitlahuac',
        lastName: 'Maldonado',
        accountNumber: '123456789012345678'
    },
    {
        username: 'DanielLago',
        password: '12345678',
        email: 'lago@email.com',
        firstName: 'Daniel',
        lastName: 'Lago',
        accountNumber: '098765432109874651'
    },
    {
        username: 'AlexisGarcia',
        password: '12345678',
        email: 'alexis@email.com',
        firstName: 'Alexis',
        lastName: 'Garcia',
        accountNumber: '154896321475120345'
    },
    {
        username: 'CaroTaboada',
        password: '12345678',
        email: 'carolina@email.com',
        firstName: 'Carolina',
        lastName: 'Taboada',
        accountNumber: '154789635412548795'
    },
    {
        username: 'EdwinSimpson',
        password: '12345678',
        email: 'edwin@email.com',
        firstName: 'Edwin',
        lastName: 'Simpson',
        accountNumber: '357951258456789451'
    },
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
module.exports = usersData;
