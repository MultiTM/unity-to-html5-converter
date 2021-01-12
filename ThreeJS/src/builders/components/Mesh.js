import * as THREE from 'three';
import BaseBuilder from './base';

const defaultValues = {
	color: 0xffffff
};

class MeshBuilder extends BaseBuilder {
	createObject() {
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshStandardMaterial({ color: defaultValues.color });

		return new THREE.Mesh(geometry, material);
	}
}

export default new MeshBuilder();
