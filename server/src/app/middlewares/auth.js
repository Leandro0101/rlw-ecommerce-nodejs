import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth.json'
import { promisify } from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) { return res.status(401).json({ error: 'no token provided' }) }

  const [, token] = authHeader.split(' ')

  try {
    const { params: { id, admin } } = await promisify(jwt.verify)(token, authConfig.secret)

    req.user = { id, admin, token }

    next()
  } catch (error) {
    return res.status(401).json({ error: 'token invalid' })
  }
}
