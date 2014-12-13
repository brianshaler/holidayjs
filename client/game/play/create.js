var Phaser = require('Phaser');

module.exports = function() {
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.lift, this);

    this.pipes = this.game.add.group();
    this.pipes.createMultiple(20, 'pipe');
    this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);

    this.santa = this.game.add.sprite(100, 245, 'bird');
    this.santa.body.gravity.y = 1000;
    this.santa.anchor.setTo(-0.2, 0.5);

    // Not 'this.score', but just 'score'
    this.game.score = 0;
    var style = { font: "30px Arial", fill: "#ffffff" };
    this.label_score = this.game.add.text(20, 20, "0", style);

    this.jump_sound = this.game.add.audio('jump');
};
