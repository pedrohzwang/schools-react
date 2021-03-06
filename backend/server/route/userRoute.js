const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
const encrypt = require('crypto-js');
const secret = require ('../auth/secret');

router.post('/user', async function(req, res) {
    try {
        const user = req.body;
        user.senha = encrypt.SHA256(user.senha).toString();
        console.log(user);
        const newUser = await userService.saveUser(user);
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/users', async function(req, res) {
    try {
        const users = await userService.getUsers();
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/user/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const user = await userService.getUserById(req.params.id);
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/user/:nome', async function(req, res) {
    try {
        console.log(req.params.nome);
        const user = await userService.getUser(req.params.nome);
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.delete('/user/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const user = await userService.deleteUser(req.params.id);
        console.log(user);
        return res.status(200).send();
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.put('/user', async function(req, res) {
    try {
        console.log(req.body);
        req.body.senha = encrypt.SHA256(req.body.senha).toString();
        const actualUser = await userService
        const user = await userService.updateUser(req.body);
        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

module.exports = router;
