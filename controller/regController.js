const express = require('express');
const router = express.Router();

const Leads = require('../models/clientes') 

router.get('/', async (req, res) => {
    res.send({ ok: true });
});


router.post('/newlead', async (req, res) => {
    try {

        const project = await Leads.create(req.body);


        return res.send({ project });

    } catch (err) {
        return res. status(400).send ({  error: "Erroc Creating New Lead"

        })
    }
});



router.delete('/', (req, res) => {
    res.send({ ok: true });
});


module.exports = app => app.use('/lead', router);

