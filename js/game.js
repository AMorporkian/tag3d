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
        'game/level'
    ],
    function (Box2D, THREE, THREEx, jsface, constants, materials, geometry, World, Ball, Level) {
        var Game = Class({
            constructor: function () {
                this.setup()
            },
            setup: function(leveldata) {
                if (!leveldata) {
                    leveldata = constants.LEVELDATA['geokoala'].tiles;
                }
                if (!this.world) {
                    this.world = new World();
                } else {
                    this.world.setupScene();
                }
                this.physicsWorld = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 0), true);
                this.level = new Level(this.world, this.physicsWorld, leveldata);
                this.keyboard = new THREEx.KeyboardState();
                this.ball = new Ball(360, -720, this.world, this.physicsWorld, "red", true);
                this.ball.keyboard = this.keyboard;
                this.cameraLastChanged = 0;
                this.levelLastChanged = 0;
            },
            controlLoop: function () {
                this.ball.update();
                this.level.update();
                var d = new Date();
                var now = d.getTime();
                if (this.keyboard.pressed("c")) {
                    if (now - this.cameraLastChanged > constants.CAMERA_CHANGE_INTERVAL) {
                        this.cameraLastChanged = now;
                        if (this.world.activeCamera === this.world.perspectiveCamera) {
                            this.world.scene.remove(this.world.perspectiveCamera);
                            this.world.scene.add(this.world.camera);
                            this.world.activeCamera = this.world.camera;
                        } else {
                            this.world.scene.remove(this.world.camera);
                            this.world.scene.add(this.world.perspectiveCamera);
                            this.world.activeCamera = this.world.perspectiveCamera;
                        }
                    }
                }
                if (this.keyboard.pressed("1")) {
                        this.changeLevel('geokoala')
                } else if (this.keyboard.pressed("2")) {
                        this.changeLevel('colors')
                } else if (this.keyboard.pressed("3")) {
                    this.changeLevel("theholysee")
                } else if (this.keyboard.pressed("4")) {
                    this.changeLevel("smirk")
                } else if (this.keyboard.pressed("5")) {
                    this.changeLevel("blastoff")
                } else if (this.keyboard.pressed("6")) {
                    this.changeLevel("boombox")
                }
            },
            run: function (dontDraw) {
                if (!this.running) {
                    console.log("Run loop started.");
                    this.running = true;
                    if (!dontDraw) {
                        this.world.drawLoop();
                    }
                    this._runloop = setInterval(function () {
                        this.run()
                    }.bind(this), 1000 / 60);
                }
                this.controlLoop();
                this.physicsWorld.Step(1 / 60, 8, 3);
            },
            changeLevel: function(level) {
                var d = new Date();
                if (d.getTime() - this.levelLastChanged > 500) {
                    this.levelLastChanged = d.getTime();
                    clearInterval(this._runloop);
                    this.setup(constants.LEVELDATA[level].tiles);
                    this.running = false;
                    this.run(true);
                    //setTimeout(this.run.bind(this), 500);
                    //setTimeout(this.run(), 500);
                }


            }
        });


        var running = false;

        return new Game()
    });