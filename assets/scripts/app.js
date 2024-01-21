/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n// import { Tooltip } from \"./Tooltip.js\";\r\n\r\nclass ProjectItem {\r\n  hasActiveTooltip = false;\r\n\r\n  constructor(id, updateProjectListsFunction, type) {\r\n    this.id = id;\r\n    this.updateProjectListsHandler = updateProjectListsFunction;\r\n    this.connectMoreInfoButton();\r\n    this.connectSwitchButton(type);\r\n    this.connectDrag();\r\n  }\r\n\r\n  showMoreInfoHandler() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const tooltipText = projectElement.dataset.extraInfo;\r\n    //this is dynamic import, so it will render when this code needed\r\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag() {\r\n    const item = document.getElementById(this.id);\r\n    item.addEventListener(\"dragstart\", (event) => {\r\n      event.dataTransfer.setData(\"text/plain\", this.id);\r\n      event.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n\r\n    item.addEventListener(\"dragend\", (event) => {\r\n      console.log(event);\r\n    });\r\n  }\r\n\r\n  connectMoreInfoButton() {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    const moreInfoBtn = projectItemElement.querySelector(\r\n      \"button:first-of-type\"\r\n    );\r\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\r\n  }\r\n\r\n  connectSwitchButton(type) {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\r\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\r\n    switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\r\n    switchBtn.addEventListener(\r\n      \"click\",\r\n      this.updateProjectListsHandler.bind(null, this.id)\r\n    );\r\n  }\r\n\r\n  update(updateProjectListsFn, type) {\r\n    this.updateProjectListsHandler = updateProjectListsFn;\r\n    this.connectSwitchButton(type);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1tYXhpbWlsaWFuLXNjaHdhcnptdWxsZXIvLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzPzJlNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9NSGVscGVyIH0gZnJvbSBcIi4uL1V0aWxpdHkvRE9NSGVscGVyLmpzXCI7XHJcbi8vIGltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiLi9Ub29sdGlwLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEl0ZW0ge1xyXG4gIGhhc0FjdGl2ZVRvb2x0aXAgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQsIHVwZGF0ZVByb2plY3RMaXN0c0Z1bmN0aW9uLCB0eXBlKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnVwZGF0ZVByb2plY3RMaXN0c0hhbmRsZXIgPSB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbjtcclxuICAgIHRoaXMuY29ubmVjdE1vcmVJbmZvQnV0dG9uKCk7XHJcbiAgICB0aGlzLmNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSk7XHJcbiAgICB0aGlzLmNvbm5lY3REcmFnKCk7XHJcbiAgfVxyXG5cclxuICBzaG93TW9yZUluZm9IYW5kbGVyKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzQWN0aXZlVG9vbHRpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgY29uc3QgdG9vbHRpcFRleHQgPSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmV4dHJhSW5mbztcclxuICAgIC8vdGhpcyBpcyBkeW5hbWljIGltcG9ydCwgc28gaXQgd2lsbCByZW5kZXIgd2hlbiB0aGlzIGNvZGUgbmVlZGVkXHJcbiAgICBpbXBvcnQoXCIuL1Rvb2x0aXAuanNcIikudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgbW9kdWxlLlRvb2x0aXAoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwVGV4dCxcclxuICAgICAgICB0aGlzLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIHRvb2x0aXAuYXR0YWNoKCk7XHJcbiAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3REcmFnKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGhpcy5pZCk7XHJcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RNb3JlSW5mb0J1dHRvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgY29uc3QgbW9yZUluZm9CdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCJidXR0b246Zmlyc3Qtb2YtdHlwZVwiXHJcbiAgICApO1xyXG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b246bGFzdC1vZi10eXBlXCIpO1xyXG4gICAgc3dpdGNoQnRuID0gRE9NSGVscGVyLmNsZWFyRXZlbnRMaXN0ZW5lcnMoc3dpdGNoQnRuKTtcclxuICAgIHN3aXRjaEJ0bi50ZXh0Q29udGVudCA9IHR5cGUgPT09IFwiYWN0aXZlXCIgPyBcIkZpbmlzaFwiIDogXCJBY3RpdmF0ZVwiO1xyXG4gICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodXBkYXRlUHJvamVjdExpc3RzRm4sIHR5cGUpIHtcclxuICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0ZuO1xyXG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProjectList {\r\n  projects = [];\r\n\r\n  constructor(type) {\r\n    this.type = type;\r\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n    for (const prjItem of prjItems) {\r\n      this.projects.push(\r\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)\r\n      );\r\n    }\r\n    console.log(this.projects);\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable() {\r\n    console.log(globalThis);\r\n    console.log(globalThis.DEFAULT_VALUE); //this will call variable in app.js\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener(\"dragenter\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        list.parentElement.classList.add(\"droppable\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragover\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragleave\", (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove(\"droppable\");\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"drop\", (event) => {\r\n      const prjId = event.dataTransfer.getData(\"text/plain\");\r\n      if (this.projects.find((p) => p.id === prjId)) {\r\n        return;\r\n      }\r\n      document\r\n        .getElementById(prjId)\r\n        .querySelector(\"button:last-of-type\")\r\n        .click();\r\n      list.parentElement.classList.remove(\"droppable\");\r\n      // event.preventDefault(); // not required\r\n    });\r\n  }\r\n\r\n  setSwitchHandlerFunction(switchHandlerFunction) {\r\n    this.switchHandler = switchHandlerFunction;\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects.push(project);\r\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement(project.id, `#${this.type}-projects ul`);\r\n    project.update(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n    // this.projects.splice(projectIndex, 1);\r\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtbWF4aW1pbGlhbi1zY2h3YXJ6bXVsbGVyLy4vc3JjL0FwcC9Qcm9qZWN0TGlzdC5qcz8wZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RJdGVtIGFzIFByakl0ZW0gfSBmcm9tIFwiLi9Qcm9qZWN0SXRlbS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBET01IIGZyb20gXCIuLi9VdGlsaXR5L0RPTUhlbHBlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcclxuICBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgY29uc3QgcHJqSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0eXBlfS1wcm9qZWN0cyBsaWApO1xyXG4gICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHByakl0ZW1zKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChcclxuICAgICAgICBuZXcgUHJqSXRlbShwcmpJdGVtLmlkLCB0aGlzLnN3aXRjaFByb2plY3QuYmluZCh0aGlzKSwgdGhpcy50eXBlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0cyk7XHJcbiAgICB0aGlzLmNvbm5lY3REcm9wcGFibGUoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3REcm9wcGFibGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxUaGlzKTtcclxuICAgIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMuREVGQVVMVF9WQUxVRSk7IC8vdGhpcyB3aWxsIGNhbGwgdmFyaWFibGUgaW4gYXBwLmpzXHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xyXG5cclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcclxuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xyXG4gICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocCkgPT4gcC5pZCA9PT0gcHJqSWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKHByaklkKVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uOmxhc3Qtb2YtdHlwZVwiKVxyXG4gICAgICAgIC5jbGljaygpO1xyXG4gICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyb3BwYWJsZVwiKTtcclxuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gbm90IHJlcXVpcmVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihzd2l0Y2hIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuc3dpdGNoSGFuZGxlciA9IHN3aXRjaEhhbmRsZXJGdW5jdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgRE9NSC5tb3ZlRWxlbWVudChwcm9qZWN0LmlkLCBgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xyXG4gICAgcHJvamVjdC51cGRhdGUodGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICBzd2l0Y2hQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgLy8gY29uc3QgcHJvamVjdEluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xyXG4gICAgLy8gdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcclxuICAgIHRoaXMuc3dpdGNoSGFuZGxlcih0aGlzLnByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2plY3RJZCkpO1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBwcm9qZWN0SWQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper),\n/* harmony export */   clearEventListeners: () => (/* binding */ clearEventListeners),\n/* harmony export */   moveElement: () => (/* binding */ moveElement)\n/* harmony export */ });\nclass DOMHelper {\r\n  static clearEventListeners(element) {\r\n    const clonedElement = element.cloneNode(true);\r\n    element.replaceWith(clonedElement);\r\n    return clonedElement;\r\n  }\r\n\r\n  static moveElement(elementId, newDestinationSelector) {\r\n    const element = document.getElementById(elementId);\r\n    const destinationElement = document.querySelector(newDestinationSelector);\r\n    destinationElement.append(element);\r\n    element.scrollIntoView({ behavior: \"smooth\" });\r\n  }\r\n}\r\n\r\nfunction clearEventListeners(element) {\r\n  const clonedElement = element.cloneNode(true);\r\n  element.replaceWith(clonedElement);\r\n  return clonedElement;\r\n}\r\n\r\nfunction moveElement(elementId, newDestinationSelector) {\r\n  const element = document.getElementById(elementId);\r\n  const destinationElement = document.querySelector(newDestinationSelector);\r\n  destinationElement.append(element);\r\n  element.scrollIntoView({ behavior: \"smooth\" });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtbWF4aW1pbGlhbi1zY2h3YXJ6bXVsbGVyLy4vc3JjL1V0aWxpdHkvRE9NSGVscGVyLmpzPzU5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERPTUhlbHBlciB7XHJcbiAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xyXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcclxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xyXG4gICAgZGVzdGluYXRpb25FbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckV2ZW50TGlzdGVuZXJzKGVsZW1lbnQpIHtcclxuICBjb25zdCBjbG9uZWRFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcclxuICByZXR1cm4gY2xvbmVkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gIGNvbnN0IGRlc3RpbmF0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV3RGVzdGluYXRpb25TZWxlY3Rvcik7XHJcbiAgZGVzdGluYXRpb25FbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n\nglobalThis.DEFAULT_VALUE = \"RASYID\";\n\nclass App {\n  static init() {\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\n    activeProjectsList.setSwitchHandlerFunction(\n      finishedProjectsList.addProject.bind(finishedProjectsList)\n    );\n    finishedProjectsList.setSwitchHandlerFunction(\n      activeProjectsList.addProject.bind(activeProjectsList)\n    );\n\n    // const timerId = setTimeout(this.startAnalytics, 3000);\n\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\n    //   clearTimeout(timerId);\n    // });\n  }\n\n  static startAnalytics() {\n    const analyticsScript = document.createElement(\"script\");\n    analyticsScript.src = \"assets/scripts/analytics.js\";\n    analyticsScript.defer = true;\n    document.head.append(analyticsScript);\n  }\n}\n\nApp.init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1tYXhpbWlsaWFuLXNjaHdhcnptdWxsZXIvLi9zcmMvYXBwLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9BcHAvUHJvamVjdExpc3QuanNcIjtcblxuZ2xvYmFsVGhpcy5ERUZBVUxUX1ZBTFVFID0gXCJSQVNZSURcIjtcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KFwiYWN0aXZlXCIpO1xuICAgIGNvbnN0IGZpbmlzaGVkUHJvamVjdHNMaXN0ID0gbmV3IFByb2plY3RMaXN0KFwiZmluaXNoZWRcIik7XG4gICAgYWN0aXZlUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LmFkZFByb2plY3QuYmluZChmaW5pc2hlZFByb2plY3RzTGlzdClcbiAgICApO1xuICAgIGZpbmlzaGVkUHJvamVjdHNMaXN0LnNldFN3aXRjaEhhbmRsZXJGdW5jdGlvbihcbiAgICAgIGFjdGl2ZVByb2plY3RzTGlzdC5hZGRQcm9qZWN0LmJpbmQoYWN0aXZlUHJvamVjdHNMaXN0KVxuICAgICk7XG5cbiAgICAvLyBjb25zdCB0aW1lcklkID0gc2V0VGltZW91dCh0aGlzLnN0YXJ0QW5hbHl0aWNzLCAzMDAwKTtcblxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLWFuYWx5dGljcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydEFuYWx5dGljcygpIHtcbiAgICBjb25zdCBhbmFseXRpY3NTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGFuYWx5dGljc1NjcmlwdC5zcmMgPSBcImFzc2V0cy9zY3JpcHRzL2FuYWx5dGljcy5qc1wiO1xuICAgIGFuYWx5dGljc1NjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQoYW5hbHl0aWNzU2NyaXB0KTtcbiAgfVxufVxuXG5BcHAuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "js-maximilian-schwarzmuller:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "assets/scripts/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjs_maximilian_schwarzmuller"] = self["webpackChunkjs_maximilian_schwarzmuller"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;