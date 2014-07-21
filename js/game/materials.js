define(['three'], function (THREE) {
    return {
        floorMaterial: new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_floor.jpg'),
            bumpMap: THREE.ImageUtils.loadTexture('img/th_floor.jpg'),

            bumpScale: 15,
            shininess: 10
        }),
        redFloorMaterial: new THREE.MeshLambertMaterial({
            color: 0xFF0000,
            transparent: true,
            opacity: .2,
            shininess: 20
        }),
        blueFloorMaterial: new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_floor.jpg'),
            color: 0x0000FF,
            transparent: true,
            opacity: .2,
            shininess: 20
        }),
        wallMaterial: new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_wall.jpg'),
            bumpMap: THREE.ImageUtils.loadTexture('img/th_stonebump.jpg'),
            bumpScale:.7,
            shininess: 40
        }),

        redFlagMaterial: new THREE.MeshLambertMaterial({
            color: "red",
            side: THREE.DoubleSide

        }),

        blueFlagMaterial: new THREE.MeshLambertMaterial({
            color: "blue",
            side: THREE.DoubleSide

        }),

        neutralTeamTileMaterial: new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_teamtile_unactivated.jpg'),
            bumpMap: THREE.ImageUtils.loadTexture('img/th_teamtile_unactivated.jpg'),
            bumpScale: 1,
            shininess: 10

        }),

        buttonMaterial: new THREE.MeshLambertMaterial({
            color: 'green'
        }),

        speedpadMaterial: new THREE.MeshLambertMaterial({
            color: 'orange',
            opacity: .9
        }),

        spikeMaterial: new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_spike.jpg'),
            transparent: true
        }),

        greenTileMaterial: new THREE.MeshPhongMaterial({
            color: 0x00FF00,
            map: THREE.ImageUtils.loadTexture('img/th_gatemap.jpg'),
            size: .1,
            specular: "green",
            bumpMap: THREE.ImageUtils.loadTexture('img/th_gate.jpg'),
            specularMap: THREE.ImageUtils.loadTexture('img/th_gatemap.jpg'),
            transparent: true,
            opacity: .8
        }),

        bombMaterial: new THREE.MeshPhongMaterial({
            color: 'black'
        }),

        powerupMaterial: new THREE.MeshPhongMaterial({
            color: 'green',
            map: THREE.ImageUtils.loadTexture('img/th_gatemap.jpg'),
            bumpMap: THREE.ImageUtils.loadTexture('img/th_gate.jpg'),
            specularMap: THREE.ImageUtils.loadTexture('img/th_gatemap.jpg'),
            specular: "white",
            shininess: .5,
            transparent: true,
            opacity: .5

        }),

        metalMaterial: new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('img/th_metal10.jpg'),
            normalMap: THREE.ImageUtils.loadTexture('img/th_metal10nm.jpg'),
            specularMap: THREE.ImageUtils.loadTexture('img/th_metal10nm.jpg'),
            specular: 'grey',
            shading: THREE.FlatShading,
            metal: true
        }),
        blueBallMaterial: new THREE.MeshPhongMaterial({
            color: 'blue',
            shininess: 80,
            bumpMap: THREE.ImageUtils.loadTexture('img/th_ballbump.jpg')
        }),
        redBallMaterial: new THREE.MeshPhongMaterial({
            color: 'red',
            shininess: 80,
            bumpMap: THREE.ImageUtils.loadTexture('img/th_ballbump.jpg')
        }),

        skyMaterial: new THREE.ShaderMaterial({
            uniforms: {
                texture: {
                    type: 't',
                    value: THREE.ImageUtils.loadTexture('img/skydome.jpg')
                }
            },
            vertexShader: document.getElementById('sky-vertex').textContent,
            fragmentShader: document.getElementById('sky-fragment').textContent
        })
    }
});