const Produto = require('../models/Produto')

module.exports = {

    //get all

    async index(req, res){
        const produto = await Produto.findAll();
        return res.json(produto)
    },

    //get by id

    async findByid(req, res){
        const { id } = req.params;
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        });

        return res.json(produto);
    },

    //post

    async postId(req, res){
        const { name, category, price } = req.body;
        const produto = await Produto.create({
            name, category, price
        })
        return res.json(produto);
    },

    //put

    async edit(req, res){
        const { id, name, password } = req.body;
        const produto = await Produto.update({
            name, password
        },
        {
            where: {
                id: id
            }
        }) 
        return res.json(produto);
    },

    //delete 

    async delete(req, res){
        const { id } = req.params;
        const produto = await Produto.destroy({
            where: {
                id: id
            }
        });
        return res.json(produto);
    },
}