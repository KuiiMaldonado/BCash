const {UserList} = require('../models');

const userListData = [
    {
        userId: 1,
        listId: '0aa64c98-1e8f-4022-af59-9c5f629255fc',
    },
    {
        userId: 1,
        listId: '97c897c4-45e9-489c-8d02-29f11e5d6791',
    },
    {
        userId: 5,
        listId: '97c897c4-45e9-489c-8d02-29f11e5d6791',
    },
    {
        userId: 3,
        listId: '0aa64c98-1e8f-4022-af59-9c5f629255fc',
    },
    {
        userId: 2,
        listId: '19dd8a47-d05b-4377-95aa-4f3bb98e295e',
    },
    {
        userId: 4,
        listId: '3106c77d-b042-470f-bb96-d658a1059954',
    },
    {
        userId: 4,
        listId: 'f72125f6-b636-4180-882e-3a8067b8e80a',
    },{
        userId: 3,
        listId: 'f72125f6-b636-4180-882e-3a8067b8e80a',
    },

];

const seedUserLists = () => UserList.bulkCreate(userListData);

module.exports = seedUserLists;