const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://wagfilho_admin:wa23g09ner94@cluster0-ca1on.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);








//MÉTODOS HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.parms (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)