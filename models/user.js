const mongoose = require("../database/database");
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,


    },
    
    usuario: {
        type: String,
        unique: true,
        required: true,
        lowercasa: true,

 },
    password:  {
        type: String,
        required: true,
        select: false, 
        require: true
    },

    createdAt: {
        type: Date,
        default: Date.now,


    }

});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();


});

const User = mongoose.model("User", UserSchema);

module.exports = User;

