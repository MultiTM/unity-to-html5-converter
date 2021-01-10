using HTML5Exporter.ComponentModels;
using System;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

namespace HTML5Exporter
{
	public class ComponentModelResolver
	{
		private static Dictionary<Type, Type> componentToModelMap = new Dictionary<Type, Type>();

		static ComponentModelResolver()
		{
			componentToModelMap.Add(typeof(Camera), typeof(CameraModel));
			componentToModelMap.Add(typeof(Light), typeof(LightModel));
			componentToModelMap.Add(typeof(MeshFilter), typeof(MeshFilterModel));
		}

		public static Type Resolve(Component component)
		{
			var componentType = component.GetType();

			return componentToModelMap.FirstOrDefault((map) => map.Key == componentType).Value;
		}
	}
}
