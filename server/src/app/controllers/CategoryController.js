
const Category = require("../models/Category");
const slugify = require("slugify");


module.exports ={
    async create(req,res){
        const {name,description} = req.body;
    
         Category.create({
             name:name,
             slug:slugify(name),
             description:description
         }).then(()=>{
             res.status(201);
         })


    }
}