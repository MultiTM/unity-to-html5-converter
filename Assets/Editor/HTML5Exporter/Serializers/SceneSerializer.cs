using Assets.Editor.HTML5Exporter.Utils;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace HTML5Exporter.Serializers
{
	public static class SceneSerializer
	{
		public static string Serialize()
		{
			var scene = SceneManager.GetActiveScene();
			var activeObjects = Object.FindObjectsOfType<GameObject>().Where(gameObject => gameObject.activeInHierarchy);
			var serializedGameObjects = new List<string>();
			foreach (var gameObject in activeObjects)
			{
				var serializedGameObject = GameObjectSerializer.Serialize(gameObject);
				if (!string.IsNullOrEmpty(serializedGameObject))
				{
					serializedGameObjects.Add(serializedGameObject);
				}
			}

			var serializedGameObjectsString = JsonHelper.CombineStringsInArray(serializedGameObjects);

			return $"{{ \"objects\": {serializedGameObjectsString}}}";
		}
	}
}