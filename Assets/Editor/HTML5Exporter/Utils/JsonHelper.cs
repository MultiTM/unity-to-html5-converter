using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Editor.HTML5Exporter.Utils
{
	public class JsonHelper
	{
		public static string CombineStringsInArray(IEnumerable<string> strings)
		{
			var sBuilder = new StringBuilder();
			var lastString = strings.Last();
			foreach (var s in strings)
			{
				sBuilder.Append($"{s}");
				if (!s.Equals(lastString))
				{
					sBuilder.Append(",");
				}
			}

			return $"[{sBuilder}]";
		}
	}
}
