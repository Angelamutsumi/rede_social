const Usuarios = require('../models/usuarios-model');

//Validação
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

function validaUsuario(form){
    let err = {};
    if(form.nome == "" || form.nome.length < 2){
        err["nome"] = "Erro no campo nome";
    }
   
    if(form.email == "" || validateEmail(form.email) == false){
        err["email"] = "Erro no campo email";
    }  
   
    if(form.postagem == "" || form.postagem.length < 2){
        err["postagem"] = "Erro no campo postagem";
    }

    return err;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Função para listar os usuários do BD
exports.listar_usuarios = (req, res)=>{
    let usuarios = Usuarios.find({}, (err, usuarios)=>{
        if(err){
            return res.status(500).send('Erro ao consultar usuario');
        }
        res.render('../views/pages/usuarios.ejs', {usuarios:usuarios});
    });
}

//Função para exibir o form de cadastro dos usuarios
exports.cadastrar_usuarios_get = (req, res, next)=>{
    res.render('pages/formUsuarios');
}

//Função para salvar usuários
exports.cadastrar_usuarios_post = (req, res)=>{
    let err = validaUsuario(req.body);
    console.log(req.body);

    if(!isEmpty(err)){
        console.log(err);
        return res.status(500).send("Algo deu errado, preencha o cadastro novamente")
    }
        
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

//Exibe o form de editar usuário
exports.editar_usuarios_get = (req, res)=>{
    Usuarios.findById(req.params.id, (err, usuario)=>{
        if(err){
            return res.status(500).send('Erro ao consultar usuário');
        }
        res.render('../views/pages/formEditarUsuarios.ejs', {usuario:usuario});
    });
}

//Função para salva a edição do usuário
exports.editar_usuarios_post = (req, res)=>{
    console.log(id=req.body.id);
    Usuarios.findById(id, (err, usuario)=>{
        if(err){
            return res.status(500).send('Erro ao consultar usuário');
        }
        usuario.nome = req.body.nome
        usuario.apelido = req.body.apelido
        usuario.email = req.body.email
        usuario.hobbies = req.body.hobbies
        usuario.educacao = req.body.educacao
        usuario.trabalho = req.body.trabalho
        usuario.postagem = req.body.postagem
        usuario.save(err=>{
            if(err){
                return res.status(500).sen('Erro ao salvar alteração');
            }
            res.redirect('/usuarios');
        });
    });
}

//Função para deletar usuários
exports.deletar_usuarios = (req, res)=>{
    id = req.params.id;
    Usuarios.deleteOne({_id: id}, (err, result)=>{
        if(err){
            return res.status(500).send('Erro ao deletar usuário')
        }
        res.redirect('/usuarios');
    });
}





