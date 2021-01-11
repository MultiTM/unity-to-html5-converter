import * as THREE from 'three';
import builderResolver from './builderResolver';

const RENDERER_CLEAR_COLOR = 0x555555;
let scene, camera, renderer;

function init({ objects }) {
	scene = new THREE.Scene();
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(RENDERER_CLEAR_COLOR);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const builtObjects = objects.map(buildObject);
	[camera] = builtObjects.filter(obj => obj instanceof THREE.PerspectiveCamera);

	builtObjects.forEach(object => scene.add(object));

	animate();
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function buildObject(object) {
	const builder = builderResolver.resolve(object);

	return builder.build(object);
}

const sceneData = JSON.parse(window.sceneJson);
init(sceneData);
