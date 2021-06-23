const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/login', async function(req, res) {
    try {
        const user = req.body;
        console.log(user);
        const verify = await userService.verifyLogin(user);
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
});

router.put('/user', async function(req, res) {
    try {
        const user = req.body;
        console.log(user);
        const newUser = await userService.saveUser(user);
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (error) {
        res.json({message: error.message})
    }
});

module.exports = router;
