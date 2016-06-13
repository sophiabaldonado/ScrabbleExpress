var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble()

var ScrabbleController = {
  scrabbleTitle: 'SuperScrabbleScorer',

  getIndex: function (req, res, next) {
    res.render('index', { title: this.scrabbleTitle })
  },

  getScoreForm: function (req, res) {
    res.render('score', { title: this.scrabbleTitle })
  },

  postScore: function (req, res) {
    var locals = {}
    locals.word = req.body.word
    locals.score = scrabble.score(req.body.word)

    res.render('score', { title: this.scrabbleTitle, locals: locals })
  }
}

module.exports = ScrabbleController
