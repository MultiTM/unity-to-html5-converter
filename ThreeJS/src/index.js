import * as THREE from 'three';
import builderResolver from './builderResolver';

fetch("scene.json")
	.then(response => response.json())
	.then(json => init(json));

function init({ objects }) {
	const scene = new THREE.Scene();
	const renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x555555);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const builtObjects = objects.map(buildObject);
	const [cameraObj] = builtObjects.filter(obj => obj instanceof THREE.PerspectiveCamera);

	builtObjects.forEach(object => scene.add(object));

	const animate = function () {
		requestAnimationFrame(animate);
		renderer.render(scene, cameraObj);
	};

	animate();
}

function buildObject(object) {
	const builder = builderResolver.resolve(object);

	return builder.build(object);
}
