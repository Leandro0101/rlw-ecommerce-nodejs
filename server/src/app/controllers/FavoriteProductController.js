import User from '../models/User'
import Product from '../models/Product'

export default {
  async index (req, res) {
    const user = await User.findByPk(req.user.id)

    if (!user) return res.status(404).json({ error: 'Resource not found' })

    const products = await user.getProducts()

    if (products.length === 0) return res.status(404).json({ error: 'Resources not founed' })

    return res.status(200).json(products)
  },
  async store (req, res) {
    const user = await User.findByPk(req.user.id)

    if (!user) { return res.status(404).json({ error: 'Resource not found' }) }

    const { slug } = req.body
    const product = await Product.findOne({ where: { slug } })

    if (!product) {
      return res.status(404).json({ error: 'Resource not found' })
    }

    await user.addProduct(product)
    return res.status(200).json({ user, product })
  },
  async remove (req, res) {
    const user = await User.findByPk(req.user.id)

    if (!user) return res.status(404).json({ error: 'Resource not found' })

    if (req.body.slug === undefined) return res.status(405).json({ error: 'undefined slug' })

    const { slug } = req.body
    const product = await Product.findOne({ where: { slug } })

    if (!product) return res.status(404).json({ error: 'Resource not found' })

    await user.removeProduct(product)
    return res.status(200).json({ ok: true })
  }
}
