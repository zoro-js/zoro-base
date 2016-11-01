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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _blob = __webpack_require__(1);
	
	var blob = _interopRequireWildcard(_blob);
	
	var _css = __webpack_require__(2);
	
	var css = _interopRequireWildcard(_css);
	
	var _const = __webpack_require__(3);
	
	var consts = _interopRequireWildcard(_const);
	
	var _date = __webpack_require__(4);
	
	var date = _interopRequireWildcard(_date);
	
	var _dom = __webpack_require__(5);
	
	var dom = _interopRequireWildcard(_dom);
	
	var _forOwn = __webpack_require__(7);
	
	var _forOwn2 = _interopRequireDefault(_forOwn);
	
	var _id = __webpack_require__(8);
	
	var id = _interopRequireWildcard(_id);
	
	var _json = __webpack_require__(9);
	
	var json = _interopRequireWildcard(_json);
	
	var _mixin = __webpack_require__(10);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	var _object = __webpack_require__(11);
	
	var object = _interopRequireWildcard(_object);
	
	var _type = __webpack_require__(6);
	
	var type = _interopRequireWildcard(_type);
	
	var _url = __webpack_require__(15);
	
	var url = _interopRequireWildcard(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-06-23 13:45:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-13T12:13:51+08:00
	*/
	
	var obj = object.merge({}, blob, css, consts, date, dom, {
	  forOwn: _forOwn2['default']
	}, id, json, {
	  mixin: _mixin2['default']
	}, object, type, url);
	
	// TODO obj.__esModule ???
	delete obj.__esModule;
	
	exports['default'] = obj;
	module.exports = exports['default'];

/***/ },
/* 1 */
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
	    byteString = self.atob(dataURL.split(',')[1]);
	  } else {
	    byteString = self.decodeURIComponent(dataURL.split(',')[1]);
	  }
	
	  // separate out the mime component
	  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
	
	  // write the bytes of the string to a typed array
	  var ia = new self.Uint8Array(byteString.length);
	  for (var i = 0; i < byteString.length; i++) {
	    ia[i] = byteString.charCodeAt(i);
	  }
	
	  return new self.Blob([ia], { type: mimeString });
	}

/***/ },
/* 2 */
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.off = exports.removeEventListener = exports.on = exports.addEventListener = undefined;
	exports.calcHeight = calcHeight;
	exports.remove = remove;
	exports.dataset = dataset;
	exports.target = target;
	exports.createIframe = createIframe;
	exports.html2node = html2node;
	
	var _type = __webpack_require__(6);
	
	function calcHeight(node) {
	  var parent = node.parentNode || document.body;
	  node = node.cloneNode(true);
	  node.style.display = 'block';
	  node.style.opacity = 0;
	  node.style.height = 'auto';
	  parent.appendChild(node);
	  var height = node.offsetHeight;
	  parent.removeChild(node);
	  return height;
	} /**
	  * @Author: Yingya Zhang <zyy>
	  * @Date:   2016-07-08 11:29:00
	  * @Email:  zyy7259@gmail.com
	  * @Last modified by:   zyy
	  * @Last modified time: 2016-07-12T16:49:46+08:00
	  */
	
	function remove(node) {
	  if (node.parentNode) {
	    node.parentNode.removeChild(node);
	  }
	}
	
	function dataset(node, key, value) {
	  if ((0, _type.exist)(value)) {
	    node.setAttribute('data-' + key, value);
	  } else {
	    return node.getAttribute('data-' + key);
	  }
	}
	
	var addEventListener = exports.addEventListener = function addEventListener(node, type, callback) {
	  if (node.addEventListener) {
	    node.addEventListener(type, callback, false);
	  } else if (node.attachEvent) {
	    node.attachEvent('on' + type, callback);
	  }
	};
	var on = exports.on = addEventListener;
	
	var removeEventListener = exports.removeEventListener = function removeEventListener(node, type, callback) {
	  if (node.removeEventListener) {
	    node.removeEventListener(type, callback, false);
	  } else if (node.detachEvent) {
	    node.detachEvent('on' + type, callback);
	  }
	};
	var off = exports.off = removeEventListener;
	
	function target(event) {
	  return event.target || event.srcElement;
	}
	
	function createIframe(options) {
	  options = options || {};
	  var iframe = document.createElement('iframe');
	  iframe.frameBorder = 0;
	  if (options.name) {
	    iframe.name = options.name;
	  }
	  if (!options.visible) {
	    iframe.style.display = 'none';
	  }
	  if ((0, _type.isFunction)(options.onload)) {
	    var onIframeLoad = function onIframeLoad(event) {
	      if (!iframe.src) {
	        return;
	      }
	      if (!options.multi) {
	        off(iframe, 'load', onIframeLoad);
	      }
	      options.onload(event);
	    };
	    on(iframe, 'load', onIframeLoad);
	  }
	  // will trigger onload
	  var parent = options.parent;
	  (parent || document.body).appendChild(iframe);
	  // ensure trigger onload async
	  var src = options.src || 'about:blank';
	  setTimeout(function () {
	    iframe.src = src;
	  }, 0);
	  return iframe;
	}
	
	function html2node(html) {
	  var div = document.createElement('div');
	  div.innerHTML = html;
	  var children = [];
	  var i = void 0;
	  var l = void 0;
	  if (div.children) {
	    for (i = 0, l = div.children.length; i < l; i++) {
	      children.push(div.children[i]);
	    }
	  } else {
	    for (i = 0, l = div.childNodes.length; i < l; i++) {
	      var child = div.childNodes[i];
	      if (child.nodeType === 1) {
	        children.push(child);
	      }
	    }
	  }
	  return children.length > 1 ? div : children[0];
	}

/***/ },
/* 6 */
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
/* 7 */
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
	
	module.exports = exports["default"]; /**
	                                     * @Author: Yingya Zhang <zyy>
	                                     * @Date:   2016-07-10 11:22:00
	                                     * @Email:  zyy7259@gmail.com
	                                     * @Last modified by:   zyy
	                                     * @Last modified time: 2016-07-10 11:25:33
	                                     */

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.isJSON = isJSON;
	exports.parseJSON = parseJSON;
	
	var _forOwn = __webpack_require__(7);
	
	var _forOwn2 = _interopRequireDefault(_forOwn);
	
	var _type = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isJSON(str) {
	  return (0, _type.isString)(str) && str.indexOf('{') === 0 && str.lastIndexOf('}') === str.length - 1;
	}
	
	function parseJSON(obj) {
	  try {
	    if (isJSON(obj)) {
	      obj = JSON.parse(obj);
	    }
	    if ((0, _type.isObject)(obj)) {
	      (0, _forOwn2['default'])(obj, function (key, value) {
	        switch ((0, _type.typeOf)(value)) {
	          case 'string':
	          case 'object':
	            obj[key] = parseJSON(value);
	            break;
	        }
	      });
	    }
	  } catch (error) {
	    console.error(error);
	  }
	  return obj;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _forOwn = __webpack_require__(7);
	
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

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stringify = __webpack_require__(12);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.simpleClone = simpleClone;
	exports.merge = merge;
	exports.fillUndef = fillUndef;
	exports.checkWithDefault = checkWithDefault;
	exports.fetch = fetch;
	exports.string2object = string2object;
	exports.object2string = object2string;
	
	var _mixin = __webpack_require__(10);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	var _forOwn = __webpack_require__(7);
	
	var _forOwn2 = _interopRequireDefault(_forOwn);
	
	var _type = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function simpleClone(obj) {
	  return JSON.parse((0, _stringify2['default'])(obj));
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
	* @Last modified time: 2016-08-04T12:05:07+08:00
	*/
	
	function merge() {
	  var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }
	
	  sources.forEach(function (source) {
	    (0, _mixin2['default'])(target, source);
	  });
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
	      value = (0, _stringify2['default'])(value);
	    }
	    if (encode) {
	      value = encodeURIComponent(value);
	    }
	    arr.push(encodeURIComponent(key) + '=' + value);
	  });
	  return arr.join(sep || ',');
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(13), __esModule: true };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(14)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.url2origin = undefined;
	exports.genUrlSep = genUrlSep;
	exports.object2query = object2query;
	
	var _object = __webpack_require__(11);
	
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
//# sourceMappingURL=zoro-base.js.map