requirejs.config({
	paths: {
		Phaser: '/vendor/phaser/build/phaser'
	},
	map: {
		'*': {
			Phaser: 'Phaser'
		}
	}
});

requirejs(['./game/game'], function (Game) {
  Game('game_div');
});
