define([
		"box2d",
		'three',
		'threex',
		'jsface',

		'game/constants',
		'game/materials',
		'game/geometry',
		'game/world',
		'game/entities/ball',
		'game/renderable'
	],
	function(Box2D, THREE, THREEx, jsface, constants, materials, geometry, World, Ball, Renderable) {
		// set the scene size
		/*		var Game = class({
			constructor: function() {
				this.world = World();
			},
			setup: function() {
				this.level = Level(constants.LEVELDATA);

			},
			run: function() {

			}

		})*/
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
		var keyboard = new THREEx.KeyboardState();
		var world = new b2World(new b2Vec2(0, 0), true);
		var renderWorld = new World();
		var cameraLastChanged = 0;

		var spikeGeometry, flagGeometry, boostGeometry;

		var Floor = Class(Renderable, {
			constructor: function(x, y) {
				this.$class.$super.call(this, x, y);
				this.material = materials.floorMaterial;
				this.radius = 40;
				this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
				this.box.receiveShadow = true;
				renderWorld.scene.add(this.box);
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
				this.material = materials.wallMaterial;
				this.radius = 40;
				this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
				renderWorld.scene.add(this.box);
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = 0;
				this.box.receiveShadow = true;
				this.setupPhysics();
			},
			setupPhysics: function() {
				var bodyDef = new b2BodyDef;
				bodyDef.type = b2Body.b2_staticBody;
				bodyDef.position.Set(this.x / constants.WORLDSCALE, this.y / constants.WORLDSCALE);

				var square = new b2PolygonShape;
				square.SetAsBox(this.radius / 2 / constants.WORLDSCALE, this.radius / 2 / constants.WORLDSCALE);

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
				this.material = materials.buttonMaterial;
				this.radius = 8;
				this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
				renderWorld.scene.add(this.box);
				this.box.position.x = this.x;
				this.box.position.y = this.y
				this.box.position.z = -20 - this.radius / 4;
			}
		});
		var Flag = Class(Stacked, {
			constructor: function(x, y, color) {
				Stacked.call(this, x, y);
				if (color == "blue") {
					this.material = materials.blueFlagMaterial;
				}
				if (color == "red") {
					this.material = materials.redFlagMaterial;
				}
				this.radius = 40;
				this.box = new THREE.Mesh(flagGeometry, this.material);
				//this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
				var scale = 20;
				this.box.scale.set(scale, scale, scale)
				this.box.rotateX(Math.PI / 2)
				this.box.rotateY(Math.PI / 2)

				renderWorld.scene.add(this.box);
				this.box.position.x = this.x;
				this.box.position.y = this.y
				this.box.position.z = -20;
			},
			main: function() {
				loader.load("models/flag.js", function(geometry) {
					flagGeometry = geometry;
				});
			}

		});

		var TeamTile = Class(Renderable, {
			constructor: function(x, y, color) {
				this.$class.$super.call(this, x, y);
				this.color = color;
				this.radius = 40;
				this.activated = false;
				this.material = materials.neutralTeamTileMaterial;
				this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = -this.radius;
				renderWorld.scene.add(this.box);

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
				this.material = materials.speedpadMaterial
				this.box = new THREE.Mesh(boostGeometry, this.material);
				scale = 12;
				this.box.scale.set(scale, scale, scale)
				this.box.rotateX(Math.PI / 2)
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = -20;

				renderWorld.scene.add(this.box);
			},
			main: function() {
				loader.load("models/boost.js", function(geometry) {
					boostGeometry = geometry;
				})
			}
		});
		var Spike = Class(Stacked, {
			$statics: {
				geometry: null
			},
			constructor: function(x, y) {
				Stacked.call(this, x, y)
				this.material = materials.spikeMaterial;
				this.box = new THREE.SkinnedMesh(spikeGeometry, materials.metalMaterial, true);
				console.log(this.box)
				this.box.castShadow = true;
				var scale = 7;
				this.box.scale.set(scale, scale, scale)
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = 20
				this.fc = 0;
				renderWorld.scene.add(this.box);
			},
			update: function() {
				this.fc += 1;
				this.box.rotateZ(-Math.PI / 45);
				this.box.position.z = 10 + (5 * Math.sin((Math.PI / 60) * (120 + (this.fc % 120))));
			},
			main: function(S) {
				loader.load("models/spikeyball.js", function(geometry) {
					spikeGeometry = geometry;
				}.bind(this));
			}
		})
		var GreenGate = Class(Stacked, {
			constructor: function(x, y) {
				Stacked.call(this, x, y);
				this.material = materials.greenTileMaterial;
				this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = 0;
				renderWorld.scene.add(this.box);
			}
		});
		var Bomb = Class(Stacked, {
			constructor: function(x, y) {
				Stacked.call(this, x, y);
				this.radius = 15;
				this.material = materials.bombMaterial;
				this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = 0;
				renderWorld.scene.add(this.box);
			}
		});
		var Powerup = Class(Stacked, {
			constructor: function(x, y) {
				Stacked.call(this, x, y);
				this.radius = 15;
				this.material = materials.powerupMaterial;
				this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
				this.box.position.x = this.x;
				this.box.position.y = this.y;
				this.box.position.z = 0;
				renderWorld.scene.add(this.box);

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
			if (keyboard.pressed("c")) {
				var d = new Date()
				var now = d.getTime()
				if (now - cameraLastChanged > constants.CAMERA_CHANGE_INTERVAL) {
					cameraLastChanged = now;
					if (renderWorld.activeCamera === renderWorld.perspectiveCamera) {
						renderWorld.scene.remove(renderWorld.perspectiveCamera);
						renderWorld.scene.add(renderWorld.camera);
						renderWorld.activeCamera = renderWorld.camera;
					} else {
						renderWorld.scene.remove(renderWorld.camera);
						renderWorld.scene.add(renderWorld.perspectiveCamera);
						renderWorld.activeCamera = renderWorld.perspectiveCamera;
					}
				}
			}


		}

		var lastStepped;
		var mainLoop = function() {
			if (spikeGeometry && boostGeometry && flagGeometry) {
				if (!running) {
					running = true;
					worldLoop();
					ball = new Ball(450, -1200, "red", true, renderWorld, world);
					level = new Level(constants.LEVELDATA);
				}
				controlLoop();
				world.Step(1 / 60, 8, 3);
			}
		}

		setInterval(function() {


			mainLoop()


		}, constants.STEP_TIME);
		var running = false;
		var worldLoop = function() {
			requestAnimationFrame(worldLoop);
			renderWorld.renderer.render(renderWorld.scene, renderWorld.activeCamera);
		}
		return {
			run: mainLoop
		}
	})