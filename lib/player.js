var Scrabble = require("./scrabble.js");
var scrabble = new Scrabble();

var Player = function(name) {
  this.name =  name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if (this.hasWon()) {
    return false;
  }
  this.plays.push(word);

  return scrabble.score(word);
}

Player.prototype.wordScores = function() {
  var scores = [];
  for (word of this.plays) {
    scores.push(scrabble.score(word));
  }

  return scores;
}

function sumTotal(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}

Player.prototype.totalScore = function() {
  if (this.plays.length <= 0) {
    return 0;
  }
  var current_scores = this.wordScores();

  return current_scores.reduce(sumTotal);
}

Player.prototype.hasWon = function() {
  var won = this.totalScore() > 100;

  return won;
}

Player.prototype.indexOfHighest = function() {
  var current_scores = this.wordScores();
  var max = Math.max.apply(null, current_scores);
  var maxIndex = current_scores.indexOf(max);

  return maxIndex;
}

Player.prototype.highestScoringWord = function() {
  return this.plays[this.indexOfHighest()];
}

Player.prototype.highestWordScore = function() {
  var scores = this.wordScores();

  return scores[this.indexOfHighest()];
}

module.exports = Player;
