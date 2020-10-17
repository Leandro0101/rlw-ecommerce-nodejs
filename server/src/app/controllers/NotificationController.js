import Notification from '../models/Notification'

export default {
  async store (req, res) {
    const notification = await Notification.create(req.body)

    return res.status(201).json(notification)
  }

}
