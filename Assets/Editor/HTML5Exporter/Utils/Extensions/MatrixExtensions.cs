using UnityEngine;

namespace HTML5Exporter.Utils
{
	public static class Extensions
	{
		public static float[] ToArray(this Matrix4x4 matrix)
		{
			float[] array = new float[16];
			for (int row = 0; row < 4; row++)
			{
				for (int column = 0; column < 4; column++)
				{
					array[row + column * 4] = matrix[row + column * 4];
				}
			}

			return array;
		}
	}
}
