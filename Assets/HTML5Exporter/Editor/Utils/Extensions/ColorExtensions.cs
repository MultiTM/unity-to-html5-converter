using UnityEngine;

namespace HTML5Exporter.Utils
{
	public static class ColorExtensions
	{
		public static string ToHex(this Color inputColor)
		{
			var r = (byte)(inputColor.r * 255);
			var g = (byte)(inputColor.g * 255);
			var b = (byte)(inputColor.b * 255);

			return string.Format("#{0:X}{1:X}{2:X}", r, g, b);
		}
	}
}
