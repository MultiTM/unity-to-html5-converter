using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Editor.HTML5Exporter.Utils
{
	public class JsonHelper
	{
		public static string GetJsonArrayString<T>(IEnumerable<T> values)
		{
			var array = values.ToArray();
			var sBuilder = new StringBuilder();
			for (int i = 0; i < array.Length; i++)
			{
				sBuilder.Append($"{array[i]}");
				if (i < array.Length - 1)
				{
					sBuilder.Append(",");
				}
			}

			return $"[{sBuilder}]";
		}
	}
}
