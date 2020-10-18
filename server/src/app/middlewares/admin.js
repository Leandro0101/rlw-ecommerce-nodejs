export default (req, res, next) => {
  (req.user.admin) ? next() : res.status(401).json({ error: 'without permission to access this resource' })
}
