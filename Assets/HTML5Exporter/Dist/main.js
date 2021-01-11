/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/builderResolver.js":
/*!********************************!*\
  !*** ./src/builderResolver.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _mappers_componentToBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mappers/componentToBuilder */ \"./src/mappers/componentToBuilder.js\");\n/* harmony import */ var _enums_componentTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/componentTypes */ \"./src/enums/componentTypes.js\");\n\n\n\nfunction resolve({ components }) {\n\tconst [component] = components.filter((item) => item.type != _enums_componentTypes__WEBPACK_IMPORTED_MODULE_1__.default.TRANSFORM);\n\tconst builder = _mappers_componentToBuilder__WEBPACK_IMPORTED_MODULE_0__.default[component.type];\n\n\treturn builder;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\tresolve\n});\n\n\n//# sourceURL=webpack://ThreeJS/./src/builderResolver.js?");

/***/ }),

/***/ "./src/builders/Camera.js":
/*!********************************!*\
  !*** ./src/builders/Camera.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/builders/base.js\");\n/* harmony import */ var _enums_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/componentTypes */ \"./src/enums/componentTypes.js\");\n\n\n\n\nconst defaultValues = {\n\tfov: 60,\n\taspect: window.innerWidth / window.innerHeight,\n\tnear: 0.1,\n\tfar: 1000\n}\n\nclass CameraBuilder extends _base__WEBPACK_IMPORTED_MODULE_1__.default {\n\tcreateObject(components) {\n\t\tconst cameraData = this.getComponentByType(components, _enums_componentTypes__WEBPACK_IMPORTED_MODULE_2__.default.CAMERA);\n\t\tconst { fov, aspect, near, far } = Object.assign({}, defaultValues, cameraData);\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(fov, aspect, near, far);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CameraBuilder());\n\n\n//# sourceURL=webpack://ThreeJS/./src/builders/Camera.js?");

/***/ }),

/***/ "./src/builders/DirectionalLight.js":
/*!******************************************!*\
  !*** ./src/builders/DirectionalLight.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/builders/base.js\");\n/* harmony import */ var _enums_componentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/componentTypes */ \"./src/enums/componentTypes.js\");\n\n\n\n\nconst defaultValues = {\n\tcolor: 0xffffff\n};\n\nclass LightBuilder extends _base__WEBPACK_IMPORTED_MODULE_1__.default {\n\tcreateObject(components) {\n\t\tconst lightData = this.getComponentByType(components, _enums_componentTypes__WEBPACK_IMPORTED_MODULE_2__.default.LIGHT);\n\t\tconst { color } = Object.assign({}, defaultValues, lightData);\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(color);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LightBuilder());\n\n\n//# sourceURL=webpack://ThreeJS/./src/builders/DirectionalLight.js?");

/***/ }),

/***/ "./src/builders/Mesh.js":
/*!******************************!*\
  !*** ./src/builders/Mesh.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/builders/base.js\");\n\n\n\nconst defaultValues = {\n\tcolor: 0xffffff\n};\n\nclass MeshBuilder extends _base__WEBPACK_IMPORTED_MODULE_1__.default {\n\tcreateObject() {\n\t\tconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry();\n\t\tconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: defaultValues.color });\n\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MeshBuilder());\n\n\n//# sourceURL=webpack://ThreeJS/./src/builders/Mesh.js?");

/***/ }),

/***/ "./src/builders/base.js":
/*!******************************!*\
  !*** ./src/builders/base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ BaseBuilder\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass BaseBuilder {\n\tbuild({ components, matrix }) {\n\t\tconst object = this.createObject(components);\n\t\tthis.applyTransformSettings(matrix, object);\n\n\t\treturn object;\n\t}\n\n\tcreateObject(components) {\n\t\treturn new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n\t}\n\n\tgetComponentByType(components, type) {\n\t\tconst [component] = components.filter(component => component.type == type);\n\n\t\treturn component;\n\t}\n\n\tapplyTransformSettings(matrixArray, object) {\n\t\tconst matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().fromArray(matrixArray);\n\t\tobject.applyMatrix4(matrix);\n\n\t\treturn object;\n\t}\n}\n\n\n//# sourceURL=webpack://ThreeJS/./src/builders/base.js?");

/***/ }),

/***/ "./src/enums/componentTypes.js":
/*!*************************************!*\
  !*** ./src/enums/componentTypes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst componentTypes = Object.freeze({\n\tCAMERA: 'Camera',\n\tLIGHT: 'Light',\n\tMESH_FILTER: 'MeshFilter'\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentTypes);\n\n\n//# sourceURL=webpack://ThreeJS/./src/enums/componentTypes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _builderResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builderResolver */ \"./src/builderResolver.js\");\n\n\n\nconst RENDERER_CLEAR_COLOR = 0x555555;\nlet scene, camera, renderer;\n\nfunction init({ objects }) {\n\tscene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n\trenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n\trenderer.setClearColor(RENDERER_CLEAR_COLOR);\n\trenderer.setSize(window.innerWidth, window.innerHeight);\n\tdocument.body.appendChild(renderer.domElement);\n\n\tconst builtObjects = objects.map(buildObject);\n\t[camera] = builtObjects.filter(obj => obj instanceof three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera);\n\n\tbuiltObjects.forEach(object => scene.add(object));\n\n\tanimate();\n}\n\nfunction animate() {\n\trequestAnimationFrame(animate);\n\trenderer.render(scene, camera);\n}\n\nfunction buildObject(object) {\n\tconst builder = _builderResolver__WEBPACK_IMPORTED_MODULE_1__.default.resolve(object);\n\n\treturn builder.build(object);\n}\n\nconst sceneData = JSON.parse(window.sceneJson);\ninit(sceneData);\n\n\n//# sourceURL=webpack://ThreeJS/./src/index.js?");

/***/ }),

/***/ "./src/mappers/componentToBuilder.js":
/*!*******************************************!*\
  !*** ./src/mappers/componentToBuilder.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _builders_Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../builders/Camera */ \"./src/builders/Camera.js\");\n/* harmony import */ var _builders_DirectionalLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builders/DirectionalLight */ \"./src/builders/DirectionalLight.js\");\n/* harmony import */ var _builders_Mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builders/Mesh */ \"./src/builders/Mesh.js\");\n\n\n\n\nconst componentToBuilderMap = Object.freeze({\n\t'Light': _builders_DirectionalLight__WEBPACK_IMPORTED_MODULE_1__.default,\n\t'MeshFilter': _builders_Mesh__WEBPACK_IMPORTED_MODULE_2__.default,\n\t'Camera': _builders_Camera__WEBPACK_IMPORTED_MODULE_0__.default,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentToBuilderMap);\n\n\n//# sourceURL=webpack://ThreeJS/./src/mappers/componentToBuilder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;