define(['game/renderable', 'game/entities/floor'], function (Renderable, Floor) {
    return Class(Renderable, {
        constructor: function (x, y, world, physicsWorld) {
            Renderable.call(this, x, y, world, physicsWorld);
            this.under = new Floor(x, y, world, physicsWorld);
            this.radius = 40;
        }
    })
});