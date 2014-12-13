var Phaser = require('Phaser');

module.exports = function() {
  this.speed = 200;
  var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  space_key.onDown.add(this.lift, this);

  this.obstacles = this.game.add.group();
  for (var i=0; i<10; i++) {
    this.obstacles.create(0, 0, 'pipe', null, false);
  }

  this.santa = this.game.add.sprite(60, 145, 'sleigh');
  this.santa.width = 75;
  this.santa.height = 44;
  this.santa.body.gravity.y = 800;
  this.santa.anchor.setTo(-0.2, 0.5);

  // Not 'this.score', but just 'score'
  this.game.score = 0;
  var style = { font: "30px Arial", fill: "#ffffff" };
  this.label_score = this.game.add.text(20, 20, "0", style);

  game = this;
  this.timer = this.game.time.events.loop(1200, this.add_obstacle, this);

  this.jump_sound = this.game.add.audio('jump');
};
