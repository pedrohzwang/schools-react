const studentData = require('../data/studentData');

exports.saveStudent = (student) => {
    return studentData.saveStudent(user);
}

exports.getStudents = () => {
    return studentData.getStudents();
}

exports.getStudent = (nome) => {
    return studentData.getStudent(nome);
}

exports.getStudentById = (id) => {
    return studentData.getStudentById(id);
}