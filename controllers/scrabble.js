var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble()

var ScrabbleController = {
  scrabbleTitle: 'SuperScrabbleScorer',

  getIndex: function (req, res, next) {
    res.render('index', { title: this.scrabbleTitle })
  },

  getScoreForm: function (req, res) {
    var locals = {}

    if (req.body.word) {
      locals.score = scrabble.score(req.body.word)
    }

    res.render('scoreform', { title: this.scrabbleTitle })
  }
}

module.exports = ScrabbleController