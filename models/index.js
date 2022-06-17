const User = require('./User');
const Payment = require('./Payment');
const List = require('./List');
const UserList = require('./UserList');

Payment.hasOne(List, {
    foreignKey: 'listId',
});

List.belongsToMany(User, {through: UserList});

User.belongsToMany(List, {through: UserList});

module.exports = {
    User,
    Payment,
    List,
    UserList
};