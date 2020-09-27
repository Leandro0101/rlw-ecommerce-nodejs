
const Category = require("../models/Category");
const slugify = require("slugify");


module.exports ={
    async create(req,res){
        const {name,description} = req.body;
    
        const category = await Category.create({name,slug:slugify(name),description});
        return res.status(201).json(category);
<<<<<<< HEAD
    },
    async index(request,response){
        const category= await Category.findAll();
        return response.json({category});
 
=======
>>>>>>> ca4b92bc3a901b9f4f77a65041ed5bfb7b1ca27f
    }
}