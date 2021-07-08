const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
currentDate = year + '-' + month + '-' + day;

exports.saveStudent = async function (student) {
    console.log('insert into aluno (nome, genero, dt_matricula, dt_atualizacao, alergia, necessidade_especial, nome_escola, turno_escola, vl_matricula, vl_mensalidade, venc_mensalidade, dt_fim_matricula) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning * ', [student.nome, student.genero, currentDate, currentDate, student.alergia, student.necessidadeEspecial, student.nomeEscola, student.turnoEscola, student.vlMatricula, student.vlMensalidade, student.vencMensalidade, null]);
    return database.one('insert into aluno (nome, genero, dt_matricula, dt_atualizacao, alergia, necessidade_especial, nome_escola, turno_escola, vl_matricula, vl_mensalidade, venc_mensalidade, dt_fim_matricula) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning * ', [student.nome, student.genero, currentDate, currentDate, student.alergia, student.necessidadeEspecial, student.nomeEscola, student.turnoEscola, student.vlMatricula, student.vlMensalidade, student.vencMensalidade, null]);
}

exports.getStudents = async function () {
    console.log('select * from aluno');
    return database.query('select * from aluno');
}

exports.getStudentById = async function (id) {
    console.log(id);
    return database.one('select * from aluno where id = $1', [id]);
}

exports.deleteStudent = async function (id) {
    console.log(id);
    return database.none('delete from aluno where id = $1', [id]);
}

exports.updateStudent = async function (student) {
    console.log(student.id);
    return database.one('update aluno set nome = $1, genero = $2, dt_matricula = $3, dt_atualizacao = $4, alergia = $5, necessidade_especial = $6, nome_escola = $7, turno_escola = $8, vl_matricula = $9, vl_mensalidade = $10, venc_mensalidade = $11, dt_fim_matricula = $12 where id = $12 returning *', [student.nome, student.genero, student.dt_matricula, currentDate, student.alergia, student.necessidadeEspecial, student.nome_escola, student.turnoEscola, student.vlMatricula, student.vlMensalidade, student.vencMensalidade, student.dtFimMatricula, student.id]);
}