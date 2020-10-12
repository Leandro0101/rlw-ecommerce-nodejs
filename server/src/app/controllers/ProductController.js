import Product from '../models/Product'
import Image from '../models/Image'
import Promotion from '../models/Promotion'
import Category from '../models/Category'
import slugify from 'slugify'
import productValidation from '../validations/product'

export default {
  // async upload(req,res){
  //     const {originalname:name,size,filename:key} =req.file;

  //     const saveImage= await
  //     res.json(req.file);
  // }
  async store (req, res) {
    const { name, description, price, quantity, id_category, id_promotion } = req.body
    const productExist = await Product.findOne({ where: { name } })

    if (productExist) {
      return res.status(200).json('product already exists!')
    }

    if (!(await productValidation.isValid(req.body))) {
      return res.status(405).json({ error: 'Validation fails' })
    };

    const categoryExists = await Category.findByPk(id_category)

    if (!(await categoryExists)) {
      return res.status(401).json({ error: 'Category not found' })
    }

    const product = await Product.create({ name, description, price, quantity, id_category, id_promotion, slug: slugify(name) })
    return res.status(201).json(product)
  },
  async index (req, res) {
    const product = await Product.findAll()
    return res.status(200).json({ product })
  }
}
