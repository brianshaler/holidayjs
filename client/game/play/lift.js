module.exports = function() {
    if (this.santa.alive == false)
        return;

    this.santa.body.velocity.y = -250;
    this.game.add.tween(this.santa).to({angle: -20}, 100).start();
    this.jump_sound.play();
};
