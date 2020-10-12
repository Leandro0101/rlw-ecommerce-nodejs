import Promotion from '../models/Promotion'
import promotionValidation from '../validations/promotion'

export default {
  async index (req, res) {
    const { page = 1 } = req.query

    const promotion = await Promotion.findAll({
      limit: 20,
      offset: (page - 1) * 20
    })

    return res.status(200).json(promotion)
  },
  async store (req, res) {
    if (!(await promotionValidation.isValid(req.body))) {
      return res.status(405).json({ error: 'Validation fails' })
    };

    const promotion = await Promotion.create(req.body)

    return res.status(200).json(promotion)
  },
  async update (req, res) {
    const { id } = req.params
    const { code, rate, expire_id, limite } = req.body

    if (!(await promotionValidation.isValid(req.body))) {
      return res.status(405).json({ error: 'Validation fails' })
    };

    const promotionExits = await Promotion.findByPk(id)

    if (!promotionExits) {
      return res.status(401).json({ error: 'Promotion not found' })
    };

    await promotionExits.update(req.body)

    return res.status(200).json({
      id: Number(id),
      code,
      rate,
      expire_id,
      limite
    })
  },
  async delete (req, res) {
    const { id } = req.params

    const promotion = await Promotion.findByPk(id)

    if (!promotion) {
      return res.status(401).json({ error: 'Promotion not found' })
    };

    await Promotion.destroy({
      where: { id }
    })

    return res.status(200).json()
  }
}
