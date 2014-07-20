require.config({
	paths: {
		jquery: 'lib/jquery',
		box2d: 'lib/box2d',
		three: 'lib/three/three',
		threex: 'lib/three/threex.keyboardstate',
		jsface: 'lib/jsface'
	},
	shim: {
		box2d: {
			exports: "Box2D"
		},
		threex: {
			exports: "THREEx"
		},
		three: {
			exports: 'THREE'
		}
	}
});
require(["game"], function(Game) {
	Game.run();
})