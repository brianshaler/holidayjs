module.exports = function() {
    if (this.santa.inWorld == false)
        this.restart_game();

    if (this.santa.angle < 20)
        this.santa.angle += 1;

    this.game.physics.overlap(this.santa, this.pipes, this.hit_obstacle, null, this);
};
