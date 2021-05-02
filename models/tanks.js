const mongoose = require("../database/database");
const bcrypt = require('bcryptjs')


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,


    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Project',
         require: true,   
    },

    assignedTo:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
       
    },
    completed: [{
        type: Boolean,
        require: true,
        defaut: false

    }],

    createdAt: {
        type: Date,
        default: Date.now,

    }

});

const Tasks = mongoose.model("Tasks", TaskSchema)
module.exports = Tasks
