const Category = require("../models/Category");

module.exports = {
    async store(req, res){
        const category = await Category.create(req.body);

        res.status(201).json(category);
    },
    async index(req, res){
        const categories = await Category.findAll({
            order: [ [ "id", "DESC" ] ]
        });

        res.status(200).json(categories);
    }
}