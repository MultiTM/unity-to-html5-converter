using UnityEngine;

namespace HTML5Exporter.Models
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
