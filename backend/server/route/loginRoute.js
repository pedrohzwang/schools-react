const express = require('express');
const router = express.Router();
const userService = require('../service/userService');
const encrypt = require('crypto-js');

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
})

module.exports = router;
