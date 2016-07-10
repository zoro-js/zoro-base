(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZoroBase"] = factory();
	else
		root["ZoroBase"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _blob = __webpack_require__(/*! ./blob */ 1);

	var blob = _interopRequireWildcard(_blob);

	var _css = __webpack_require__(/*! ./css */ 2);

	var css = _interopRequireWildcard(_css);

	var _const = __webpack_require__(/*! ./const */ 3);

	var consts = _interopRequireWildcard(_const);

	var _date = __webpack_require__(/*! ./date */ 4);

	var date = _interopRequireWildcard(_date);

	var _forOwn = __webpack_require__(/*! ./forOwn */ 5);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	var _id = __webpack_require__(/*! ./id */ 6);

	var id = _interopRequireWildcard(_id);

	var _mixin = __webpack_require__(/*! ./mixin */ 7);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _object = __webpack_require__(/*! ./object */ 8);

	var object = _interopRequireWildcard(_object);

	var _type = __webpack_require__(/*! ./type */ 9);

	var type = _interopRequireWildcard(_type);

	var _url = __webpack_require__(/*! ./url */ 10);

	var url = _interopRequireWildcard(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	// util.dom = require('./dom')

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-06-23 13:45:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 13:27:74
	*/

	object.merge(exports, blob, css, consts, date, {
	  forOwn: _forOwn2['default']
	}, id, {
	  mixin: _mixin2['default']
	}, object, type, url);

/***/ },
/* 1 */
/*!*********************!*\
  !*** ./src/blob.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.blobFromDataURL = blobFromDataURL;
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:42:13
	*/

	function blobFromDataURL(dataURL) {
	  // convert base64/URLEncoded data component to raw binary data held in a string
	  var byteString = void 0;
	  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
	    byteString = window.atob(dataURL.split(',')[1]);
	  } else {
	    byteString = window.decodeURIComponent(dataURL.split(',')[1]);
	  }

	  // separate out the mime component
	  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];

	  // write the bytes of the string to a typed array
	  var ia = new window.Uint8Array(byteString.length);
	  for (var i = 0; i < byteString.length; i++) {
	    ia[i] = byteString.charCodeAt(i);
	  }

	  return new window.Blob([ia], { type: mimeString });
	}

/***/ },
/* 2 */
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.detectCSSFeature = detectCSSFeature;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-03-30 16:52:45
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:57:03
	*/

	function detectCSSFeature(featurename) {
	  var feature = false;
	  var domPrefixes = 'Webkit Moz ms O'.split(' ');
	  var elm = document.createElement('div');
	  var featurenameCapital = null;

	  featurename = featurename.toLowerCase();

	  if (elm.style[featurename] !== undefined) {
	    feature = true;
	  }

	  if (feature === false) {
	    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
	    for (var i = 0; i < domPrefixes.length; i++) {
	      if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
	        feature = true;
	        break;
	      }
	    }
	  }
	  return feature;
	}

/***/ },
/* 3 */
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-10 12:47:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:48:49
	*/

	var o = exports.o = {};
	var emptyObj = exports.emptyObj = {};

	var f = exports.f = function f() {};
	var emptyFunc = exports.emptyFunc = function emptyFunc() {};

	var regBlank = exports.regBlank = /\s+/ig;
	var regWhiteSpace = exports.regWhiteSpace = /\s+/ig;

/***/ },
/* 4 */
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.fix = fix;
	exports.getYearStr = getYearStr;
	exports.getMonthStr = getMonthStr;
	exports.getDayStr = getDayStr;
	exports.getHourStr = getHourStr;
	exports.getMinuteStr = getMinuteStr;
	exports.getSecondStr = getSecondStr;
	exports.getMillisecondStr = getMillisecondStr;
	exports.dateFromDateTimeLocal = dateFromDateTimeLocal;
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-06-23 13:40:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 13:03:62
	*/

	function fix(number, count) {
	  count = count || 2;
	  var str = '' + number;
	  while (str.length < count) {
	    str = '0' + str;
	  }
	  return str;
	}

	function getYearStr(date) {
	  return '' + date.getFullYear();
	}

	function getMonthStr(date) {
	  return fix(date.getMonth() + 1);
	}

	function getDayStr(date) {
	  return fix(date.getDate());
	}

	function getHourStr(date) {
	  return fix(date.getHours());
	}

	function getMinuteStr(date) {
	  return fix(date.getMinutes());
	}

	function getSecondStr(date) {
	  return fix(date.getSeconds());
	}

	function getMillisecondStr(date) {
	  return fix(date.getMilliseconds(), 3);
	}

	var format = exports.format = function () {
	  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g;
	  var mappers = {
	    yyyy: getYearStr,
	    MM: getMonthStr,
	    dd: getDayStr,
	    hh: getHourStr,
	    mm: getMinuteStr,
	    ss: getSecondStr,
	    SSS: getMillisecondStr
	  };
	  return function (date, format) {
	    date = new Date(date);
	    if (isNaN(+date)) {
	      return 'invalid date';
	    }
	    format = format || 'yyyy-MM-dd';
	    return format.replace(reg, function (match) {
	      return mappers[match](date);
	    });
	  };
	}();

	function dateFromDateTimeLocal(str) {
	  str = '' + str;
	  return new Date(str.replace(/-/g, '/').replace('T', ' '));
	}

/***/ },
/* 5 */
/*!***********************!*\
  !*** ./src/forOwn.js ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function () {
	  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	  var that = arguments[2];

	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      callback.call(that, key, obj[key]);
	    }
	  }
	};

/***/ },
/* 6 */
/*!*******************!*\
  !*** ./src/id.js ***!
  \*******************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:35:03
	*/

	var uniqueID = exports.uniqueID = function () {
	  var id = 0;
	  return function () {
	    return '' + id++;
	  };
	}();

/***/ },
/* 7 */
/*!**********************!*\
  !*** ./src/mixin.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _forOwn = __webpack_require__(/*! ./forOwn */ 5);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = function (target, source) {
	  (0, _forOwn2['default'])(source, function (key, value) {
	    target[key] = value;
	  });
	}; /**
	   * @Author: Yingya Zhang <zyy>
	   * @Date:   2016-07-08 11:29:00
	   * @Email:  zyy7259@gmail.com
	   * @Last modified by:   zyy
	   * @Last modified time: 2016-07-10 11:27:24
	   */

/***/ },
/* 8 */
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.simpleClone = simpleClone;
	exports.merge = merge;
	exports.fillUndef = fillUndef;
	exports.checkWithDefault = checkWithDefault;
	exports.fetch = fetch;
	exports.string2object = string2object;
	exports.object2string = object2string;

	var _mixin = __webpack_require__(/*! ./mixin */ 7);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _forOwn = __webpack_require__(/*! ./forOwn */ 5);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	var _type = __webpack_require__(/*! ./type */ 9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function simpleClone(obj) {
	  return JSON.parse(JSON.stringify(obj));
	}

	/**
	 * mock Object.assign
	 * - 将 sources 的 enumerable own properties 拷贝到 target
	 * @param  {Object} target={}  目标对象
	 * @param  {Object} ...sources 待拷贝的对象
	 * @return {Object}            目标对象
	 */
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-01-07 22:16:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:33:64
	*/

	function merge() {
	  var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var source = _step.value;

	      (0, _mixin2['default'])(target, source);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return target;
	}

	/**
	 * 对于 source 的 enumerable own properties, 如果 target 没有此属性, 将 source 的值赋给 target
	 * @param  {Object} target 目标对象
	 * @param  {Object} source 源对象
	 * @return {Object}        目标对象
	 */
	function fillUndef(target, source) {
	  (0, _forOwn2['default'])(source, function (key, value) {
	    if ((0, _type.undef)(target[key])) {
	      target[key] = value;
	    }
	  });
	  return target;
	}

	/**
	 * 如果 target 没有 key 对应的属性, 那么将 value 赋给他
	 * @param  {Object} target 目标对象
	 * @param  {String} key    属性名
	 * @param  {Object} value  属性值
	 * @return {Object}        属性值
	 */
	function checkWithDefault(target, key, value) {
	  var v = target[key] || target[key.toLowerCase()];
	  if ((0, _type.notexist)(v)) {
	    v = value;
	    target[key] = v;
	  }
	  return v;
	}

	/**
	 * 对于 target 的 enumerable own properties, 如果 source 存在对应的值, 将其赋给 target
	 * @param  {Object} target 目标对象
	 * @param  {Object} source 源对象
	 * @return {Object}        目标对象
	 */
	function fetch(target, source) {
	  (0, _forOwn2['default'])(target, function (key, value) {
	    if ((0, _type.exist)(source[key])) {
	      target[key] = source[key];
	    }
	  });
	  return target;
	}

	function string2object() {
	  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	  var sep = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];

	  var obj = {};
	  string.split(sep).forEach(function (pair) {
	    var arr = pair.split('=');
	    var key = arr.shift();
	    if (!key) {
	      return;
	    }
	    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='));
	  });
	  return obj;
	}

	function object2string(obj, sep, encode) {
	  if (!obj) {
	    return '';
	  }
	  var arr = [];
	  (0, _forOwn2['default'])(obj, function (key, value) {
	    if ((0, _type.isFunction)(value)) {
	      return;
	    }
	    if ((0, _type.isDate)(value)) {
	      value = value.getTime();
	    } else if ((0, _type.isArray)(value)) {
	      value = value.join(',');
	    } else if ((0, _type.isObject)(value)) {
	      value = JSON.stringify(value);
	    }
	    if (!!encode) {
	      value = encodeURIComponent(value);
	    }
	    arr.push(encodeURIComponent(key) + '=' + value);
	  });
	  return arr.join(sep || ',');
	}

/***/ },
/* 9 */
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getClass = getClass;
	exports.typeOf = typeOf;
	exports.isString = isString;
	exports.isNumber = isNumber;
	exports.isBoolean = isBoolean;
	exports.isArray = isArray;
	exports.isFunction = isFunction;
	exports.isDate = isDate;
	exports.isRegExp = isRegExp;
	exports.isError = isError;
	exports.isnull = isnull;
	exports.notnull = notnull;
	exports.undef = undef;
	exports.notundef = notundef;
	exports.exist = exist;
	exports.notexist = notexist;
	exports.isObject = isObject;
	exports.isEmpty = isEmpty;
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-06-30 09:54:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:33:38
	*/

	/*
	 * 类型相关 API
	 */

	function getClass(obj) {
	  return Object.prototype.toString.call(obj).slice(8, -1);
	}

	function typeOf(obj) {
	  return getClass(obj).toLowerCase();
	}

	function isString(obj) {
	  return typeOf(obj) === 'string';
	}

	function isNumber(obj) {
	  return typeOf(obj) === 'number';
	}

	function isBoolean(obj) {
	  return typeOf(obj) === 'boolean';
	}

	function isArray(obj) {
	  return typeOf(obj) === 'array';
	}

	function isFunction(obj) {
	  return typeOf(obj) === 'function';
	}

	function isDate(obj) {
	  return typeOf(obj) === 'date';
	}

	function isRegExp(obj) {
	  return typeOf(obj) === 'regexp';
	}

	function isError(obj) {
	  return typeOf(obj) === 'error';
	}

	function isnull(obj) {
	  return obj === null;
	}

	function notnull(obj) {
	  return obj !== null;
	}

	// 需要用 typeof 来比较，兼容性好
	function undef(obj) {
	  return typeof obj === 'undefined';
	}

	function notundef(obj) {
	  return typeof obj !== 'undefined';
	}

	function exist(obj) {
	  return notundef(obj) && notnull(obj);
	}

	function notexist(obj) {
	  return undef(obj) || isnull(obj);
	}

	function isObject(obj) {
	  return exist(obj) && typeOf(obj) === 'object';
	}

	/**
	 * 是否是空值
	 * @param  {Object}  obj 待检查的对象
	 * @return {Boolean}     如果是 null/undefined/''/[] 返回 true
	 */
	function isEmpty(obj) {
	  return notexist(obj) || (isString(obj) || isArray(obj)) && obj.length === 0;
	}

/***/ },
/* 10 */
/*!********************!*\
  !*** ./src/url.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.url2origin = undefined;
	exports.genUrlSep = genUrlSep;
	exports.object2query = object2query;

	var _object = __webpack_require__(/*! ./object */ 8);

	function genUrlSep(url) {
	  return url.indexOf('?') < 0 ? '?' : '&';
	} /**
	  * @Author: Yingya Zhang <zyy>
	  * @Date:   2016-07-08 11:29:00
	  * @Email:  zyy7259@gmail.com
	  * @Last modified by:   zyy
	  * @Last modified time: 2016-07-10 12:41:71
	  */

	function object2query(obj) {
	  return (0, _object.object2string)(obj, '&', true);
	}

	var url2origin = exports.url2origin = function () {
	  var reg = /^([\w]+?:\/\/.*?(?=\/|$))/i;
	  return function (url) {
	    if (reg.test(url || '')) {
	      return RegExp.$1.toLowerCase();
	    }
	    return '';
	  };
	}();

/***/ }
/******/ ])
});
;