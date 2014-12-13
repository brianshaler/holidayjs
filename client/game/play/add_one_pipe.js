module.exports = function(x, y) {
    var pipe = this.pipes.getFirstDead();
    pipe.reset(x, y);
    pipe.body.velocity.x = -200;
    pipe.outOfBoundsKill = true;
};
