using UnityEngine;

namespace HTML5Exporter.Models
{
	public class CameraModel : BaseModel
	{
		public float fov;

		public CameraModel(Camera camera) : base(camera)
		{
			fov = camera.fieldOfView;
		}
	}
}
