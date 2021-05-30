const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const port = 3000;

//Conexão com o BD
mongoose.connect('mongodb+srv://angelabd:angelabd@cluster0.o0wxx.mongodb.net/redesocial?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

//Chama as rotas através de usuarios
const usuarios_router = require('./routers/usuarios-router');

app.use('/usuarios', usuarios_router);

//Rota principal
app.get('/', (req, res)=>{
    res.render('pages/usuarios')
});

app.listen(port, ()=>{
    console.log('Servidor rodando na porta 3000');
})