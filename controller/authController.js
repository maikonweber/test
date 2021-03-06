const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const User = require("../models/user");

const router =  express.Router();

function generateToken(params = {}) {
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86430,
    
    });
 }




router.post('/register', async (req, res) => {
    const { usuario } = req.body
   
    try {
        if (await User.findOne({ usuario }))
            return res.status(400).send ({error: "User Already Exist"})

        const user = await User.create(req.body)
        
        user.password = undefined;

        return res.send({ user,
        token: generateToken ({ id: user.id }), });


    } catch (err) {
        return res.status(400).send({ error: "Registration Failed " });
         
    }



});

router.post ('/authenticate', async (req, res ) => {
    const { usuario, password } = req.body;
    const user = await User.findOne({ usuario }).select('+password');

    if (!user)     
        return res.status(400).send ({ error: "User not Found"});

    
    if (!await bcrypt.compare(password, user.password))

        return res.status(400).send({ error: " Invalid password "});


        user.password = undefined;



        res.send({ user, token: generateToken({ id: user.id }), 
    });

});



module.exports = app  => app.use('/auth', router);