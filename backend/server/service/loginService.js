const studentData = require('../data/loginData');

exports.verifyEmail = (email) => {
    return studentData.verifyEmail(email);
}
