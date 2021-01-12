import * as THREE from 'three';

export default class BaseBuilder {
	build({ components, matrix }) {
		const object = this.createObject(components);
		this.applyTransformSettings(matrix, object);

		return object;
	}

	createObject(components) {
		return new THREE.Object3D();
	}

	getComponentByType(components, type) {
		const [component] = components.filter(component => component.type == type);

		return component;
	}

	applyTransformSettings(matrixArray, object) {
		const matrix = new THREE.Matrix4().fromArray(matrixArray);
		object.applyMatrix4(matrix);

		return object;
	}
}
