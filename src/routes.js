const express = require('express');
const ProdutoController = require('./controller/ProdutoController')
const UsuarioController = require('./controller/UsuarioController')
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Teste")
})

//usuario

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.findByid)
routes.post('/usuario', UsuarioController.postId)
routes.delete('/usuario/:id', UsuarioController.delete)
routes.put('/usuario', UsuarioController.edit)

//produto
routes.get('/produto', ProdutoController.index);
routes.get('/produto/:id', ProdutoController.findByid);
routes.post('/produto', ProdutoController.postId);
routes.delete('/produto/:id', ProdutoController.delete);
routes.put('/produto', ProdutoController.edit);


module.exports = routes;