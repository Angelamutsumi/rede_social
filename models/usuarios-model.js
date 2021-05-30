const mongoose = require('mongoose');

const Usuarios = mongoose.model('usuarios', {
    nome: String,
    apelido: String,
    email: String,
    hobbies: String,
    educacao: String,
    trabalho: String,
    postagem: String,
    filename: String
});

module.exports = Usuarios;