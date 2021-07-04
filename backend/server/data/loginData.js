const database = require('../database/database');
var data = new Date();
var day = String(data.getDate()).padStart(2, '0');
var month = String(data.getMonth() + 1).padStart(2, '0');
var year = data.getFullYear();
currentDate = year + '-' + month + '-' + day;

exports.verifyEmail = async function (email) {
    console.log(email);
    console.log('select id, email, senha from usuario where email = $1', [email]);
    return database.one('select id, email, senha from usuario where email = $1', [email]);
}
