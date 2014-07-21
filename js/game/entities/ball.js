define(['game/renderable', 'threex', 'game/world', 'box2d', 'game/materials', 'game/constants'], function (Renderable, THREEx, world, Box2D, materials, constants) {
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    return Class(Renderable, {
        constructor: function (x, y, world, physicsWorld, color, follow, w, pWorld) {
            this.$class.$super.call(this, x, y, world, physicsWorld);
            this.radius = 19;
            this.follow = follow;
            this.z = this.z + this.radius;
            this.segments = 32;
            this.rings = 32;
            this.maxSpeed = 2.5;
            this.acceleration = .025;
            if (color == "blue") {
                this.material = materials.blueBallMaterial;
            } else {
                this.material = materials.redBallMaterial;
            }
            this.sphere = new THREE.Mesh(new THREE.SphereGeometry(this.radius, this.segments, this.rings), this.material);
            this.sphere.castShadow = true;
            this.color = color;
            this.world.scene.add(this.sphere);
            this.lastAngle = 0;
            this.setupPhysics()
        },
        update: function () {

            var currentVelocity = this.body.GetLinearVelocity();
            var currentPosition = this.body.GetPosition();
            var currentAngle = this.body.GetAngle();
            var newVelocity = new Box2D.Common.Math.b2Vec2(currentVelocity.x, currentVelocity.y);
            if (this.keyboard.pressed("w") || this.keyboard.pressed("up")) {
                newVelocity.y += this.acceleration;
            }
            if (this.keyboard.pressed("a") || this.keyboard.pressed("left")) {
                newVelocity.x -= this.acceleration;
            }
            if (this.keyboard.pressed("s") || this.keyboard.pressed("down")) {
                newVelocity.y -= this.acceleration;
            }
            if (this.keyboard.pressed("d") || this.keyboard.pressed("right")) {
                newVelocity.x += this.acceleration;
            }
            if (Math.abs(newVelocity.x) > this.maxSpeed) {
                newVelocity.x = this.sign(newVelocity.x) * this.maxSpeed;
            }
            if (Math.abs(newVelocity.y) > this.maxSpeed) {
                newVelocity.y = this.sign(currentVelocity.y) * this.maxSpeed;
            }

            this.body.SetPosition(currentPosition);
            this.body.SetLinearVelocity(newVelocity);

            this.sphere.position.x = currentPosition.x * constants.WORLDSCALE;
            this.sphere.position.y = currentPosition.y * constants.WORLDSCALE;
            this.sphere.rotateZ(-this.lastAngle+currentAngle);
            this.lastAngle = currentAngle;

            this.x = currentPosition.x * constants.WORLDSCALE;
            this.y = currentPosition.y * constants.WORLDSCALE;

            if (this.follow) {
                this.world.camera.left = this.x + (constants.WIDTH / -2);
                this.world.camera.right = this.x + (constants.WIDTH / 2);
                this.world.camera.top = this.y + (constants.HEIGHT / 2);
                this.world.camera.bottom = this.y + (constants.HEIGHT / -2);

                this.world.perspectiveCamera.lookAt(new THREE.Vector3(this.x, this.y, -100));
                this.world.perspectiveCamera.position.y = this.y - this.radius * 6;
                this.world.perspectiveCamera.position.x = this.x;
                this.world.perspectiveCamera.position.z = this.z + this.radius * 12;
                this.world.camera.updateProjectionMatrix();
                this.world.perspectiveCamera.updateProjectionMatrix();

                this.world.light.position.set(this.x, this.y, 1000);
                this.world.light.target = this.sphere;
            }
        },
        setupPhysics: function () {
            this.bodyDef = new Box2D.Dynamics.b2BodyDef;
            this.bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
            this.bodyDef.position.Set(this.x / constants.WORLDSCALE, this.y / constants.WORLDSCALE);
            this.bodyDef.linearDamping = .5;
            this.bodyDef.angularDamping = .5;
            this.bodyDef.allowSleep = false;
            this.bodyDef.awake = true;

            this.shape = new Box2D.Collision.Shapes.b2CircleShape;
            this.shape.SetRadius(this.radius / constants.WORLDSCALE);

            this.fixtureDef = new Box2D.Dynamics.b2FixtureDef;
            this.fixtureDef.density = 1.0;
            this.fixtureDef.friction = .5;
            this.fixtureDef.restitution = .2;

            this.fixtureDef.shape = this.shape;
            this.body = this.physicsWorld.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixtureDef)
        },
        sign: function (x) {
            return x > 0 ? 1 : x < 0 ? -1 : 0;
        }
    });
});