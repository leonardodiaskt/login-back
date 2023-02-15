const express = require('express')
const app = express()
const Usuario = require('../models/Usuario');

module.exports = {

    //get all

    async index(req, res){
        const usuario = await Usuario.findAll();
        return res.json(usuario)
    },

    //get by id

    async findByid(req, res){
        const { id } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                id: id
            }
        });

        return res.json(usuario);
    },

    //post

    async postId(req, res){
        const { name, email, password } = req.body;
        
        const usuario = await Usuario.create({
            name, email, password, 
        })

        
        
        return res.json(usuario);
    },

    async edit(req, res){
        const { id, name, password } = req.body;
        const usuario = await Usuario.update({
            name, password
        },
        {
            where: {
                id: id
            }
        }) 
        return res.json(usuario);
    },

    async delete(req, res){
        const { id } = req.params;
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        });
        return res.json(usuario);
    },
}