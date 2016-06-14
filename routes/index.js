var express = require('express')
var router = express.Router()
var Controller = require('../controllers/scrabble.js')

/* GET home page. */
router.get('/', Controller.getIndex)

router.get('/scrabble/score', Controller.getScoreForm)
router.post('/scrabble/score', Controller.postScore)

router.get('/scrabble/score/:word', Controller.postScore)
router.post('/scrabble/score/:word', Controller.postScore)

router.get('/scrabble/chart', Controller.scoreChart)

module.exports = router
