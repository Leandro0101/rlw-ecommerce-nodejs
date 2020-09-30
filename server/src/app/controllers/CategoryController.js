import Category from "../models/Category";
import slugify from "slugify";
import categoryValidation from "../validations/category";



export default{
    async create(req,res){
        const {name,description} = req.body;

        if (!(await categoryValidation.isValid(req.body))) {
           return res.status(405).json({ error: 'Validation fails' });
        };
    
        const category = await Category.create({name,slug:slugify(name),description});
        return res.status(201).json(category);

    },
    async index(req,res){
        const category= await Category.findAll();
        return res.json({category});
    },
    
    async update(req,res){
        const { id } = req.params;
        
        const {name,description} = req.body;

        if (!(await categoryValidation.isValid(req.body))) {
            return res.status(405).json({ error: 'Validation fails' });
        };
        const categoryExists = await Category.findByPk(id);

        if(!(await categoryExists)){
            return res.status(401).json({error:'Category not found'});
        }

        const category = await categoryExists.update({ name,description,slug:slugify(name)});
        return res.status(200).json({category})
    },
    async delete(req,res){
        const { id } = req.params;

        const categoryExists = await Category.findByPk(id);

        if(! categoryExists){
            return res.status(401).json({error:'Category not found'});
        }

        await categoryExists.destroy({where:id})
        return res.status(200).json();
    }
}
