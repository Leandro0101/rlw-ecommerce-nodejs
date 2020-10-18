import User from '../models/User'
import Notification from '../models/Notification'

export default {
  async store (req, res) {
    const user = await User.findByPk(1)
    const notification = await Notification.findByPk(2)

    await user.addNotification(notification)

    return res.json({ message: 'nice' })
  }
}
