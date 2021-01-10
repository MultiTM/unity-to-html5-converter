const lightMock = [
	{
		"type": "Transform",
		"position": {
			"x": 1,
			"y": 2,
			"z": 1.5
		},
		"rotation": {
			"x": 0.4082178771495819,
			"y": -0.23456968367099763,
			"z": 0.10938163101673126,
			"w": 0.8754261136054993
		},
		"scale": {
			"x": 1.0,
			"y": 1.0,
			"z": 0.9999999403953552
		}
	},
	{
		"type": "Light",
		"color": "#FFF4D6"
	},
];

const cameraMock = [
	{
		"type": "Transform",
		"position": {
			"x": 2,
			"y": 1.5,
			"z": 5
		},
		"rotation": {
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 1.0
		},
		"scale": {
			"x": 1.0,
			"y": 1.0,
			"z": 1.0
		}
	},
	{
		"type": "Camera",
		"fov": 75.0
	},
];

const meshMock = [
	{
		"type": "Transform",
		"position": {
			"x": 0.0,
			"y": 0.0,
			"z": 0.0
		},
		"rotation": {
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 1.0
		},
		"scale": {
			"x": 1.0,
			"y": 1.0,
			"z": 1.0
		}
	},
	{
		"type": "MeshFilter"
	},
];

export {
	lightMock,
	cameraMock,
	meshMock
};
