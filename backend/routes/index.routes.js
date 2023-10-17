const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json('All good in here')
})

const charactersRoutes = require('./characters.routes')
router.use('/characters', charactersRoutes)

module.exports = router
