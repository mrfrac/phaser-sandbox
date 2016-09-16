var mainState = {
	preload: function() {
		game.load.image("logo", "node_modules/phaser/phaser-logo-small.png");
	},

	create: function() {
		this.sprite = game.add.sprite(200, 150, "logo");
	},

	update: function() {
		this.sprite.angle += 1;
	}
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, "game");
game.state.add("main", mainState);
game.state.start("main");
