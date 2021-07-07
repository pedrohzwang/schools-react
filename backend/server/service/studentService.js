const studentData = require('../data/studentData');

exports.saveStudent = (student) => {
    return studentData.saveStudent(user);
}

exports.getStudents = () => {
    return studentData.getStudents();
}

exports.getStudentById = (id) => {
    return studentData.getStudentById(id);
}

exports.deleteStudent = (id) =>  {
    return studentData.deleteStudent(id);
}

exports.updateStudent = (student) => {
    return studentData.updateStudent(student);
}