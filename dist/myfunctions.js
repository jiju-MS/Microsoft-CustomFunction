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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/functions/functions.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/functions.ts":
/*!************************************!*\
  !*** ./src/functions/functions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */

/* global clearInterval, console, setInterval */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function add(first, second) {
  return first + second;
}

exports.add = add;

function customErrorReturn(errorMessage) {
	var error = new CustomFunctions.Error(
		CustomFunctions.ErrorCode.notAvailable,	// #N/A
		errorMessage
	);
	return error;
}

exports.customErrorReturn = customErrorReturn;

function customErrorInput(inputAllowError) {
	if (inputAllowError instanceof CustomFunctions.Error) {
		return "errorCode is: " + inputAllowError.code;
	}
	else {
		return "no error detected";
	}
}

exports.customErrorInput = customErrorInput;

function customFunctionReturnEntity(name, email, age) {
	var properties = {
		"Name": name,
		"Email": email,
		"Age": age
	};
	var Entity = new CustomFunctions.Entity(name, properties);
	return Entity;
}
exports.customFunctionReturnEntity = customFunctionReturnEntity;

function customFunctionEntityInput(value, attribute) {
	if (value instanceof CustomFunctions.Entity) {
		if (attribute == "display")
			return value.display;
		else
		{
			return value.properties[attribute];
		}
	}
	else {
		return "no richData detected";
	}
}

exports.customFunctionEntityInput = customFunctionEntityInput;

function formattedNumberReturn(value, format) {
	var formattedNumber = new CustomFunctions.FormattedNumber(
		value,
		format
	);
	return formattedNumber;
}

exports.formattedNumberReturn = formattedNumberReturn;

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
exports.logMessage = logMessage;

CustomFunctions.associate("ADD", add);
CustomFunctions.associate("customErrorReturn", customErrorReturn);
CustomFunctions.associate("customErrorInput", customErrorInput);
CustomFunctions.associate("customFunctionReturnEntity", customFunctionReturnEntity);
CustomFunctions.associate("customFunctionEntityInput", customFunctionEntityInput);
CustomFunctions.associate("formattedNumberReturn", formattedNumberReturn);
/***/ })

/******/ });
//# sourceMappingURL=functions.js.map
