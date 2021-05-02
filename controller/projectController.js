const express = require('express');
const authMiddleware = require('../middleware/auth')

const Project = require("../models/project");
const Task = require("../models/tanks")

const router = express.Router();

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try { 
        const project = await Project.find().populate('user');


        return res.send({ project }); 
        
    } catch (err) {

        return res. status(400).send ({ error: "Erroc Creating New Lead" })
    }
    
});

router.get('/projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId)
        return res.send({ project });

    
    } catch (err) {
        return res.status(400).send ({  error: "Erroc Creating New Lead"  }

          }    
    });

router.post('/', async (req, res ) => {
    try {

        const project = await Project.create({...req.body, user: req.userId });
        return res.send({ project });

    } catch (err) {
        return res.status(400).send ({  error: "Erroc Creating New Lead" })
    }
    
});


router.put('/project:id', async (req, res) => {

    res.send({ ok: true, yser: req.userId });
})

router.delete('/prject:id', async (req, res) => {

    res.send({  user: req.userId });
})



module.exports = app => app.use('/projects', router);

