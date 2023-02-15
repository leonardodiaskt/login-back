const {Model, DataTypes} = require('sequelize')

const types = ["Camiseta", "Tênis", "Moletom", "Calça", "Corta-vento", "Boné", "Bermuda"];

class Produto extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            category: DataTypes.ENUM(types),
            price: DataTypes.DECIMAL
        },
        {
            sequelize
        })
    }
}

module.exports = Produto;