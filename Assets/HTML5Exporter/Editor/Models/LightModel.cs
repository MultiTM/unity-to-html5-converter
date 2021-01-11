using UnityEngine;
using HTML5Exporter.Utils;

namespace HTML5Exporter.Models
{
	public class LightModel : BaseModel
	{
		public string color;

		public LightModel(Light light) : base(light)
		{
			color = light.color.ToHex();
		}
	}
}
