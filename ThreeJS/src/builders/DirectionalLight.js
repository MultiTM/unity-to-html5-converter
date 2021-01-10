import * as THREE from 'three';
import BaseBuilder from './base';
import componentTypes from '../enums/componentTypes';

const defaultValues = {
	color: 0xffffff
};

class LightBuilder extends BaseBuilder {
	createObject(components) {
		const lightData = this.getComponentByType(components, componentTypes.LIGHT);
		const { color } = Object.assign({}, defaultValues, lightData);

		return new THREE.DirectionalLight(color);
	}
}

export default new LightBuilder();
