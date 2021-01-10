using Assets.Editor.HTML5Exporter.Utils;
using HTML5Exporter.Utils;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace HTML5Exporter.Serializers
{
	public static class GameObjectSerializer
	{
		public static string Serialize(GameObject gameObject)
		{
			var matrixArray = BasisConvertion.GetRightHandedMatrix(gameObject.transform);
			var components = gameObject.GetComponents<Component>().Where((c) => c.GetType() != typeof(Transform));
			var serializedComponents = new List<string>();
			foreach(var c in components)
			{
				var serializedComponent = ComponentSerializer.Serialize(c);
				if (!string.IsNullOrEmpty(serializedComponent))
				{
					serializedComponents.Add(serializedComponent);
				}
			}

			var serializedComponentsString = JsonHelper.GetJsonArrayString(serializedComponents);
			var serializedMatrixArrayString = JsonHelper.GetJsonArrayString(matrixArray);

			return $"{{ \"components\": {serializedComponentsString}, \"matrix\": {serializedMatrixArrayString}}}";
		}
	}
}
