using Assets.Editor.HTML5Exporter.Utils;
using System.Collections.Generic;
using UnityEngine;

namespace HTML5Exporter.Serializers
{
	public static class GameObjectSerializer
	{
		public static string Serialize(GameObject gameObject)
		{
			var components = gameObject.GetComponents<Component>();
			var serializedComponents = new List<string>();
			foreach(var c in components)
			{
				var serializedComponent = ComponentSerializer.Serialize(c);
				if (!string.IsNullOrEmpty(serializedComponent))
				{
					serializedComponents.Add(serializedComponent);
				}
			}

			var serializedComponentsString = JsonHelper.CombineStringsInArray(serializedComponents);

			return $"{{ \"components\": {serializedComponentsString}}}";
		}
	}
}
