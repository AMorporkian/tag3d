define(['jsface'], function(jsface) {
	return Class({
		geometry: null,
		constructor: function(x, y) {
			this.x = x;
			this.y = y;
			this.z = 0;
		},
		update: function() {}
	});
})