using HTML5Exporter.Utils;
using UnityEngine;

namespace HTML5Exporter.ComponentModels
{
	public class TransformModel : BaseModel
	{
		public float[] matrix;

		public TransformModel(Transform transform) : base(transform)
		{
			matrix = BasisConvertion.GetRightHandedMatrix(transform);
		}
	}
}
