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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less":
/*!*************************************************************************!*\
  !*** ./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let list = []\r\nlist.push(\"body {\\n  color: red;\\n  background: \")\r\nlist.push('url(' + __webpack_require__(/*! ./img.jpg */ \"./src/img.jpg\")+')')\r\nlist.push(\";\\n}\\n\")\r\nmodule.exports=list.join('')\n\n//# sourceURL=webpack:///./src/index.less?./loaders/css-loader.js!./loaders/less-loader.js");

/***/ }),

/***/ "./src/img.jpg":
/*!*********************!*\
  !*** ./src/img.jpg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=\"image/0de9613a13cba030b5787525dae4e352.jpg\"\n\n//# sourceURL=webpack:///./src/img.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// let str = require('./a.js')\r\n// let path = require('path')\r\n// let fs = require('fs')\r\n// let code = fs.readFileSync(path.resolve(__dirname,'./a.js'),'utf-8')\r\n// console.log(code,typeof code)\r\n// console.log(str)\r\n\r\n// fs.writeFileSync('./b.js',code+'\\n' + 'console.log(2)')\r\n// let p =  require('./img.jpg') // webpack只能识别js，如果其他文件不配置相关loader的话，打包就会报错\r\n// console.log(p)\r\n// let img = document.createElement('img');\r\n// img.src = p;\r\n// document.body.appendChild(img)\r\n\r\nlet l = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\r\nconsole.log(l);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    let style =  document.createElement('style')\n    style.innerHTML = __webpack_require__(/*! !../loaders/css-loader.js!../loaders/less-loader.js!./index.less */ \"./loaders/css-loader.js!./loaders/less-loader.js!./src/index.less\") \n   document.head.appendChild(style)\n  \n\n//# sourceURL=webpack:///./src/index.less?");

/***/ })

/******/ });