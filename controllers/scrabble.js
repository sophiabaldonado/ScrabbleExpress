var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble()

var ScrabbleController = {
  scrabbleTitle: 'SuperScrabbleScorer',

  getIndex: function (req, res, next) {
    res.render('index', { title: ScrabbleController.scrabbleTitle })
  },

  getScoreForm: function (req, res) {
    res.render('score', { title: ScrabbleController.scrabbleTitle })
  },

  postScore: function (req, res) {
    var locals = {}
    locals.word = req.body.word
    locals.score = scrabble.score(req.body.word)

    res.render('score', { title: ScrabbleController.scrabbleTitle, locals: locals })
  },

  scoreChart: function (req, res) {
    var locals = {}
    // var chart_keys = []
    // var chart_values
    locals.chart_keys = []
    locals.chart_values = []

    for (var key in scrabble.score_key) {
      locals.chart_keys.push(parseInt(key, 10))
      locals.chart_values.push(scrabble.score_key[key])
    }

    res.render('scorechart', { title: ScrabbleController.scrabbleTitle, locals: locals })
  }
}

module.exports = ScrabbleController
