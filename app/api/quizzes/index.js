const { Router } = require('express')

const { Quiz } = require('../../models')

const QuestionRouter = require('./questions')

const router = new Router()

router.use('/:quizId/question', QuestionRouter)

router.get('/', (req, res) => {
  try {
    res.status(200).json(Quiz.get())
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.getById(req.params.quizId))
  } catch (err) {
    res.status(500).son(err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.delete(req.params.quizId))
  } catch (err) {
    res.status(500).son(err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    res.status(500).son(err)
  }
})

router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

module.exports = router
