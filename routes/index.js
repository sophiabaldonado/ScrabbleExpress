var express = require('express')
var router = express.Router()
var Controller = require('../controllers/scrabble.js')

/* GET home page. */
router.get('/', Controller.getIndex)

router.get('/score', Controller.getScoreForm)
router.post('/score', Controller.postScore)

module.exports = router
