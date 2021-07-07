const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
currentDate = year + '-' + month + '-' + day;

exports.saveStudent = async function (student) {
    console.log('INSERT INTO usuario (nome, email, senha, telefone, cd_tipo, dt_criacao, dt_atualizacao, avatar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [student.nome, student.email, student.senha, student.telefone, student.cdTipo, currentDate, currentDate, student.diretorioAvatar]);
    return database.one('INSERT INTO usuario (nome, email, senha, telefone, cd_tipo, dt_criacao, dt_atualizacao, avatar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *', [student.nome, student.email, student.senha, student.telefone, student.cdTipo, currentDate, currentDate, student.diretorioAvatar]);
}

exports.getStudents = async function () {
    console.log('select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario');
    return database.query('select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario');
}

exports.getStudent = async function (nome) {
    console.log(nome);
    return database.query(`select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario where nome ilike '%'||$1||'%'`, [nome]);
}

exports.getStudentById = async function (id) {
    console.log(nome);
    return database.one(`select id, nome, email, telefone, (select descricao from tipo_usuario where codigo = cd_tipo) tipo_perfil, avatar from usuario where nome ilike '%'||$1||'%'`, [nome]);
}

/*exports.getstudentInfo = async function (studentname) {
    console.log('select * from usuario where usuario = $1', [studentname]);
    return database.query('select * from usuario where usuario = $1',[studentname]);
}*/

// NPM - NODE PACKAGE MANAGER
// NVM - NODE VERSION MANAGER
// NPX - NODE PACKAGE EXECUTION