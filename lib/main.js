/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/jquery_lite.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n\n  constructor(arr) {\n    this.htmlelements = arr;\n  }\n\n  html(str){\n    if(str === undefined){\n      return this.htmlelements[0].innerHTML;\n    } else {\n      this.htmlelements.forEach((el) => {\n        el.innerHTML = str;\n      });\n    }\n  }\n\n  empty(){\n    this.htmlelements.forEach((el) => {\n      el.innerHTML = \"\";\n    });\n    return this.htmlelements;\n  }\n\n  append(arg){\n    if(arg instanceof HTMLElement){\n      this.htmlelements.forEach((el) => {\n        el.innerHTML = el.innerHTML.concat(arg.outerHTML);\n      });\n    } else if(typeof(arg) === 'string'){\n      this.htmlelements.forEach((el) => {\n        el.innerHTML = el.innerHTML.concat(arg);\n      });\n    }\n    else {\n//domNodeCollection instance of\n      this.htmlelements.forEach((el) => {\n        for(let i = 0; i < arg.htmlelements.length; i++){\n          el.innerHTML = el.innerHTML.concat(arg.htmlelements[i].outerHTML);\n        }\n      });\n    }\n  }\n\n  attr(attribute, set){\n    if(set === undefined){\n      this.htmlelements.forEach((el) => {\n        return el.attributes[attribute].nodeValue;\n      });\n    } else {\n      this.htmlelements.forEach((el) => {\n\n        //create attributes??!!!\n        el.attributes.createAttribute(attribute);\n        el.attributes[attribute].nodeValue = set;\n      });\n    }\n  }\n\n  addClass(newClass){\n    this.htmlelements.forEach((el) => {\n      el.className = newClass;\n    });\n  }\n\n  removeClass(newClass){\n    this.htmlelements.forEach((el) => {\n      el.className = \"\";\n    });\n  }\n\n  children(){\n    this.htmlelements.forEach((el) => {\n\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/jquery_lite.js":
/*!****************************!*\
  !*** ./lib/jquery_lite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const domNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n// import * as domNodeCollection from \"./dom_node_collection.js\";\n\n//take a html element and return an object\n//pass the string to get object\n//document function\nwindow.$l = function(arg) {\n  let nodeArr = [];\n  if (arg instanceof HTMLElement){\n    nodeArr.push(arg);\n  }\n  else if (typeof(arg) === 'string') {\n    let nodeList = document.querySelectorAll(arg);\n    for (var i = 0; i < nodeList.length; i++) {\n      nodeArr.push(nodeList[i]);\n    }\n  }\n  return new domNodeCollection(nodeArr);\n};\n\n\n//# sourceURL=webpack:///./lib/jquery_lite.js?");

/***/ })

/******/ });