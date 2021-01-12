using UnityEngine;

namespace HTML5Exporter.Utils
{
	public static class BasisConvertion
	{
		public static float[] GetRightHandedMatrix(Transform transform)
		{
			Vector3 unityPosition = transform.localPosition;
			Quaternion unityQuartenion = transform.localRotation;
			Vector3 unityScale = transform.localScale;
			Matrix4x4 unityMatrix = Matrix4x4.TRS(unityPosition, unityQuartenion, unityScale);

			return GetMatrixAsArray(unityMatrix);
		}

		private static float[] GetMatrixAsArray(Matrix4x4 inputMatrix)
		{
			var matrixArray = inputMatrix.ToArray();
			var rightHandedMatrixArray = ConvertToRightHanded(matrixArray);

			return rightHandedMatrixArray;
		}

		// See for more details: 
		// https://towardsdatascience.com/change-of-basis-3909ef4bed43
		//
		private static float[] ConvertToRightHanded(float[] matrixArray)
		{
			matrixArray[2] = -1 * matrixArray[2];
			matrixArray[6] = -1 * matrixArray[6];
			matrixArray[8] = -1 * matrixArray[8];
			matrixArray[9] = -1 * matrixArray[9];
			matrixArray[14] = -1 * matrixArray[14];

			return matrixArray;
		}
	}
}
