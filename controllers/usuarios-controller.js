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

//Função para salvar usuários
exports.cadastrar_usuarios_post = (req, res)=>{
    console.log(req.body);
    
    //Incluir validação

    let usuario = new Usuarios();
    usuario.nome = req.body.nome
    usuario.apelido = req.body.apelido
    usuario.email = req.body.email
    usuario.hobbies = req.body.hobbies
    usuario.educacao = req.body.educacao
    usuario.trabalho = req.body.trabalho
    usuario.postagem = req.body.postagem
    usuario.save(err=>{
        if(err){
            return res.status(500).send('Erro ao cadastrar usuário');
        }
        return res.redirect('/usuarios');
    });
}