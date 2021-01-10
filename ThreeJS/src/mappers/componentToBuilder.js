import CameraBuilder from '../builders/Camera';
import DirectionalLightBuilder from '../builders/DirectionalLight';
import MeshBuilder from '../builders/Mesh';

const componentToBuilderMap = Object.freeze({
	'Light': DirectionalLightBuilder,
	'MeshFilter': MeshBuilder,
	'Camera': CameraBuilder,
});

export default componentToBuilderMap;
