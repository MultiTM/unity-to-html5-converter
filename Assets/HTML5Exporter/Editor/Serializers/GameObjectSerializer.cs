using HTML5Exporter.Models;
using HTML5Exporter.Utils;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace HTML5Exporter.Serializers
{
	public static class GameObjectSerializer
	{
		public static GameObjectModel Serialize(GameObject gameObject)
		{
			if (!gameObject.activeInHierarchy)
			{
				return null;
			}

			var gameObjectModel = CreateModel(gameObject);
			gameObjectModel.children = GetChildrenModels(gameObject);

			return gameObjectModel;
		}

		private static GameObjectModel CreateModel(GameObject gameObject)
		{
			var matrixArray = BasisConvertion.GetRightHandedMatrix(gameObject.transform);
			var serializedComponents = GetSerializedComponents(gameObject);

			return new GameObjectModel(matrixArray, serializedComponents.ToArray());
		}

		private static List<object> GetSerializedComponents(GameObject gameObject)
		{
			var components = gameObject.GetComponents<Component>().Where((c) => c.GetType() != typeof(Transform));
			var serializedComponents = new List<object>();
			foreach (var c in components)
			{
				var serializedComponent = ComponentSerializer.Serialize(c);
				if (serializedComponent != null)
				{
					serializedComponents.Add(serializedComponent);
				}
			}

			return serializedComponents;
		}

		private static List<GameObjectModel> GetChildrenModels(GameObject gameObject)
		{
			var children = new List<GameObjectModel>();
			if (gameObject.transform.childCount > 0)
			{
				foreach (Transform childTransform in gameObject.transform)
				{
					var childModel = Serialize(childTransform.gameObject) as GameObjectModel;
					if (childModel != null)
					{
						children.Add(childModel);
					}
				}
			}

			return children;
		}
	}
}
