import componentToBuilderMap from '../mappers/componentToBuilder';

function resolve({ components }) {
	const [component] = components;
	const builder = componentToBuilderMap[component.type];

	return builder;
}

export default {
	resolve
};
