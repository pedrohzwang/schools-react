const express = require('express');
const router = express.Router();
const studentService = require('../service/studentService');

router.post('/student', async function(req, res) {
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

router.get('/student/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const student = await studentService.getStudentById(req.params.id);
        console.log(student);
        return res.status(200).json(student);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.delete('/student/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const student = await studentService.deleteStudent(req.params.id);
        console.log(student);
        return res.status(200).send();
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.put('/student', async function(req, res) {
    try {
        console.log(req.body);
        const student = await studentService.updateStudent(req.body);
        console.log(student);
        return res.status(200).json(student);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

module.exports = router;
