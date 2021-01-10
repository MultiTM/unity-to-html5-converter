using UnityEditor;
using HTML5Exporter.Serializers;
using UnityEngine;
using System.IO;

public class Exporter : Editor
{
	[MenuItem("Export/HTML 5")]
	public static void ExportToHTML5() {
		
	}

	[MenuItem("Export/TEST")]
	public static void Test()
	{
		var json = SceneSerializer.Serialize();

		File.WriteAllText("D:\\Projects\\unity-to-html5-converter\\ThreeJS\\dist\\scene.json", json);
		Debug.Log(json);
	}
}
