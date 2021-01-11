using UnityEditor;
using HTML5Exporter.Serializers;
using System.IO;
using Newtonsoft.Json;
using System.Linq;
using System.Text.RegularExpressions;
using UnityEngine;

public class Exporter : Editor
{
	private static readonly string distPath = Path.Combine(Directory.GetCurrentDirectory(), "Assets", "HTML5Exporter", "Dist");
	private static JsonSerializerSettings settings = new JsonSerializerSettings {
		NullValueHandling = NullValueHandling.Ignore
	};

	[MenuItem("Export/HTML 5")]
	public static void ExportToHTML5() {
		var sceneData = SceneSerializer.Serialize();
		var sceneJson = JsonConvert.SerializeObject(sceneData, Formatting.None, settings);
		var sceneJs = $"window.sceneJson = '{sceneJson}'";
		
		var targetPath = EditorUtility.SaveFolderPanel("Save HTML 5 build", Directory.GetCurrentDirectory(), "ThreeJS");
		var distFiles = Directory.GetFiles(distPath).Where((file) => !new Regex(@"\.meta$").IsMatch(file));

		foreach (var file in distFiles)
		{
			File.Copy(
				Path.Combine(distPath, Path.GetFileName(file)),
				Path.Combine(targetPath, Path.GetFileName(file)),
				true);
		}
		File.WriteAllText(Path.Combine(targetPath, "scene.js"), sceneJs);

		Debug.Log("Build complete!");
	}
}
