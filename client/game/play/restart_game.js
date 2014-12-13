module.exports = function() {
    this.game.time.events.remove(this.timer);

    // This time we go back to the 'menu' state
    this.game.state.start('menu');
};
