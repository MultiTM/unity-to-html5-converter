using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace HTML5Exporter.Serializers
{
	public static class SceneSerializer
	{
		public static object Serialize()
		{
			var scene = SceneManager.GetActiveScene();
			var activeObjects = Object.FindObjectsOfType<GameObject>().Where(gameObject => gameObject.activeInHierarchy);
			var serializedGameObjects = new List<object>();
			foreach (var gameObject in activeObjects)
			{
				var serializedGameObject = GameObjectSerializer.Serialize(gameObject);
				if (serializedGameObject != null)
				{
					serializedGameObjects.Add(serializedGameObject);
				}
			}


			return new { objects = serializedGameObjects };
		}
	}
}