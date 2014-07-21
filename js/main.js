require.config({
	paths: {
		jquery: 'lib/jquery',
		box2d: 'lib/box2d',
		three: 'lib/three/three',
		threex: 'lib/three/threex.keyboardstate',
		jsface: 'lib/jsface',
		microcache: 'lib/microcache',
        stats: 'lib/three/stats'
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
		},
        stats: {
            exports: 'Stats'
        }
	}
});
require(["game"], function(Game) {
	Game.run();
});