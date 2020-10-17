import express from 'express'
import UserNotificationController from '../app/controllers/UserNotificationController'
// import auth from '../app/middlewares/auth'

const routerUserNotification = express.Router()

routerUserNotification.post('/users/notifications', UserNotificationController.store)

export default routerUserNotification
