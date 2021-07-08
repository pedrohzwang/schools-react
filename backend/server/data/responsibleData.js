const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
currentDate = year + '-' + month + '-' + day;

exports.saveResponsible = async function (responsible) {
    return database.one('insert into responsavel (nome, cpf, id_dependente, genero, dt_atualizacao, local_trabalho, parentesco, logradouro, numero, cep, bairro, cidade, telefone, codigo_area) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning * ', [responsible.nome, responsible.cpf, responsible.idDependente, responsible.genero, currentDate, responsible.localTrabalho, responsible.parentesco, responsible.logradouro, responsible.numero, responsible.cep, responsible.bairro, responsible.cidade, responsible.telefone, responsible.codigoArea]);
}

exports.getResponsibles = async function () {
    console.log('select * from responsavel');
    return database.query('select * from responsavel');
}

exports.getResponsibleById = async function (id) {
    console.log(id);
    return database.one('select * from responsavel where id = $1', [id]);
}

exports.deleteResponsible = async function (id) {
    console.log(id);
    return database.none('delete from responsavel where id = $1', [id]);
}

exports.updateResponsible = async function (responsible) {
    console.log(responsible.id);
    return database.one('update responsavel set nome = $1, genero = $2, dt_matricula = $3, dt_atualizacao = $4, alergia = $5, necessidade_especial = $6, nome_escola = $7, turno_escola = $8, vl_matricula = $9, vl_mensalidade = $10, venc_mensalidade = $11, dt_fim_matricula = $12 where id = $12 returning *', [responsible.nome, responsible.genero, responsible.dt_matricula, currentDate, responsible.alergia, responsible.necessidadeEspecial, responsible.nome_escola, responsible.turnoEscola, responsible.vlMatricula, responsible.vlMensalidade, responsible.vencMensalidade, responsible.dtFimMatricula, responsible.id]);
}