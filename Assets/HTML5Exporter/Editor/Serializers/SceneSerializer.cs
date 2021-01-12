using HTML5Exporter.Models;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

namespace HTML5Exporter.Serializers
{
	public static class SceneSerializer
	{
		public static object Serialize()
		{
			var scene = SceneManager.GetActiveScene();
			var rootObjects = scene.GetRootGameObjects();
			var serializedGameObjects = new List<object>();
			foreach (var gameObject in rootObjects)
			{
				var serializedGameObject = GameObjectSerializer.Serialize(gameObject);
				if (serializedGameObject != null)
				{
					serializedGameObjects.Add(serializedGameObject);
				}
			}

			return new SceneModel(serializedGameObjects.ToArray());
		}
	}
}