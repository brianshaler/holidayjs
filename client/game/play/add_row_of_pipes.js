module.exports = function() {
    var hole = Math.floor(Math.random()*5)+1;

    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole +1)
            this.add_one_pipe(400, i*60+10);

    // Not 'this.score', but just 'score'
    this.game.score += 1;
    this.label_score.content = this.game.score;
};
