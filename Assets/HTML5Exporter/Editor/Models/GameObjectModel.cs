using System.Collections.Generic;

namespace HTML5Exporter.Models
{
	public class GameObjectModel
	{
		public float[] matrix;
		public object[] components;
		public GameObjectModel parent;
		public List<GameObjectModel> children;

		public GameObjectModel()
		{
			children = new List<GameObjectModel>();
		}

		public GameObjectModel(float[] matrix, object[] components) : this()
		{
			this.matrix = matrix;
			this.components = components;
		}
	}
}
