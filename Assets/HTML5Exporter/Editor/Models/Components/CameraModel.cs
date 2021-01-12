using UnityEngine;

namespace HTML5Exporter.Models
{
	public class CameraModel : BaseComponentModel
	{
		public float fov;

		public CameraModel(Camera camera) : base(camera)
		{
			fov = camera.fieldOfView;
		}
	}
}
