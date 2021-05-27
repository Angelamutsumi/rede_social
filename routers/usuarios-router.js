const express = require('express');

const router = express.Router();

//Chama os arquivos controller para usar nas rotas
const usuariosController = require('../controllers/usuarios-controller');

//Faz a lista de usuários mas não exibe
router.get('/', usuariosController.listar_usuarios);

//Rota q exibe o form de cadastro
router.get('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_get);

//Rota para cadastrar usuarios
router.post('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_post);



module.exports = router;