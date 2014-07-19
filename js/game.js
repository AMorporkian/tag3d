// set the scene size
var WIDTH = 1024,
	HEIGHT = 768;

var $container = $('#container');

var debugLevelData = [[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,2,2,7,2,2,2,2,2,2,2,2,2,7,2,2,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,6.3,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0],[1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,1,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,5,2,2,1,7,2,2,7,7,2,7,7,7,2,7,7,7,7,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,2,2,2,7,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,6.1,2,2,2,2,7,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,3,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,5,2,2,2,5,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,1,1,9.1,9.1,9.1,1,1,1,1,1,2,2,2,2,2,2,2,5,5,2,5,5,2,2,2,2,2,2,2,1,1,1,1,1,9.1,9.1,9.1,1,1,1],[1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,6.1,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,6.2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,6.3,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],[1,1,1,9.1,9.1,9.1,1,1,1,1,1,2,2,2,2,2,2,2,5,5,2,5,5,2,2,2,2,2,2,2,1,1,1,1,1,9.1,9.1,9.1,1,1,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,5,2,2,2,5,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,8,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,4,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,7,2,2,2,2,6.1,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,7,2,2,2,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,1,2,7,7,7,7,2,7,7,7,2,7,7,2,2,7,1,2,2,5,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,1,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1],[0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,6.3,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,2,2,7,2,2,2,2,2,2,2,2,2,7,2,2,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]];

var xOffset = 0,
	yOffset = 0,
	zOffset = 200;
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

var renderer = new THREE.WebGLRenderer({
	antialias: true
});
var camera = new THREE.OrthographicCamera(WIDTH / -2, WIDTH / 2, HEIGHT / 2, HEIGHT / -2, 1, 1000);
var scene = new THREE.Scene();

var floorMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/floor.png')
});
var wallMaterial = new THREE.MeshPhongMaterial({
	map: THREE.ImageUtils.loadTexture('img/stonebump.png'),
	bumpMap: THREE.ImageUtils.loadTexture('img/stonebump.png'),
	bumpScale: 10
});
var redFlagMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/redflag.png'),
	transparent: true,
	//opacity: 0.99
});
var blueFlagMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/blueflag.png'),
	transparent: true,
	//opacity: 0.99
});
var neutralTeamTileMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/teamtile_unactivated.png')
});
var buttonMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/button.png'),
	transparent: true,
});
var speedpadMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/speedpad.png'),
	transparent: true,
});
var spikeMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/spike.png'),
	transparent: true,
});
var greenTileMaterial = new THREE.MeshLambertMaterial({
	color: 'green',
	opacity: .5
});
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 200;
perspectiveCamera = new THREE.PerspectiveCamera(90, WIDTH / HEIGHT, 40, -40)
perspectiveCamera.position.x = 100;
perspectiveCamera.position.y = 0;
perspectiveCamera.position.z = 200;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);

// attach the render-supplied DOM element
$container.append(renderer.domElement);

// create the sphere's material

scene.add(camera);
var activeCamera = camera;

var spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.castShadow = false;
spotLight.position.x = 000;
spotLight.position.y = 000;
spotLight.position.z = 10000;

scene.add(spotLight);
var keyboard = new THREEx.KeyboardState();

var Renderable = Class({
	constructor: function(x, y) {
		this.x = x;
		this.y = y;
		this.z = 0;
	},
	update: function() {}
});

var Ball = Class(Renderable, {
	constructor: function(x, y, color, follow) {
		this.$class.$super.call(this, x, y);
		this.radius = 19;
		this.follow = follow;
		this.z = this.z + this.radius;
		this.segments = 32;
		this.rings = 32;
		if (color == "blue") {
			this.material = new THREE.MeshPhongMaterial({
				color: 'blue'
			});
		} else {
			this.material = new THREE.MeshPhongMaterial({
				color: 'red'
			});
		}
		this.sphere = new THREE.Mesh(new THREE.SphereGeometry(this.radius, this.segments, this.rings), this.material);
		this.color = color;
		scene.add(this.sphere);
	},
	update: function() {
		this.sphere.position.x = this.x;
		this.sphere.position.y = this.y;
		if (this.follow) {
			camera.left = this.x + (WIDTH / -2);
			camera.right = this.x + (WIDTH / 2);
			camera.top = this.y + (HEIGHT / 2);
			camera.bottom = this.y + (HEIGHT / -2);

			perspectiveCamera.lookAt(new THREE.Vector3(this.x, this.y, 0));
			perspectiveCamera.position.y = yOffset;
			perspectiveCamera.position.x = xOffset;
			perspectiveCamera.position.z = zOffset;
			camera.updateProjectionMatrix();
			perspectiveCamera.updateProjectionMatrix();
		}
	}
});

var Floor = Class(Renderable, {
	constructor: function(x, y) {
		this.$class.$super.call(this, x, y);

		this.material = floorMaterial;

		this.radius = 40;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = -this.radius;

	}
});

var Stacked = Class(Renderable, {
	constructor: function(x, y) {
		Renderable.call(this, x, y);
		this.under = new Floor(x, y);
		this.radius = 40;
	}
});
var Wall = Class(Renderable, {
	constructor: function(x, y) {
		this.$class.$super.call(this, x, y);
		this.material = wallMaterial;
		this.radius = 40;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = 0;
	}
});

var Button = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y);
		this.material = buttonMaterial;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y
		this.box.position.z = -this.radius + 1;
	}
});
var Flag = Class(Stacked, {
	constructor: function(x, y, color) {
		Stacked.call(this, x, y);
		if (color == "blue") {
			this.material = blueFlagMaterial;
		}
		if (color == "red") {
			this.material = redFlagMaterial;
		}
		this.radius = 40;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y
		this.box.position.z = -this.radius + 1;
	}
});

var TeamTile = Class(Renderable, {
	constructor: function(x, y, color) {
		this.$class.$super.call(this, x, y);
		this.color = color;
		this.radius = 40;
		this.activated = false;
		this.material = neutralTeamTileMaterial;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = -this.radius;
		scene.add(this.box);

	}
});

var Animated = Class(Renderable, {
	constructor: function(x, y) {
		Renderable.call(x, y);
		this.frameCount = 0;
	},
	update: function() {
		this.frameCount++;
	}
})

var Speedpad = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y)
		this.material = speedpadMaterial
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = -this.radius + 1;
		scene.add(this.box);
	}
});
var Spike = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y)
		this.material = spikeMaterial;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = -this.radius + 1;
		scene.add(this.box);
	}
})
var Level = Class({
	constructor: function(levelData) {
		this.tiles = []
		for (var i = 0; i < levelData.length; i++) {
			var currentColumn = levelData[i];
			var tileColumn = [];
			for (var j = 0; j < currentColumn.length; j++) {
				switch (currentColumn[j]) {
					case 0:
						break;
					case 1:
						tileColumn.push(new Wall(i * 40, -j * 40));
						break;
					case 2:
						tileColumn.push(new Floor(i * 40, -j * 40));
						break;
					case 3:
						tileColumn.push(new Flag(i * 40, -j * 40, "red"));
						break;
					case 4:
						tileColumn.push(new Flag(i * 40, -j * 40, "blue"));
						break;
					case 5:
						tileColumn.push(new Speedpad(i * 40, -j * 40));
						break;
					case 7:
						tileColumn.push(new Spike(i * 40, -j * 40));
						break;
					case 8:
						tileColumn.push(new Button(i * 40, -j * 40));
						break;
					case 9:
						tileColumn.push(new TeamTile(i * 40, -j * 40, "red"));
						break;
					default:
						tileColumn.push(new Floor(i * 40, -j * 40));
						break;
				}
				this.tiles.push(tileColumn);
			}
		}
	},
	update: function() {
		for (var i = 0; i < this.tiles.length; i++) {
			for (var j = 0; j < this.tiles.length; j++) {
				this.tiles[i][j].update();
			}
		}
	}
})

var ball = new Ball(0, 0, "blue", true);
var level = new Level(debugLevelData);
var controlLoop = function() {
	ball.update();

	//floor.update();
	if (keyboard.pressed("r")) {
		zOffset += 5;
	}
	if (keyboard.pressed("t")) {
		zOffset -= 5;
	}
	if (keyboard.pressed("y")) {
		xOffset += 5;
	}
	if (keyboard.pressed("u")) {
		xOffset -= 5;
	}
	if (keyboard.pressed("i")) {
		yOffset += 5;
	}
	if (keyboard.pressed("o")) {
		yOffset -= 5;
	}

	if (keyboard.pressed("c")) {
		if (activeCamera === perspectiveCamera) {
			scene.remove(perspectiveCamera);
			scene.add(camera);
			activeCamera = camera;
		} else {
			scene.remove(camera);
			scene.add(perspectiveCamera);
			activeCamera = perspectiveCamera;
		}
	}
	
	if (keyboard.pressed("w") || keyboard.pressed("up")) {
		ball.y += 3;
	}
	if (keyboard.pressed("a") || keyboard.pressed("left")) {
		ball.x -= 3;
	}
	if (keyboard.pressed("s") || keyboard.pressed("down")) {
		ball.y -= 3;
	}
	if (keyboard.pressed("d") || keyboard.pressed("right")) {
		ball.x += 3;
	}

}


var renderLoop = function() {
	renderer.render(scene, activeCamera);
}
var mainLoop = function() {
	controlLoop();
	renderLoop();
}
var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '1200px';
stats.domElement.style.top = '0px';

document.body.appendChild(stats.domElement);

setInterval(function() {

	stats.begin();

	mainLoop()

	stats.end();

}, 1000 / 60);