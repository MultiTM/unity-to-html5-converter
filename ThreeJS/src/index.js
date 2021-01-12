import * as THREE from 'three';
import gameObjectBuilder from './builders/gameObjectBuilder';

const RENDERER_CLEAR_COLOR = 0x555555;
let scene, camera, renderer;

function init({ objects }) {
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(RENDERER_CLEAR_COLOR);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const builtObjects = objects.map(gameObjectBuilder.build);
	builtObjects.forEach(object => scene.add(object));

	camera = getCamera(scene);

	animate();
}

function getCamera(objects) {
	let camera;
	objects.traverse((object) => {
		if (object instanceof THREE.PerspectiveCamera) {
			camera = object;
		}
	});

	return camera;
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

const sceneData = JSON.parse(window.sceneJson);
init(sceneData);
