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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar dieDiv = document.getElementById(\"dice-container\");\r\nvar allDice = [];\r\nvar diceSum = 0;\r\nvar deletedDice = [];\r\nvar dieId = 0;\r\nvar Die = /** @class */ (function () {\r\n    function Die(id) {\r\n        var _this = this;\r\n        this.id = id;\r\n        this.value = 0;\r\n        this.stringValue = \"\";\r\n        this.die = document.createElement(\"div\");\r\n        dieDiv.appendChild(this.die);\r\n        this.die.classList.add(\"die\");\r\n        this.roll();\r\n        allDice.push(this);\r\n        this.die.addEventListener(\"click\", function () { return _this.roll(); });\r\n        this.die.addEventListener(\"dblclick\", function () { return _this.remove(event); });\r\n    }\r\n    Die.prototype.roll = function () {\r\n        this.value = Math.ceil(Math.random() * 6);\r\n        this.stringValue = this.value.toString();\r\n        this.die.textContent = this.stringValue;\r\n    };\r\n    Die.prototype.remove = function (event) {\r\n        var targetDie = this;\r\n        event.currentTarget.remove();\r\n        allDice.forEach(function (item, index) {\r\n            if (item === targetDie) {\r\n                deletedDice = allDice.splice(index, 1);\r\n            }\r\n        });\r\n    };\r\n    return Die;\r\n}());\r\n//Adds a button that generates another die on the page\r\nvar dieButton = document.getElementById(\"generateDie\");\r\ndieButton.addEventListener(\"click\", function () {\r\n    new Die(dieId);\r\n    ++dieId;\r\n});\r\n//Adds a button that rolls all the dice\r\nvar rollButton = document.getElementById(\"rollDiceBtn\");\r\nrollButton.addEventListener(\"click\", function () {\r\n    allDice.forEach(function (item) {\r\n        item.roll();\r\n    });\r\n});\r\n//Adds a button that totals up the value of all currently showing dice\r\nvar addButton = document.getElementById(\"addButton\");\r\naddButton.addEventListener(\"click\", function () {\r\n    diceSum = 0;\r\n    allDice.forEach(function (item) {\r\n        diceSum += item.value;\r\n    });\r\n    var diceSumDiv = document.getElementById(\"diceSum\");\r\n    diceSumDiv.textContent = \"Total: \" + diceSum;\r\n});\r\n\n\n//# sourceURL=webpack:///./script.ts?");

/***/ })

/******/ });