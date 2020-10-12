import Address from '../models/Address'
import User from '../models/User'
import SchemaAddress from '../validations/address'

export default {
  async store (req, res) {
    const { userId } = req.params

    if (!await SchemaAddress.isValid(req.body)) { return res.status(405).json({ error: 'validations fails' }) }

    const { zipcode, uf, city, district, street, number } = req.body

    const user = await User.findByPk(userId)

    if (!user) { return res.status(404).json({ err: 'User not found' }) }

    const address = await Address.create({ zipcode, uf, city, district, street, number, user_id: userId })

    return res.status(201).json(address)
  },

  async show (req, res) {
    const user = await User.findByPk(req.user.id, { include: { association: 'addresses' } })

    if (user.addresses.length === 0) { return res.status(404).json({ error: 'Resource not found' }) }

    return res.status(200).json(user.addresses)
  },

  async update (req, res) {

  }
}
