const moongose  = require("mongoose");



moongose.connect("mongodb://localhost:27017/users", { useNewUrlParser: true , useUnifiedTopology: true });
moongose.set('useCreateIndex', true)
moongose.Promise = global.Promise;

module.exports = moongose