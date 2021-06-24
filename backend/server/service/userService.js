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