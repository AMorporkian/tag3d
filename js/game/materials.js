define(['three'], function(THREE) {
	return {
		floorMaterial: new THREE.MeshLambertMaterial({
			map: THREE.ImageUtils.loadTexture('img/floor.png')
		}),

		wallMaterial: new THREE.MeshPhongMaterial({
			map: THREE.ImageUtils.loadTexture('img/wall.jpg'),
			bumpMap: THREE.ImageUtils.loadTexture('img/stonebump.png'),
			bumpScale: 1,
			shininess: 80
		}),

		redFlagMaterial: new THREE.MeshLambertMaterial({
			color: "red",
			side: THREE.DoubleSide

		}),

		blueFlagMaterial: new THREE.MeshLambertMaterial({
			color: "blue",
			side: THREE.DoubleSide

		}),

		neutralTeamTileMaterial: new THREE.MeshLambertMaterial({
			map: THREE.ImageUtils.loadTexture('img/teamtile_unactivated.png')
		}),

		buttonMaterial: new THREE.MeshLambertMaterial({
			color: 'green',
		}),

		speedpadMaterial: new THREE.MeshLambertMaterial({
			color: 'orange',
			opacity: .9
		}),

		spikeMaterial: new THREE.MeshLambertMaterial({
			map: THREE.ImageUtils.loadTexture('img/spike.png'),
			transparent: true,
		}),

		greenTileMaterial: new THREE.MeshPhongMaterial({
			color: 0x00FF00,
			map: THREE.ImageUtils.loadTexture('img/gatemap.png'),
			size: .1,
			specular: "green",
			bumpMap: THREE.ImageUtils.loadTexture('img/gate.png'),
			specularMap: THREE.ImageUtils.loadTexture('img/gatemap.png'),
			transparent: true,
			opacity: .8
		}),

		bombMaterial: new THREE.MeshPhongMaterial({
			color: 'black'
		}),

		powerupMaterial: new THREE.MeshPhongMaterial({
			color: 'green',
			map: THREE.ImageUtils.loadTexture('img/gatemap.png'),
			bumpMap: THREE.ImageUtils.loadTexture('img/gate.png'),
			specularMap: THREE.ImageUtils.loadTexture('img/gatemap.png'),
			specular: "white",
			shininess: .5,
			transparent: true,
			opacity: .5

		}),

		metalMaterial: new THREE.MeshPhongMaterial({
			map: THREE.ImageUtils.loadTexture('img/metal10.png'),
			normalMap: THREE.ImageUtils.loadTexture('img/metal10nm.png'),
			specularMap: THREE.ImageUtils.loadTexture('img/metal10nm.png'),
			specular: 'grey',
			shading: THREE.FlatShading,
			metal: true,
		}),
		blueBallMaterial: new THREE.MeshPhongMaterial({
			color: 'blue',
			shininess: 80,
			bumpMap: THREE.ImageUtils.loadTexture('img/ballbump.png'),
		}),
		redBallMaterial: new THREE.MeshPhongMaterial({
			color: 'red',
			shininess: 80,
			bumpMap: THREE.ImageUtils.loadTexture('img/ballbump.png'),
		}),

		skyMaterial: new THREE.ShaderMaterial({
			uniforms: {
				texture: {
					type: 't',
					value: THREE.ImageUtils.loadTexture('img/skydome.png')
				}
			},
			vertexShader: document.getElementById('sky-vertex').textContent,
			fragmentShader: document.getElementById('sky-fragment').textContent
		})
	}
});