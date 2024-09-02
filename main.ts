import * as THREE from 'three';

export class MainClass {

	private renderer;
	private scene;
	private camera;
	private cube;

	public init() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.renderer = new THREE.WebGLRenderer();

		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		const geometry = new THREE.BoxGeometry(1, 2, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		this.scene.add(cube);

		this.camera.position.z = 5;
	}

	public animate() {
		requestAnimationFrame(this.animate);

		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;

		this.renderer.render(this.scene, this.camera);
	}
}

var mc = new MainClass();
mc.animate();