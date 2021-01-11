using HTML5Exporter.Utils;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace HTML5Exporter.Serializers
{
	public static class GameObjectSerializer
	{
		public static object Serialize(GameObject gameObject)
		{
			var matrixArray = BasisConvertion.GetRightHandedMatrix(gameObject.transform);
			var components = gameObject.GetComponents<Component>().Where((c) => c.GetType() != typeof(Transform));
			var serializedComponents = new List<object>();
			foreach(var c in components)
			{
				var serializedComponent = ComponentSerializer.Serialize(c);
				if (serializedComponent != null)
				{
					serializedComponents.Add(serializedComponent);
				}
			}

			return new { matrix = matrixArray, components = serializedComponents };
		}
	}
}
