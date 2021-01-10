import * as THREE from 'three';
import componentTypes from '../enums/componentTypes';

export default class BaseBuilder {
	build(components) {
		const transform = this.getComponentByType(components, componentTypes.TRANSFORM);
		const object = this.createObject(components);
		this.applyTransformSettings(transform, object);

		return object;
	}

	createObject(components) {
		return new THREE.Object3D();
	}

	getComponentByType(components, type) {
		const [component] = components.filter(component => component.type == type);

		return component;
	}

	applyTransformSettings({ matrix: matrixArray }, object) {
		const matrix = new THREE.Matrix4().fromArray(matrixArray);
		object.applyMatrix4(matrix);

		return object;
	}
}
