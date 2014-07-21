define(['game/renderable', 'game/materials'], function (Renderable, materials) {
    return Class(Renderable, {
        constructor: function (x, y, world, physicsWorld) {
            this.$class.$super.call(this, x, y, world, physicsWorld);
            this.material = materials.floorMaterial;
            this.radius = 40;
            this.box = new THREE.Mesh(new THREE.BoxGeometry(this.radius, this.radius, this.radius), this.material);
            this.box.receiveShadow = true;
            this.world.scene.add(this.box);
            this.box.position.x = this.x;
            this.box.position.y = this.y;
            this.box.position.z = -this.radius;
        }
    })
});