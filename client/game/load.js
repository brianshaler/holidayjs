module.exports = {
    preload: function() {
        this.game.stage.backgroundColor = '#900';
        this.game.load.image('bird', '/assets/bird.png');
        this.game.load.image('pipe', '/assets/pipe.png');
        this.game.load.audio('jump', '/assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};
