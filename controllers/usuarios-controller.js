const Usuarios = require('../models/usuarios-model');

//Validação

//Função para listar os clientes do BD
exports.listar_usuarios = (req, res)=>{
    let usuarios = Usuarios.find({}, (err, usuarios)=>{
        if(err){
            return res.status(500).send('Erro ao consultar usuario');
        }
        res.render('../views/pages/usuarios.ejs', {usuarios:usuarios});
    });
}

//Função para exibir o form de cadastro dos usuarios
exports.cadastrar_usuarios_get = (req, res)=>{
    res.render('pages/formUsuarios');
}