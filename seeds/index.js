const seedUsers = require('./user-seeds');
const seedLists = require('./list_seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('----- DATABASE SYNCED -----');
    await seedUsers();
    console.log('----- USER SEEDED -----')
    await seedLists();
    console.log('----- LIST SEEDED -----')
    process.exit(0);
};

seedAll();