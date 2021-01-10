import componentToBuilderMap from './mappers/componentToBuilder';
import componentTypes from './enums/componentTypes';

function resolve(object) {
	const { components } = object;
	const [component] = components.filter((item) => item.type != componentTypes.TRANSFORM);
	const builder = componentToBuilderMap[component.type];

	return builder;
}

export default {
	resolve
};
