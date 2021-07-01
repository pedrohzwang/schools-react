const userData = require('../data/userData');

exports.saveUser = (user) => {
    return userData.saveUser(user);
}

exports.getUsers = () => {
    return userData.getUsers();
}

exports.getUser = (nome) => {
    return userData.getUser(nome);
}

exports.getUserById = (id) => {
    return userData.getUserById(id);
}

exports.deleteUser = (id) =>  {
    return userData.deleteUser(id);
}

exports.updateUser = (user) => {
    return userData.updateUser(user);
}