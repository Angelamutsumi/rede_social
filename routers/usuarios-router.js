const express = require('express');
const multer = require('multer');
const multerConfig = require('../controllers/config/multer');

const router = express.Router();

//Chama os arquivos controller para usar nas rotas
const usuariosController = require('../controllers/usuarios-controller');

//Faz a lista de usuários mas não exibe
router.get('/', usuariosController.listar_usuarios);

//Rota q exibe o form de cadastro
router.get('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_get);

//Rota para cadastrar usuarios
router.post('/cadastrarUsuarios', multer(multerConfig).single('file'), usuariosController.cadastrar_usuarios_post);

//Rota para exibir o form de edição do usuário
router.get('/editarUsuarios/:id', usuariosController.editar_usuarios_get);

//Rota para salvar usuarios editados
router.post('/editarUsuarios', multer(multerConfig).single('file'),usuariosController.editar_usuarios_post);

//Rota para deletar usuário
router.get('/deletarUsuarios/:id', usuariosController.deletar_usuarios);



module.exports = router;