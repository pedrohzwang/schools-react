const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
currentDate = year + '-' + month + '-' + day;

exports.saveUser = async function (user) {
    console.log('INSERT INTO usuario (nome, email, senha, telefone, cd_tipo, dt_criacao, dt_atualizacao, avatar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [user.nome, user.email, user.senha, user.telefone, user.cdTipo, currentDate, currentDate, user.avatar]);
    return database.one('INSERT INTO usuario (nome, email, senha, telefone, cd_tipo, dt_criacao, dt_atualizacao, avatar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [user.nome, user.email, user.senha, user.telefone, user.cdTipo, currentDate, currentDate, user.avatar]);
}

exports.getUsers = async function () {
    console.log('select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario');
    return database.query('select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario');
}

exports.getUser = async function (nome) {
    console.log(`select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario where nome like $1`, [nome]);
    return database.query(`select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario where nome like $1`, [nome]);
}


/*exports.getUserInfo = async function (username) {
    console.log('select * from usuario where usuario = $1', [username]);
    return database.query('select * from usuario where usuario = $1',[username]);
}*/

// NPM - NODE PACKAGE MANAGER
// NVM - NODE VERSION MANAGER
// NPX - NODE PACKAGE EXECUTION