const {List} = require('../models');

const listData = [
    {
        title: 'Lista 1',
    },
    {
        title: 'Lista 2',
    },
    {
        title: 'Lista 3',
    },
    {
        title: 'Lista 4',
    },
    {
        title: 'Lista 5',
    },
];

const seedLists = () => List.bulkCreate(listData);

module.exports = seedLists;