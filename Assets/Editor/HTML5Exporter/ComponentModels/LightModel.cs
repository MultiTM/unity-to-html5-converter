using UnityEngine;

namespace HTML5Exporter.ComponentModels
{
	public class LightModel : BaseModel
	{
		public string color;

		public LightModel(Light light) : base(light)
		{
			color = $"#{ColorUtility.ToHtmlStringRGB(light.color)}";
		}
	}
}
