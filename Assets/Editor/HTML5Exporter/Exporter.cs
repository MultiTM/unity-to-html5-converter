using UnityEditor;
using HTML5Exporter.Serializers;
using UnityEngine;
using System.IO;
using Newtonsoft.Json;

public class Exporter : Editor
{
	[MenuItem("Export/HTML 5")]
	public static void ExportToHTML5() {
		var json = SceneSerializer.Serialize();

		File.WriteAllText("D:\\Projects\\unity-to-html5-converter\\ThreeJS\\dist\\scene.json", json);
		Debug.Log(json);
	}

	[MenuItem("Export/TEST")]
	public static void Test()
	{
		var obj = new { m = new float[] { 1, 2, 3 }, o = new { s = "str" } };
		//var json = EditorJsonUtility.ToJson(obj);

		JsonSerializerSettings settings = new JsonSerializerSettings
		{
			NullValueHandling = NullValueHandling.Ignore
		};
		Formatting jsonFormatting = Formatting.None;
		var json = JsonConvert.SerializeObject(obj, jsonFormatting);
		Debug.Log(json);

		//File.WriteAllText("D:\\Projects\\unity-to-html5-converter\\ThreeJS\\dist\\scene-test.json", json);
	}
}
