var Phaser = require('Phaser');
var Load = require('./load');
var Menu = require('./menu');
var Play = require('./play');

module.exports = function (elementId) {

  var game = new Phaser.Game(485, 235, Phaser.AUTO, elementId);

  // Our 'score' global variable
  var score = 0;

  // Define all the states
  game.state.add('load', Load);
  game.state.add('menu', Menu);
  game.state.add('play', Play);

  // Start with the 'load' state
  game.state.start('load');

};
