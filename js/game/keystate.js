define(['threex'], function(THREEx) {
	var keyboard = new THREEx.KeyboardState();
	return {
		up: 
	}
	if (keyboard.pressed("w") || keyboard.pressed("up")) {
		newVelocity.y += this.acceleration;
	}
	if (keyboard.pressed("a") || keyboard.pressed("left")) {
		newVelocity.x -= this.acceleration;
	}
	if (keyboard.pressed("s") || keyboard.pressed("down")) {
		newVelocity.y -= this.acceleration;
	}
	if (keyboard.pressed("d") || keyboard.pressed("right")) {
		newVelocity.x += this.acceleration;
	}
})