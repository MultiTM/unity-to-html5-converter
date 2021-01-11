using UnityEngine;
using System;

namespace HTML5Exporter.Serializers
{
	public static class ComponentSerializer
	{
		public static object Serialize(Component component)
		{
			var modelType = ComponentModelResolver.Resolve(component);
			if (modelType == null)
			{
				return null;
			}

			var model = Activator.CreateInstance(modelType, new object[] { component });

			return model;
		}
	}
}