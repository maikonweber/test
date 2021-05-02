const moongose  = require("mongoose");



moongose.connect("mongodb://localhost:27017/leads", { useNewUrlParser: true , useUnifiedTopology: true });
moongose.set('useCreateIndex', true)
moongose.Promise = global.Promise;

module.exports = moongose