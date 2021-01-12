using UnityEngine;

namespace HTML5Exporter.Models
{
	public class BaseComponentModel
	{
		public string type;

		public BaseComponentModel(Component component)
		{
			type = component.GetType().Name;
		}
	}
}
