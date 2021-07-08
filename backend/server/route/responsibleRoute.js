const express = require('express');
const router = express.Router();
const responsibleService = require('../service/responsibleService');

router.post('/responsible', async function(req, res) {
    try {
        const responsible = req.body;
        console.log(responsible);
        const newResponsible = await responsibleService.saveResponsible(responsible);
        console.log(newResponsible);
        return res.status(200).json(newResponsible);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/responsibles', async function(req, res) {
    try {
        const responsibles = await responsibleService.getResponsibles();
        console.log(responsibles);
        return res.status(200).json(responsibles);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.get('/responsible/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const responsible = await responsibleService.getResponsibleById(req.params.id);
        console.log(responsible);
        return res.status(200).json(responsible);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.delete('/responsible/:id', async function(req, res) {
    try {
        console.log(req.params.id);
        const responsible = await responsibleService.deleteResponsible(req.params.id);
        console.log(responsible);
        return res.status(200).send();
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

router.put('/responsible', async function(req, res) {
    try {
        console.log(req.body);
        const responsible = await responsibleService.updateResponsible(req.body);
        console.log(responsible);
        return res.status(200).json(responsible);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
});

module.exports = router;
