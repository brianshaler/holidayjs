module.exports = function() {
    if (this.santa.alive == false)
        return;

    this.santa.alive = false;
    this.game.time.events.remove(this.timer);

    this.pipes.forEachAlive(function(p){
        p.body.velocity.x = 0;
    }, this);
};
