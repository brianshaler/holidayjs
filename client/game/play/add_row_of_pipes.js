module.exports = function(x) {
    var hole = Math.floor(Math.random()*5)+1;

    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole +1)
            this.add_one_pipe(x, i*50+10-110);

    this.game.score += 1;
    this.label_score.content = this.game.score;
};
