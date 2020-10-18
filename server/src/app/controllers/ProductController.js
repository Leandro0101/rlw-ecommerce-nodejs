import Product from '../models/Product'
import Image from '../models/Image'
import Promotion, { update } from '../models/Promotion'
import Category from '../models/Category'
import slugify from 'slugify'
import productValidation from '../validations/product'

export default {
   async upload(req,res){
      const { id_product } = req.params
      const {originalname:name,filename:key,size} = req.file

      // const saveImage = await  Image.create(name,key,size,id_product)
  },
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
  async update(){
    const { id } = req.params
    const { name, description, price, quantity, id_category, id_promotion } = req.body
    
    if (!(await productValidation.isValid(req.body))) {
      return res.status(405).json({ error: 'Validation fails' })
      
    };
    const ProductExists = await Product.findByPk(id)

    if (!(await ProductExists)) {
      return res.status(404).json({ error: 'Product not found' })
    }
    await ProductExists.update(req.body)
    return res.status(200).json({
         name,
         description,
         price,
         quantity, 
         id_category, 
         id_promotion
       })
  },
  async index (req, res) {
    const product = await Product.findAll()
    return res.status(200).json({ product })
  },
  // async promotion(req,res){
  //     const {code,id_product} =req.body

  //     const codyExist = await Promotion.findOne({ where: { code } })

  //     if((await !codyExist)){
  //       return res.status(401).json({ error: 'code ivalid' })
  //     }
  //     res.json(codyExist.rate)
  // }
}
