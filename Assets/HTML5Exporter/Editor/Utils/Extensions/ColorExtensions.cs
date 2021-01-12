using UnityEngine;

namespace HTML5Exporter.Utils
{
	public static class ColorExtensions
	{
		public static string ToHexString(this Color color)
		{
			return $"#{ColorUtility.ToHtmlStringRGB(color)}";
		}
	}
}
