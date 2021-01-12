import * as THREE from 'three';
import BaseBuilder from './base';
import componentTypes from '../../enums/componentTypes';

const defaultValues = {
	fov: 60,
	aspect: window.innerWidth / window.innerHeight,
	near: 0.1,
	far: 1000
}

class CameraBuilder extends BaseBuilder {
	createObject(components) {
		const cameraData = this.getComponentByType(components, componentTypes.CAMERA);
		const { fov, aspect, near, far } = Object.assign({}, defaultValues, cameraData);

		return new THREE.PerspectiveCamera(fov, aspect, near, far);
	}
}

export default new CameraBuilder();
