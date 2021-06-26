/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n    constructor(hostElementId, insertBefore = false) {\n      if (hostElementId) {\n        this.hostElement = document.getElementById(hostElementId);\n      } else {\n        this.hostElement = document.body;\n      }\n      this.insertBefore = insertBefore;\n    }\n  \n    detach() {\n      if (this.element) {\n        this.element.remove();\n        // this.element.parentElement.removeChild(this.element);\n      }\n    }\n  \n    attach() {\n      this.hostElement.insertAdjacentElement(\n        this.insertBefore ? \"afterbegin\" : \"beforeend\",\n        this.element\n      );\n    }\n  }\n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/Component.js?");

/***/ }),

/***/ "./src/DOMHelper.js":
/*!**************************!*\
  !*** ./src/DOMHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\n    static clearEventListeners(element) {\n      const clonedElement = element.cloneNode(true);\n      element.replaceWith(clonedElement);\n      return clonedElement;\n    }\n  \n    static moveElement(elementId, newDestinationSelector) {\n      const element = document.getElementById(elementId);\n      const destinationElement = document.querySelector(newDestinationSelector);\n      destinationElement.append(element);\n    }\n  }  \n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/DOMHelper.js?");

/***/ }),

/***/ "./src/ProjectItem.js":
/*!****************************!*\
  !*** ./src/ProjectItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip.js */ \"./src/Tooltip.js\");\n/* harmony import */ var _DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelper.js */ \"./src/DOMHelper.js\");\n\n\n\nclass ProjectItem {\n    hasActiveTooltip = false;\n  \n    constructor(id, updateProjectListsFunction, type) {\n      this.id = id;\n      this.updateProjectListsHandler = updateProjectListsFunction;\n      this.connectMoreInfoButton();\n      this.connectSwitchButton(type);\n    }\n  \n    showMoreInfoHandler() {\n      if (this.hasActiveTooltip) {\n        return;\n      }\n      const projectElement = document.getElementById(this.id);\n      const tooltipText = projectElement.dataset.extraInfo;\n      const tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip(\n        () => {\n          this.hasActiveTooltip = false;\n        },\n        tooltipText,\n        this.id\n      );\n      tooltip.attach();\n      this.hasActiveTooltip = true;\n    }\n  \n    connectMoreInfoButton() {\n      const projectItemElement = document.getElementById(this.id);\n      const moreInfoBtn = projectItemElement.querySelector(\n        \"button:first-of-type\"\n      );\n      moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\n    }\n  \n    connectSwitchButton(type) {\n      const projectItemElement = document.getElementById(this.id);\n      let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\n      switchBtn = _DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.clearEventListeners(switchBtn);\n      switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\n      switchBtn.addEventListener(\n        \"click\",\n        this.updateProjectListsHandler.bind(null, this.id)\n      );\n    }\n  \n    update(updateProjectListsFn, type) {\n      this.updateProjectListsHandler = updateProjectListsFn;\n      this.connectSwitchButton(type);\n    }\n  }\n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/ProjectItem.js?");

/***/ }),

/***/ "./src/ProjectList.js":
/*!****************************!*\
  !*** ./src/ProjectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/ProjectItem.js\");\n/* harmony import */ var _DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelper.js */ \"./src/DOMHelper.js\");\n\n\n\nclass ProjectList {\n    projects = [];\n  \n    constructor(type) {\n      this.type = type;\n      const prjItems = document.querySelectorAll(`#${type}-projects li`);\n      for (const prjItem of prjItems) {\n        this.projects.push(\n          new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)\n        );\n      }\n      console.log(this.projects);\n    }\n  \n    setSwitchHandlerFunction(switchHandlerFunction) {\n      this.switchHandler = switchHandlerFunction;\n    }\n  \n    addProject(project) {\n      this.projects.push(project);\n      _DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);\n      project.update(this.switchProject.bind(this), this.type);\n    }\n  \n    switchProject(projectId) {\n      // const projectIndex = this.projects.findIndex(p => p.id === projectId);\n      // this.projects.splice(projectIndex, 1);\n      this.switchHandler(this.projects.find((p) => p.id === projectId));\n      this.projects = this.projects.filter((p) => p.id !== projectId);\n    }\n  }\n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/ProjectList.js?");

/***/ }),

/***/ "./src/Tooltip.js":
/*!************************!*\
  !*** ./src/Tooltip.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/Component.js\");\n\n\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(closeNotifierFunction, tooltipText, hostElementId) {\n      super(hostElementId);\n      this.closeNotifier = closeNotifierFunction;\n      this.tooltipText = tooltipText;\n      this.create();\n    }\n  \n    closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n  \n    create() {\n      const tooltipElement = document.createElement(\"div\");\n      tooltipElement.className = \"card\";\n      tooltipElement.textContent = this.tooltipText;\n      const left = this.hostElement.offsetLeft;\n      const top = this.hostElement.offsetTop;\n      const height = this.hostElement.clientHeight;\n      const scroll = this.hostElement.parentElement.scrollTop;\n      const x = left + 20;\n      const y = top -10 - scroll + height;\n  \n      tooltipElement.style.position = 'absolute';\n      tooltipElement.style.left = x + 'px';\n      tooltipElement.style.top = y + 'px';\n      tooltipElement.addEventListener(\"click\", this.closeTooltip);\n      this.element = tooltipElement;\n    }\n  }\n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/Tooltip.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.js */ \"./src/ProjectList.js\");\n\n\nclass App {\n  static init() {\n    const activeProjectsList = new _ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n    const finishedProjectsList = new _ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n  }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://practice-oop-08-base-component-class/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;