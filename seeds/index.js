const seedUsers = require('./user-seeds');
const seedLists = require('./list_seeds');
const seedPayments = require('./payment-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('----- DATABASE SYNCED -----');
    await seedUsers();
    console.log('----- USER SEEDED -----')
    await seedLists();
    console.log('----- LIST SEEDED -----')
    await seedPayments();
    console.log('----- PAYMENT SEEDED -----')
    process.exit(0);
};

seedAll();