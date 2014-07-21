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
                this.world = new World();
                this.physicsWorld = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 0), true);
                this.level = new Level(this.world, this.physicsWorld, constants.LEVELDATA);
                this.keyboard = new THREEx.KeyboardState();
                this.ball = new Ball(450, -500, this.world, this.physicsWorld, "red", true);
                this.ball.keyboard = this.keyboard;
                this.cameraLastChanged = 0;
            },
            controlLoop: function () {
                this.ball.update();
                this.level.update();
                if (this.keyboard.pressed("c")) {
                    var d = new Date();
                    var now = d.getTime();
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
            },
            run: function () {
                if (!running) {
                    running = true;
                    this.world.drawLoop();
                    setInterval(function () {
                        this.run()
                    }.bind(this), 1000 / 60);
                }
                this.controlLoop();
                this.physicsWorld.Step(1 / 60, 8, 3);
            }
        });


        var running = false;

        return new Game()
    });