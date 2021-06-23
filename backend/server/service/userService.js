const userData = require('../data/userData');

exports.getUserInfo = function (username) {
    return userData.getUserInfo(username);
}

exports.getUserPassword = function () {
    return userData.getUserPassword();
}

exports.getIfExists = (username) => {
    console.log((userData.getUser()));
    return (userData.getUser());
}

exports.verifyLogin = (user) => {
    /*userData.getUserInfo(user.username).then(data => {
        console.log(data[0]);
        return data[0];
    })*/

    //console.log(verifiedUser);
    //console.log(verifiedUser.senha === user.senha);
    return userData.getUserInfo(user.username);
}

exports.saveUser = (user) => {
    return userData.saveUser(user);
}

/*
exports.getBook = function (bookID) {
    return booksData.getBook(bookID);
}

exports.deleteBook = function (bookID) {
    return booksData.deleteBook(bookID);
}

exports.saveBook = function (book) {
    return booksData.saveBook(book);
}*/