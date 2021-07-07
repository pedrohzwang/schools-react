const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService');
const encrypt = require('crypto-js');
const secret = require ('../auth/secret');

router.post('/login', async function(req, res) {
    try {
        const info = req.body;
        info.senha = encrypt.SHA256(info.senha).toString();
        console.log(info);
        const user = await loginService.verifyEmail(info.email);
        if(user && info.senha === user.senha){
            const token = secret.signToken(user.id, 60000000);
            return res.json({auth: true, token});
        }

        res.status(401).end();
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

router.post('/logout', function(req, res) {
    const token = req.headers['x-access-token'];
    secret.addBlacklist(token);
    return res.status(200).end();
})
 
module.exports = router;
