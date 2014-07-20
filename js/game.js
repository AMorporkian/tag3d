// set the scene size
var WIDTH = 1280,
	HEIGHT = 720;

var $container = $('#container');

var debugLevelData = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,7,7,7,7,7,7,1,1,1,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,2,2,2,2,2,1,9,9,9,9,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,2,7,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,2,2,2,2,2,2,7,2,2,2,2,2,2,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,1,7,7,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,1,1,2,2,6.2,2,2,6.3,1],[1,1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,1,7,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1],[1,1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,7,2,2,2,2,7,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,1],[1,1,6.2,2,2,1,1,1,2,2,2,2,2,2,5,2,2,2,2,2,2,6.1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,6.3,1],[1,1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,7,2,2,2,2,7,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,1],[1,1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,1,7,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1],[1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,1,7,7,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,1,1,2,2,6.2,2,2,6.1,1],[1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,2,2,2,2,2,2,7,2,2,2,2,2,2,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,2,7,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,2,2,2,2,2,1,9,9,9,9,9,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,7,7,7,7,7,7,1,1,1,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,8,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
var xOffset = 0,
	yOffset = 0,
	zOffset = 200;
var spikeGeometry;
var boostGeometry;
var flagGeometry;
loader = new THREE.JSONLoader();
loader.load("js/spikeyball.js", function(geometry) {
	spikeGeometry = geometry;
});
loader.load("js/boost.js", function(geometry) {
	boostGeometry = geometry;
})
loader.load("js/flag.js", function(geometry) {
	flagGeometry = geometry;
})
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
	map: THREE.ImageUtils.loadTexture('img/wall.jpg'),
	//color: "black",
	bumpMap: THREE.ImageUtils.loadTexture('img/stonebump.png'),
	bumpScale: 1,
	shininess: 80
});
var redFlagMaterial = new THREE.MeshLambertMaterial({
	color: "red",
	side: THREE.DoubleSide
	//map: THREE.ImageUtils.loadTexture('img/redflag.png'),
	//transparent: true,
	//opacity: 0.99
});
var blueFlagMaterial = new THREE.MeshLambertMaterial({
	color: "blue",
	side: THREE.DoubleSide
	//map: THREE.ImageUtils.loadTexture('img/blueflag.png'),
	//transparent: true,
	//opacity: 0.99
});
var neutralTeamTileMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/teamtile_unactivated.png')
});
var buttonMaterial = new THREE.MeshLambertMaterial({
	color: 'green',
	//transparent: true,
});
var speedpadMaterial = new THREE.MeshLambertMaterial({
	color: 'orange',
	//map: THREE.ImageUtils.loadTexture('img/speedpad.png'),
	//transparent: true,
});
var spikeMaterial = new THREE.MeshLambertMaterial({
	map: THREE.ImageUtils.loadTexture('img/spike.png'),
	transparent: true,
});
var greenTileMaterial = new THREE.MeshPhongMaterial({
	color: 0x00FF00,
	map: THREE.ImageUtils.loadTexture('img/gatemap.png'),
	size: .1,
	specular: "green",
	bumpMap: THREE.ImageUtils.loadTexture('img/gate.png'),
	specularMap: THREE.ImageUtils.loadTexture('img/gatemap.png'),
	transparent: true,
	opacity: .8
});
var bombMaterial = new THREE.MeshPhongMaterial({
	color: 'black'

});
var powerupMaterial = new THREE.MeshPhongMaterial({
	color: 'green',
	map: THREE.ImageUtils.loadTexture('img/gatemap.png'),
	bumpMap: THREE.ImageUtils.loadTexture('img/gate.png'),
	specularMap: THREE.ImageUtils.loadTexture('img/gatemap.png'),
	specular: "white",
	shininess: .5,
	transparent: true,
	opacity: .5

});
var metalMaterial = new THREE.MeshPhongMaterial({
	map: THREE.ImageUtils.loadTexture('img/metal10.png'),
	normalMap: THREE.ImageUtils.loadTexture('img/metal10nm.png'),
	specularMap: THREE.ImageUtils.loadTexture('img/metal10nm.png'),
	specular: 'grey',
	shading: THREE.FlatShading,
	metal: true,
	//color: "black",
});

var sign = function(x) {
	return x > 0 ? 1 : x < 0 ? -1 : 0;
}
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 200;
perspectiveCamera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT, 40, -40)
perspectiveCamera.position.x = 100;
perspectiveCamera.position.y = 0;
perspectiveCamera.position.z = 200;

// start the renderer
renderer.setSize(WIDTH, HEIGHT);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;

var worldScale = 100;
// attach the render-supplied DOM element
$container.append(renderer.domElement);


scene.add(camera);

var activeCamera = camera;

//var ambientLight = new THREE.AmbientLight(0x0C0C0C);
var spotlight = new THREE.DirectionalLight(0xFFFFFF, 1);
spotlight.position.set(200, 200, 800);
spotlight.castShadow = true;
spotlight.shadowMapWidth = 1024;
spotlight.shadowMapHeight = 1024;
//spotlight.shadowCameraNear = 50;
//spotlight.shadowCameraFar = 4096;
//spotlight.shadowCameraRight = 4096;
//spotlight.shadowCameraLeft = -500;
//spotlight.shadowCameraTop = 500;
//spotlight.shadowCameraBottom = -4096;

//scene.add(ambientLight);
scene.add(spotlight);

var keyboard = new THREEx.KeyboardState();

var world = new b2World(new b2Vec2(0, 0), true);

var cameraLastChanged = 0;

var geometry = new THREE.SphereGeometry(3000, 60, 40);
var uniforms = {
	texture: {
		type: 't',
		value: THREE.ImageUtils.loadTexture('img/skydome.png')
	}
};

var material = new THREE.ShaderMaterial({
	uniforms: uniforms,
	vertexShader: document.getElementById('sky-vertex').textContent,
	fragmentShader: document.getElementById('sky-fragment').textContent
});

skyBox = new THREE.Mesh(geometry, material);
skyBox.scale.set(-5, 5, 5);
skyBox.eulerOrder = 'XZY';
skyBox.renderDepth = 1000.0;
scene.add(skyBox);

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
		this.maxSpeed = 2.5;
		this.acceleration = .025;
		if (color == "blue") {
			this.material = new THREE.MeshPhongMaterial({
				color: 'blue',
				shininess: 80,
				bumpMap: THREE.ImageUtils.loadTexture('img/ballbump.png'),

			});
		} else {
			this.material = new THREE.MeshPhongMaterial({
				color: 'red',
				shininess: 80,
				bumpMap: THREE.ImageUtils.loadTexture('img/ballbump.png'),
			});
		}
		this.sphere = new THREE.Mesh(new THREE.SphereGeometry(this.radius, this.segments, this.rings), this.material);
		this.sphere.castShadow = true;
		this.color = color;
		scene.add(this.sphere);
		this.setupPhysics()
	},
	update: function() {

		var currentVelocity = this.body.GetLinearVelocity()
		var currentPosition = this.body.GetPosition()
		var currentAngle = this.body.GetAngle()
		var newVelocity = new b2Vec2(currentVelocity.x, currentVelocity.y)
		if (keyboard.pressed("w") || keyboard.pressed("up")) {
			newVelocity.y += this.acceleration;
		}
		if (keyboard.pressed("a") || keyboard.pressed("left")) {
			newVelocity.x -= this.acceleration;
		}
		if (keyboard.pressed("s") || keyboard.pressed("down")) {
			newVelocity.y -= this.acceleration;
		}
		if (keyboard.pressed("d") || keyboard.pressed("right")) {
			newVelocity.x += this.acceleration;
		}
		if (Math.abs(newVelocity.x) > this.maxSpeed) {
			newVelocity.x = sign(newVelocity.x) * this.maxSpeed;
		}
		if (Math.abs(newVelocity.y) > this.maxSpeed) {
			newVelocity.y = sign(currentVelocity.y) * this.maxSpeed;
		}

		this.body.SetPosition(currentPosition);
		this.body.SetLinearVelocity(newVelocity);
		//this.body.SetAngle(currentAngle);



		//var rotObjectMatrix = new THREE.Matrix4();

		//rotObjectMatrix.makeRotationAxis(new THREE.Vector3(1, 0, 0).normalize(), currentAngle.x);

		//this.sphere.matrix.multiply(rotObjectMatrix);
		//this.sphere.rotation.setFromRotationMatrix(this.sphere.matrix);

		this.sphere.position.x = currentPosition.x * worldScale;
		this.sphere.position.y = currentPosition.y * worldScale;
		//console.log(this.sphere.position)

		this.x = currentPosition.x * worldScale
		this.y = currentPosition.y * worldScale

		if (this.follow) {
			camera.left = this.x + (WIDTH / -2);
			camera.right = this.x + (WIDTH / 2);
			camera.top = this.y + (HEIGHT / 2);
			camera.bottom = this.y + (HEIGHT / -2);

			perspectiveCamera.lookAt(new THREE.Vector3(this.x, this.y, -100));
			perspectiveCamera.position.y = this.y - this.radius * 6;
			perspectiveCamera.position.x = this.x;
			perspectiveCamera.position.z = this.z + this.radius * 12;
			camera.updateProjectionMatrix();
			perspectiveCamera.updateProjectionMatrix();

			spotlight.position.set(this.x, this.y, 800)
			spotlight.target = this.sphere;
		}
	},
	setupPhysics: function() {
		this.bodyDef = new b2BodyDef;
		this.bodyDef.type = b2Body.b2_dynamicBody;
		this.bodyDef.position.Set(this.x / worldScale, this.y / worldScale);
		this.bodyDef.linearDamping = .5;
		this.bodyDef.angularDamping = .5;
		this.bodyDef.allowSleep = false;
		this.bodyDef.awake = true;

		this.shape = new b2CircleShape;
		this.shape.SetRadius(this.radius / worldScale);

		this.fixtureDef = new b2FixtureDef;
		this.fixtureDef.density = 1.0;
		this.fixtureDef.friction = .5
		this.fixtureDef.restitution = .2

		this.fixtureDef.shape = this.shape
		this.body = world.CreateBody(this.bodyDef)
		this.body.CreateFixture(this.fixtureDef)
	}
});

var Floor = Class(Renderable, {
	constructor: function(x, y) {
		this.$class.$super.call(this, x, y);

		this.material = floorMaterial;

		this.radius = 40;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		this.box.receiveShadow = true;
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
		this.box.receiveShadow = true;
		this.setupPhysics();
	},
	setupPhysics: function() {
		var bodyDef = new b2BodyDef;
		bodyDef.type = b2Body.b2_staticBody;
		bodyDef.position.Set(this.x / worldScale, this.y / worldScale);

		var square = new b2PolygonShape;
		square.SetAsBox(this.radius / 2 / worldScale, this.radius / 2 / worldScale);

		var fixtureDef = new b2FixtureDef;
		fixtureDef.density = 1
		fixtureDef.friction = .5
		fixtureDef.restitution = .2
		fixtureDef.shape = square

		this.body = world.CreateBody(bodyDef);
		this.body.CreateFixture(fixtureDef);
		this.body.SetLinearDamping(.5);
		this.body.Set

	}
});

var Button = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y);
		this.material = buttonMaterial;
		this.radius = 8;
		this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y
		this.box.position.z = -20 - this.radius / 4;
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
		this.box = new THREE.Mesh(flagGeometry, this.material);
		var scale = 20;
		this.box.scale.set(scale, scale, scale)
		this.box.rotateX(Math.PI / 2)
		this.box.rotateY(Math.PI / 2)

		scene.add(this.box);
		this.box.position.x = this.x;
		this.box.position.y = this.y
		this.box.position.z = -20;
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
		this.box = new THREE.Mesh(boostGeometry, this.material);
		scale = 12;
		this.box.scale.set(scale, scale, scale)
		this.box.rotateX(Math.PI / 2)
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = -20;

		scene.add(this.box);
	}
});
var Spike = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y)
		this.material = spikeMaterial;
		this.box = new THREE.SkinnedMesh(spikeGeometry, metalMaterial, true);
		this.box.castShadow = true;
		var scale = 7;
		this.box.scale.set(scale, scale, scale)
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = 0


		this.fc = 0;
		scene.add(this.box);
	},
	update: function() {
		this.fc += 1;
		this.box.rotateZ(-Math.PI / 45);
		this.box.position.z = 10 + (5 * Math.sin((Math.PI / 60) * (120 + (this.fc % 120))));
	}
})
var GreenGate = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y);
		this.material = greenTileMaterial;
		this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = 0;
		scene.add(this.box);
	}
});
var Bomb = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y);
		this.radius = 15;
		this.material = bombMaterial;
		this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = 0;
		scene.add(this.box);
	}
});
var Powerup = Class(Stacked, {
	constructor: function(x, y) {
		Stacked.call(this, x, y);
		this.radius = 15;
		this.material = powerupMaterial;
		this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
		this.box.position.x = this.x;
		this.box.position.y = this.y;
		this.box.position.z = 0;
		scene.add(this.box);

	},
	update: function() {
		this.box.rotateZ(Math.PI / 90)

	}
});


var Level = Class({
	constructor: function(levelData) {
		this.tiles = []
		this.updateables = [];
		for (var i = 0; i < levelData.length; i++) {
			var currentColumn = levelData[i];
			var tileColumn = [];

			for (var j = 0; j < currentColumn.length; j++) {
				var tile;
				var updateable = false;
				switch (currentColumn[j]) {
					case 0:
						break;
					case 1:
						tile = new Wall(i * 40, -j * 40);
						break;
					case 2:
						tile = new Floor(i * 40, -j * 40);
						break;
					case 3:
						tile = new Flag(i * 40, -j * 40, "red");
						break;
					case 4:
						tile = new Flag(i * 40, -j * 40, "blue");
						break;
					case 5:
						tile = new Speedpad(i * 40, -j * 40);
						break;
					case 6.2:
						tile = new Powerup(i * 40, -j * 40);
						updateable = true;
						break;
					case 6.3:
						tile = new Powerup(i * 40, -j * 40);
						updateable = true;
						break;
					case 7:
						tile = new Spike(i * 40, -j * 40);
						updateable = true;
						break;
					case 8:
						tile = new Button(i * 40, -j * 40);
						break;
					case 9:
						tile = new TeamTile(i * 40, -j * 40, "red");
						break;
					case 9.1:
						tile = new GreenGate(i * 40, -j * 40);
						break;
					case 10:
						tile = new Bomb(i * 40, -j * 40);
						break;
					default:
						tile = new Floor(i * 40, -j * 40);
						break;
				}
				if (tile) {
					tileColumn.push(tile);
				}
				if (updateable) {
					this.updateables.push(tile);
				}
			}
			this.tiles.push(tileColumn);
		}
	},
	update: function() {
		for (var i = 0; i < this.updateables.length; i++) {
			this.updateables[i].update();
		}

	}
})

var ball;
var level;

var controlLoop = function() {
	ball.update();
	level.update();
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
		var d = new Date()
		var now = d.getTime()
		if (now - cameraLastChanged > 500) {
			cameraLastChanged = now;
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
	}


}

var lastStepped;
var renderLoop = function() {

	requestAnimationFrame(renderLoop);
	renderer.render(scene, activeCamera);
}
var mainLoop = function() {
	if (spikeGeometry) {
		if (!ball) {
			ball = new Ball(450, -1200, "red", true);
		}
		if (!level) {
			level = new Level(debugLevelData);
		}
		controlLoop();
		world.Step(1 / 60, 8, 3);
	}
}
var stats = new Stats();
stats.setMode(1); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '1024px';
stats.domElement.style.top = '0px';

document.body.appendChild(stats.domElement);

setInterval(function() {


	mainLoop()


}, 1000 / 60);

renderLoop();