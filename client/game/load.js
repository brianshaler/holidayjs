module.exports = {
    preload: function() {
        this.game.stage.backgroundColor = '#900';
        this.game.load.image('bird', '/assets/santa2.png');
        this.game.load.image('pipe', '/assets/heart.png');
        this.game.load.image('border-black', '/assets/border1-black.png');
        this.game.load.image('border-green', '/assets/border1-green.png');
        this.game.load.image('border-red', '/assets/border1-red.png');
        this.game.load.image('border-white', '/assets/border1-white.png');
        this.game.load.image('heart-red', '/assets/heart-red.png');
        this.game.load.image('heart-black', '/assets/heart-black.png');
        this.game.load.image('heart-green', '/assets/heart-green.png');
        this.game.load.image('heart-white', '/assets/heart-white.png');
        this.game.load.image('penguin-black', '/assets/penguin-black.png');
        this.game.load.image('penguin-red', '/assets/penguin.png');
        this.game.load.image('penguin-white', '/assets/penguin-white.png');
        this.game.load.image('penguin-green', '/assets/penguin-green.png');
        this.game.load.image('santa', '/assets/santa2.png');
        this.game.load.image('snowflake-black', '/assets/snoflake2-black.png');
        this.game.load.image('snowflake-black', '/assets/snoflake2-black.png');
        this.game.load.image('snowflake-green', '/assets/snoflake2-green.png');
        this.game.load.image('snowflake-red', '/assets/snoflake2-red.png');
        this.game.load.image('snowflake-white', '/assets/snoflake2-white.png');
        this.game.load.image('snowflake-black-alt', '/assets/snowflake-black.png');
        this.game.load.image('snowflake-black-alt', '/assets/snowflake-black.png');
        this.game.load.image('snowflake-green-alt', '/assets/snowflake-green.png');
        this.game.load.image('snowflake-red-alt', '/assets/snowflake-red.png');
        this.game.load.image('snowflake-white-alt', '/assets/snowflake-white.png');
        this.game.load.image('tree-black', '/assets/tree-black.png');
        this.game.load.image('tree-red', '/assets/tree-red.png');
        this.game.load.image('tree-green', '/assets/tree-green.png');
        this.game.load.image('tree-white', '/assets/tree-white.png');
        this.game.load.audio('jump', '/assets/ho.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};
