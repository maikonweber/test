/* Arquivo incial do Api.
Cria uma instancia do express
Cria um Bodyparser para Json
Utiliza app dando require para controllers  */

// Express
const express = require("express");

// BodyParser
const bodyParser = require("body-parser");

// Instancia o app com express
const app = express();

// Utiliza o body parser para transformar o Body em um Json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Passa os controllers utilizando o express

 require('./controller/authController')(app);
 require('./controller/projectController')(app);
 require('./controller/regController')(app);


 // Escuta a porta

app.listen(3009);