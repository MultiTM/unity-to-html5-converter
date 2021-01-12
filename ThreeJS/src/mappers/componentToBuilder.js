import CameraBuilder from '../builders/components/Camera';
import DirectionalLightBuilder from '../builders/components/DirectionalLight';
import MeshBuilder from '../builders/components/Mesh';

const componentToBuilderMap = Object.freeze({
	'Light': DirectionalLightBuilder,
	'MeshFilter': MeshBuilder,
	'Camera': CameraBuilder,
});

export default componentToBuilderMap;
