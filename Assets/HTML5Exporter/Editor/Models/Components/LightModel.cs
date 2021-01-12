using UnityEngine;
using HTML5Exporter.Utils;

namespace HTML5Exporter.Models
{
	public class LightModel : BaseComponentModel
	{
		public string color;

		public LightModel(Light light) : base(light)
		{
			color = light.color.ToHexString();
		}
	}
}
