const User = require('./User');
const Payment = require('./Payment');
const List = require('./List');
const UserList = require('./UserList');

Payment.hasOne(List, {
    foreignKey: 'listId',
});

module.exports = {
    User,
    Payment,
    List,
    UserList
};