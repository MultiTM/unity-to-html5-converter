import componentBuilderResolver from './componentBuilderResolver';

class GameObjectBuilder {
	constructor() {
		this.build = this.build.bind(this);
	}

	build(gameObjectData) {
		const { children } = gameObjectData;
		const builder = componentBuilderResolver.resolve(gameObjectData);
		const object = builder.build(gameObjectData);

		if(children) {
			for(const childGameObject of children) {
				const child = this.build(childGameObject);
				object.add(child);
			}
		}

		return object;
	}
}

export default new GameObjectBuilder();
