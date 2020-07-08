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
  return first + second + 20000;
}

exports.add = add;

function add400(first, second) {
  return first + second + 400;
}

exports.add400 = add400;
/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */

function clock(invocation) {
  var timer = setInterval(function () {
    var time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = function () {
    clearInterval(timer);
  };
}

exports.clock = clock;
/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */

function currentTime() {
  return new Date().toLocaleTimeString();
}

exports.currentTime = currentTime;
/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */

function increment(incrementBy, invocation) {
  var result = 0;
  var timer = setInterval(function () {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = function () {
    clearInterval(timer);
  };
}

exports.increment = increment;

function customErrorInput(inputAllowError, inputAllowErrorOptional, inputAllowErrorRepeating) {
	if (inputAllowError instanceof CustomFunctions.Error) {
		return inputAllowError.code + " detected";
	}
	else if (inputAllowErrorOptional instanceof CustomFunctions.Error) {
		return inputAllowErrorOptional.code + " detected";
	}
	else if (Array.isArray(inputAllowErrorRepeating)){
		for (let i = 0; i < inputAllowErrorRepeating.length; i++) {
			if (inputAllowErrorRepeating[i] instanceof CustomFunctions.Error) {
				return inputAllowErrorRepeating[i].code + " detected";
			}
		}

		return "no error detected";
	}
	else {
		return "no error detected";
	}
}

exports.customErrorInput = customErrorInput;

function customErrorInputInvalid(numberAllowError, stringAllowError, boolAllowError) {
	var ret = [];
	var oneRow = [];

	if (numberAllowError instanceof CustomFunctions.Error) {
		oneRow.push(numberAllowError.code + " detected");
	}
	else {
		oneRow.push(numberAllowError);
	}

	if (stringAllowError instanceof CustomFunctions.Error) {
		oneRow.push(stringAllowError.code + " detected");
	}
	else {
		oneRow.push(stringAllowError);
	}

	if (boolAllowError instanceof CustomFunctions.Error) {
		oneRow.push(boolAllowError.code + " detected");
	}
	else {
		oneRow.push(boolAllowError);
	}

	ret.push(oneRow);
	return ret;
}

exports.customErrorInputInvalid = customErrorInputInvalid;

function customErrorInputArray(inputAllowError) {
	var ret = [];
	for (var i = 0; i < inputAllowError.length; ++i) {
		var oneRow = [];
		for (var j = 0; j < inputAllowError[i].length; ++j) {
			if (inputAllowError[i][j] instanceof CustomFunctions.Error) {
				oneRow.push(inputAllowError[i][j].code + " detected");
			}
			else {
				oneRow.push(inputAllowError[i][j]);
			}
		}
		ret.push(oneRow);
	}
	return ret;
}

exports.customErrorInputArray = customErrorInputArray;

function customErrorInputInvalidArray(inputAllowError) {
	var ret = [];
	for (var i = 0; i < inputAllowError.length; ++i) {
		var oneRow = [];
		for (var j = 0; j < inputAllowError[i].length; ++j) {
			if (inputAllowError[i][j] instanceof CustomFunctions.Error) {
				oneRow.push(inputAllowError[i][j].code + " detected");
			}
			else {
				oneRow.push(inputAllowError[i][j]);
			}
		}
		ret.push(oneRow);
	}
	return ret;
}

exports.customErrorInputInvalidArray = customErrorInputInvalidArray;

function logMessage(message) {
  console.log(message);
  return message;
}

function GetParameterAddresses(firstParameter, secondParameter, thirdParameter, invocationContext) {
    var items = [
        [invocationContext.parameterAddresses[0]],
        [invocationContext.parameterAddresses[1]],
        [invocationContext.parameterAddresses[2]]
    ];
    return items;
}

exports.GetParameterAddresses = GetParameterAddresses;
 

function GetParameterAddressesRepeating(firstParameter, secondParameter, invocationContext) {
    var resultArray = [];
    for (let i = 0; i < invocationContext.parameterAddresses.length; i++)
    {
        var parameterAddresses = [invocationContext.parameterAddresses[i]];
        resultArray.push(parameterAddresses);
    }
    return resultArray;
}

exports.GetParameterAddressesRepeating = GetParameterAddressesRepeating;

function GetParameterAddressesOptional(firstParameter, secondParameter, invocationContext) {
	var resultArray = [];
    for (let i = 0; i < invocationContext.parameterAddresses.length; i++)
    {
		var parameterAddresses = [invocationContext.parameterAddresses[i]];
        resultArray.push(parameterAddresses);
    }
    return resultArray;
}

exports.GetParameterAddressesOptional = GetParameterAddressesOptional;


function GetParameterAddressesRange(firstParameter, secondParameter, invocationContext) {
	var items = [
		[invocationContext.parameterAddresses[0]],
        [invocationContext.parameterAddresses[1]]
    ];
    return items;
}

exports.GetParameterAddressesRange = GetParameterAddressesRange;


function GetParameterAddressesFalse(firstParameter, secondParameter, invocationContext) {
	return invocationContext.parameterAddresses;
}

exports.GetParameterAddressesFalse = GetParameterAddressesFalse;


function GetParameterAddressesOff(firstParameter, secondParameter, invocationContext) {
	return invocationContext.parameterAddresses;
}

exports.GetParameterAddressesOff = GetParameterAddressesOff;
/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
exports.logMessage = logMessage;

CustomFunctions.associate("ADD", add);
CustomFunctions.associate("ADD400", add400);
CustomFunctions.associate("CLOCK", clock);
CustomFunctions.associate("INCREMENT", increment);
CustomFunctions.associate("LOG", logMessage);
CustomFunctions.associate("customErrorInput", customErrorInput);
CustomFunctions.associate("customErrorInputInvalid", customErrorInputInvalid);
CustomFunctions.associate("customErrorInputArray", customErrorInputArray);
CustomFunctions.associate("GetParameterAddresses", GetParameterAddresses);
CustomFunctions.associate("GetParameterAddressesRepeating", GetParameterAddressesRepeating);
CustomFunctions.associate("GetParameterAddressesOptional", GetParameterAddressesOptional);
CustomFunctions.associate("GetParameterAddressesRange", GetParameterAddressesRange);
CustomFunctions.associate("GetParameterAddressesFalse", GetParameterAddressesFalse);
CustomFunctions.associate("GetParameterAddressesOff", GetParameterAddressesOff);
CustomFunctions.associate("customErrorInputInvalidArray", customErrorInputInvalidArray);
/***/ })

/******/ });
//# sourceMappingURL=functions.js.map
