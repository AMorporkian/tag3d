define(['jsface'], function (jsface) {
    return Class({
        geometry: null,
        constructor: function (x, y, world, physicsWorld) {
            this.x = x;
            this.y = y;
            this.z = 0;
            this.world = world;
            this.physicsWorld = physicsWorld;
        },
        update: function () {
        },
        setupPhysics: function () {
        },
        setupRenderables: function () {
        }
    });
});