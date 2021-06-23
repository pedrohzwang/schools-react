const database = require('../database/database');

exports.getUserInfo = async function (username) {
    console.log('select * from usuario where usuario = $1', [username]);
    return database.query('select * from usuario where usuario = $1',[username]);
}

exports.saveUser = async function (user) {
    console.log('insert into usuario (nome, usuario, senha) values ($1, $2, $3) returning *', 
    [user.nome, user.usuario, user.senha]);
    return database.one('insert into usuario (nome, usuario, senha) values ($1, $2, $3) returning *', 
    [user.nome, user.username, user.senha]);
}

/*
exports.getBooks = function () {
    return database.query('select * from livro');
}

exports.deleteBook = function (bookID) {
    return database.none('delete from livro where idlivro = $1',[bookID]);
}

exports.saveBook = function (book) {
    console.log("Dados: \n")
    console.log(book);
    return database.one('INSERT INTO livro (nome, editora, isbn, quantidade, assunto, autor, descricao) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *'
    ,[book.nome, book.editora, book.isbn,  book.quantidade, book.assunto, book.autor, book.descricao]);
}
*/

// NPM - NODE PACKAGE MANAGER
// NVM - NODE VERSION MANAGER
// NPX - NODE PACKAGE EXECUTION