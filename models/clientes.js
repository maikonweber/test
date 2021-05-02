
const mongoose = require("../database/database");

const leadsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },



    telefone:  {

        type: String,
        required: true,
    },

    cpf: {
        type: String,
        required: true, 

    },

    status: {
        type: String,
        required: true,

    } 

});

const Leads = mongoose.model('Leads', leadsSchema);

module.exports = Leads;
