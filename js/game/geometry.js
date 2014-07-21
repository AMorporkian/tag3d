define(['three'], function (THREE) {
    loader = new THREE.JSONLoader();
    var geometries = {
        spike: null,
        boost: null,
        flag: null,
        ready: function () {
            return this.spike && this.boost && this.flag;
        },
        load: function () {
            loader.load("models/spikeyball.js", function (geometry) {
                this.spike = geometry;
            }.bind(this));
            loader.load("models/boost.js", function (geometry) {
                this.boost = geometry;
            }.bind(this));
            loader.load("models/flag.js", function (geometry) {
                this.flag = geometry;
            }.bind(this));
        }
    };
    geometries.load();
    return geometries;
});