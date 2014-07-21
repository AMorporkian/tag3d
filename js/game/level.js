define(['game/renderable', 'game/entities/static', 'game/entities/floor'], function (Renderable, Static, Floor) {
    return Class(Renderable, {
        constructor: function (world, physicsWorld, levelData) {
            Renderable.call(this, 0, 0, world, physicsWorld);
            this.tiles = [];
            this.updateables = [];
            this.setupRenderables(levelData);
        },
        setupRenderables: function(levelData) {
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
                            tile = new Static.Wall(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 2:
                            tile = new Floor(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 3:
                            tile = new Static.Flag(i * 40, -j * 40, this.world, this.physicsWorld, "red");
                            break;
                        case 4:
                            tile = new Static.Flag(i * 40, -j * 40, this.world, this.physicsWorld, "blue");
                            break;
                        case 5:
                            tile = new Static.Speedpad(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 6.2:
                            tile = new Static.Powerup(i * 40, -j * 40, this.world, this.physicsWorld);
                            updateable = true;
                            break;
                        case 6.3:
                            tile = new Static.Powerup(i * 40, -j * 40, this.world, this.physicsWorld);
                            updateable = true;
                            break;
                        case 7:
                            tile = new Static.Spike(i * 40, -j * 40, this.world, this.physicsWorld);
                            updateable = true;
                            break;
                        case 8:
                            tile = new Static.Button(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 9:
                            tile = new Static.EmptyGate(i * 40, -j * 40, this.world, this.physicsWorld, "red");
                            break;
                        case 9.1:
                            tile = new Static.GreenGate(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 10:
                            tile = new Static.Bomb(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                        case 11:
                            tile = new Static.TeamTile(i * 40, -j * 40, this.world, this.physicsWorld, 'red');
                            break;
                        case 12:
                            tile = new Static.TeamTile(i * 40, -j * 40, this.world, this.physicsWorld, 'blue');
                            break;
                        default:
                            tile = new Floor(i * 40, -j * 40, this.world, this.physicsWorld);
                            break;
                    }
                    if (tile) {
                        tileColumn.push(tile);
                        tile.setupRenderables();
                        tile.setupPhysics();
                    }
                    if (updateable) {
                        this.updateables.push(tile);
                    }
                }
                this.tiles.push(tileColumn);
            }
        },
        update: function () {
            for (var i = 0; i < this.updateables.length; i++) {
                this.updateables[i].update();
            }

        }
    })
});