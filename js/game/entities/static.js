define(['three', 'game/renderable', 'game/materials', 'game/constants', 'game/stacked'], function (THREE, Renderable, materials, constants, Stacked) {
    var spikeGeometry, flagGeometry, boostGeometry;
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
    loader.load("models/flag.js", function (geometry) {
        flagGeometry = geometry;
    });
    loader.load("models/boost.js", function (geometry) {
        boostGeometry = geometry;
    });
    loader.load("models/spikeyball.js", function (geometry) {
        spikeGeometry = geometry;
    });
    return {
        Wall: Class(Renderable, {
            constructor: function (x, y, world, physicsWorld) {
                Renderable.call(this, x, y, world, physicsWorld);
            },
            setupPhysics: function () {
                var bodyDef = new b2BodyDef;
                bodyDef.type = b2Body.b2_staticBody;
                bodyDef.position.Set(this.x / constants.WORLDSCALE, this.y / constants.WORLDSCALE);

                var square = new b2PolygonShape;
                square.SetAsBox(this.radius / 2 / constants.WORLDSCALE, this.radius / 2 / constants.WORLDSCALE);

                var fixtureDef = new b2FixtureDef;
                fixtureDef.density = 1;
                fixtureDef.friction = .5;
                fixtureDef.restitution = .2;
                fixtureDef.shape = square;

                this.body = this.physicsWorld.CreateBody(bodyDef);
                this.body.CreateFixture(fixtureDef);
                this.body.SetLinearDamping(.5);
            },
            setupRenderables: function () {
                this.material = materials.wallMaterial;
                this.radius = 40;
                this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
                this.world.scene.add(this.box);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = 0;
                this.box.receiveShadow = true;
            }
        }),
        TeamTile: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld, color) {
                this.$class.$super.call(this, x, y, world, physicsWorld);
                this.color = color;
            },
            setupRenderables: function () {
                var material;
                if (this.color == "red") {
                    material = materials.redFloorMaterial;
                } else {
                    material = materials.blueFloorMaterial;
                }
                this.radius = 40;
                this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), material);
                this.box.receiveShadow = true;
                this.world.scene.add(this.box);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = -this.radius+1;
            }
        }),
        Button: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
            },
            setupRenderables: function () {
                this.material = materials.buttonMaterial;
                this.radius = 8;
                this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
                this.world.scene.add(this.box);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = -20 - this.radius / 4;
            }
        }),
        Flag: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld, color) {
                Stacked.call(this, x, y, world, physicsWorld);
                this.color = color;
            },
            setupRenderables: function () {
                if (flagGeometry) {
                    if (this.color == "blue") {
                        this.material = materials.blueFlagMaterial;
                    }
                    if (this.color == "red") {
                        this.material = materials.redFlagMaterial;
                    }
                    this.radius = 40;
                    this.box = new THREE.Mesh(flagGeometry, this.material);
                    //this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
                    var scale = 20;
                    this.box.scale.set(scale, scale, scale);
                    this.box.rotateX(Math.PI / 2);
                    this.box.rotateY(Math.PI / 2);

                    this.world.scene.add(this.box);
                    this.box.position.x = this.x;
                    this.box.position.y = this.y;
                    this.box.position.z = -20;
                } else {
                    setTimeout(this.setupRenderables.bind(this), 75)
                }
            }

        }),
        EmptyGate: Class(Renderable, {
            constructor: function (x, y, world, physicsWorld, color) {
                this.$class.$super.call(this, x, y, world, physicsWorld);
                this.color = color;
                this.radius = 40;
                this.material = materials.neutralTeamTileMaterial;
                this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = -this.radius;
                this.box.receiveShadow = true;
                this.world.scene.add(this.box);

            }
        }),

        Speedpad: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
            },
            setupRenderables: function () {
                if (boostGeometry) {
                    this.material = materials.speedpadMaterial;
                    this.box = new THREE.Mesh(boostGeometry, this.material);
                    this.scale = 12;
                    this.box.scale.set(this.scale, this.scale, this.scale);
                    this.box.rotateX(Math.PI / 2);
                    this.box.position.x = this.x;
                    this.box.position.y = this.y;
                    this.box.position.z = -20;
                    this.world.scene.add(this.box);
                } else {
                    setTimeout(this.setupRenderables.bind(this), 75);
                }
            }
        }),
        Spike: Class(Stacked, {
            $statics: {
                geometry: null
            },
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
            },
            setupRenderables: function () {
                if (spikeGeometry) {
                    this.material = materials.spikeMaterial;
                    this.box = new THREE.SkinnedMesh(spikeGeometry, materials.metalMaterial, true);
                    this.box.castShadow = true;
                    var scale = 7;
                    this.box.scale.set(scale, scale, scale);
                    this.box.position.x = this.x;
                    this.box.position.y = this.y;
                    this.box.position.z = 20;
                    this.fc = 0;
                    this.world.scene.add(this.box);
                } else {
                    setTimeout(this.setupRenderables.bind(this), 75);
                }

            },
            update: function () {
                if (this.box) {
                    this.fc += 1;
                    this.box.rotateZ(-Math.PI / 45);
                    this.box.position.z = 10 + (5 * Math.sin((Math.PI / 60) * (120 + (this.fc % 120))));
                }
            }
        }),
        GreenGate: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
                this.material = materials.greenTileMaterial;
                this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = 0;
                this.world.scene.add(this.box);
            }
        }),
        Bomb: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
                this.radius = 15;
                this.material = materials.bombMaterial;
                this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = 0;
                this.world.scene.add(this.box);
            }
        }),
        Powerup: Class(Stacked, {
            constructor: function (x, y, world, physicsWorld) {
                Stacked.call(this, x, y, world, physicsWorld);
                this.radius = 15;
                this.material = materials.powerupMaterial;
                this.box = new THREE.Mesh(new THREE.SphereGeometry(this.radius, 32, 32), this.material);
                this.box.position.x = this.x;
                this.box.position.y = this.y;
                this.box.position.z = 0;
                this.world.scene.add(this.box);

            },
            update: function () {
                this.box.rotateZ(Math.PI / 90)
            }
        })
    }
});