const express = require('express');
const router = express.Router();
const studentService = require('../service/studentService');
const encrypt = require('crypto-js');

router.put('/student', async function(req, res) {
    try {
        const student = req.body;
        console.log(student);
        const newStudent = await studentService.saveStudent(student);
        console.log(newStudent);
        return res.status(200).json(newStudent);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/students', async function(req, res) {
    try {
        const students = await studentService.getStudents();
        console.log(students);
        return res.status(200).json(students);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/student/:nome', async function(req, res) {
    try {
        console.log(req.params.nome);
        const student = await studentService.getStudent(req.params.nome);
        console.log(student);
        return res.status(200).json(student);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

/*router.post('/login', async function(req, res) {
    try {
        const user = req.body;
        console.log(user);
        const verify = await studentService.verifyLogin(user);
        console.log(verify);
        console.log(verify[0].senha, user.senha);
        if(verify[0].senha == user.senha){
            return res.status(200).json({message: 'logado'});
        } else{
            return res.status(200).json({message: 'login ou senha inválidos'});
        }
    } catch (error) {
        res.json({message: error.message})
    }
});*/



module.exports = router;
