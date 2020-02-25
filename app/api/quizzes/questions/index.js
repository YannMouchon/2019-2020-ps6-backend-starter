const { Router } = require('express')
const { Question } = require('../../../models')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    res.status(200).json(Question.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
