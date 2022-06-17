const seedUsers = require('./user-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('----- DATABASE SYNCED -----');
    await seedUsers();
    console.log('----- USER SEEDED -----')

    process.exit(0);
};

seedAll();