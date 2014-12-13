module.exports = function () {
  this.speed += 20;
  var obstacle = this.obstacles.getFirstDead();
  obstacle.reset(485, Math.random() * 200);
  obstacle.body.velocity.x = -this.speed;
  obstacle.width = 50;
  obstacle.height = 50;
  obstacle.outOfBoundsKill = true;

  this.game.score += 1;
  this.label_score.content = this.game.score;
};
