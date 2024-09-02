"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainClass = void 0;
var THREE = require("three");
var MainClass = /** @class */ (function () {
    function MainClass() {
    }
    MainClass.prototype.init = function () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        var geometry = new THREE.BoxGeometry(1, 2, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;
    };
    MainClass.prototype.animate = function () {
        requestAnimationFrame(this.animate);
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    };
    return MainClass;
}());
exports.MainClass = MainClass;
var mc = new MainClass();
mc.animate();
//# sourceMappingURL=main.js.map