using UnityEngine;

namespace HTML5Exporter.ComponentModels
{
	public class BaseModel
	{
		public string type;

		public BaseModel(Component component)
		{
			type = component.GetType().Name;
		}
	}
}
