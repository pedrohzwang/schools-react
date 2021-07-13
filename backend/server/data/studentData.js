const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
const currentDate = year + '-' + month + '-' + day;

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
    console.log('delete from aluno where id = $1', [id]);
    database.none('delete from responsavel where id_dependente = $1', [id]);
    return database.none('delete from aluno where id = $1', [id]);
}

exports.updateStudent = async function (student) {
    //console.log(student.id);
    console.log('update aluno set nome = $1, genero = $2, dt_atualizacao = $3, alergia = $4, necessidade_especial = $5, nome_escola = $6, turno_escola = $7, vl_matricula = $8, vl_mensalidade = $9, venc_mensalidade = $10, dt_fim_matricula = $11 where id = $12 returning *', [student.nome, student.genero, currentDate, student.alergia, student.necessidadeEspecial, student.nomeEscola, student.turnoEscola, student.vlMatricula, student.vlMensalidade, student.vencMensalidade, student.id]);
    return database.none('update aluno set nome = $1, genero = $2, dt_atualizacao = $3, alergia = $4, necessidade_especial = $5, nome_escola = $6, turno_escola = $7, vl_matricula = $8, vl_mensalidade = $9, venc_mensalidade = $10 where id = $11 returning *', [student.nome, student.genero, currentDate, student.alergia, student.necessidadeEspecial, student.nomeEscola, student.turnoEscola, student.vlMatricula, student.vlMensalidade, student.vencMensalidade, student.id]);
}