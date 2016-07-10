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

	eval("'use strict';\n\nvar _blob = __webpack_require__(/*! ./blob */ 1);\n\nvar blob = _interopRequireWildcard(_blob);\n\nvar _css = __webpack_require__(/*! ./css */ 2);\n\nvar css = _interopRequireWildcard(_css);\n\nvar _const = __webpack_require__(/*! ./const */ 3);\n\nvar consts = _interopRequireWildcard(_const);\n\nvar _date = __webpack_require__(/*! ./date */ 4);\n\nvar date = _interopRequireWildcard(_date);\n\nvar _dom = __webpack_require__(/*! ./dom */ 5);\n\nvar dom = _interopRequireWildcard(_dom);\n\nvar _forOwn = __webpack_require__(/*! ./forOwn */ 7);\n\nvar _forOwn2 = _interopRequireDefault(_forOwn);\n\nvar _id = __webpack_require__(/*! ./id */ 8);\n\nvar id = _interopRequireWildcard(_id);\n\nvar _mixin = __webpack_require__(/*! ./mixin */ 9);\n\nvar _mixin2 = _interopRequireDefault(_mixin);\n\nvar _object = __webpack_require__(/*! ./object */ 10);\n\nvar object = _interopRequireWildcard(_object);\n\nvar _type = __webpack_require__(/*! ./type */ 6);\n\nvar type = _interopRequireWildcard(_type);\n\nvar _url = __webpack_require__(/*! ./url */ 11);\n\nvar url = _interopRequireWildcard(_url);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }\n\nobject.merge(exports, blob, css, consts, date, dom, {\n  forOwn: _forOwn2['default']\n}, id, {\n  mixin: _mixin2['default']\n}, object, type, url); /**\n                       * @Author: Yingya Zhang <zyy>\n                       * @Date:   2016-06-23 13:45:00\n                       * @Email:  zyy7259@gmail.com\n                       * @Last modified by:   zyy\n                       * @Last modified time: 2016-07-10 13:27:74\n                       */\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/*!*********************!*\
  !*** ./src/blob.js ***!
  \*********************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.blobFromDataURL = blobFromDataURL;\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-07-08 11:29:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:42:13\n*/\n\nfunction blobFromDataURL(dataURL) {\n  // convert base64/URLEncoded data component to raw binary data held in a string\n  var byteString = void 0;\n  if (dataURL.split(',')[0].indexOf('base64') >= 0) {\n    byteString = window.atob(dataURL.split(',')[1]);\n  } else {\n    byteString = window.decodeURIComponent(dataURL.split(',')[1]);\n  }\n\n  // separate out the mime component\n  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];\n\n  // write the bytes of the string to a typed array\n  var ia = new window.Uint8Array(byteString.length);\n  for (var i = 0; i < byteString.length; i++) {\n    ia[i] = byteString.charCodeAt(i);\n  }\n\n  return new window.Blob([ia], { type: mimeString });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/blob.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/blob.js?");

/***/ },
/* 2 */
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.detectCSSFeature = detectCSSFeature;\n/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-03-30 16:52:45\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:57:03\n*/\n\nfunction detectCSSFeature(featurename) {\n  var feature = false;\n  var domPrefixes = 'Webkit Moz ms O'.split(' ');\n  var elm = document.createElement('div');\n  var featurenameCapital = null;\n\n  featurename = featurename.toLowerCase();\n\n  if (elm.style[featurename] !== undefined) {\n    feature = true;\n  }\n\n  if (feature === false) {\n    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);\n    for (var i = 0; i < domPrefixes.length; i++) {\n      if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {\n        feature = true;\n        break;\n      }\n    }\n  }\n  return feature;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/css.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/css.js?");

/***/ },
/* 3 */
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-07-10 12:47:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:48:49\n*/\n\nvar o = exports.o = {};\nvar emptyObj = exports.emptyObj = {};\n\nvar f = exports.f = function f() {};\nvar emptyFunc = exports.emptyFunc = function emptyFunc() {};\n\nvar regBlank = exports.regBlank = /\\s+/ig;\nvar regWhiteSpace = exports.regWhiteSpace = /\\s+/ig;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/const.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/const.js?");

/***/ },
/* 4 */
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.fix = fix;\nexports.getYearStr = getYearStr;\nexports.getMonthStr = getMonthStr;\nexports.getDayStr = getDayStr;\nexports.getHourStr = getHourStr;\nexports.getMinuteStr = getMinuteStr;\nexports.getSecondStr = getSecondStr;\nexports.getMillisecondStr = getMillisecondStr;\nexports.dateFromDateTimeLocal = dateFromDateTimeLocal;\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-23 13:40:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 13:03:62\n*/\n\nfunction fix(number, count) {\n  count = count || 2;\n  var str = '' + number;\n  while (str.length < count) {\n    str = '0' + str;\n  }\n  return str;\n}\n\nfunction getYearStr(date) {\n  return '' + date.getFullYear();\n}\n\nfunction getMonthStr(date) {\n  return fix(date.getMonth() + 1);\n}\n\nfunction getDayStr(date) {\n  return fix(date.getDate());\n}\n\nfunction getHourStr(date) {\n  return fix(date.getHours());\n}\n\nfunction getMinuteStr(date) {\n  return fix(date.getMinutes());\n}\n\nfunction getSecondStr(date) {\n  return fix(date.getSeconds());\n}\n\nfunction getMillisecondStr(date) {\n  return fix(date.getMilliseconds(), 3);\n}\n\nvar format = exports.format = function () {\n  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g;\n  var mappers = {\n    yyyy: getYearStr,\n    MM: getMonthStr,\n    dd: getDayStr,\n    hh: getHourStr,\n    mm: getMinuteStr,\n    ss: getSecondStr,\n    SSS: getMillisecondStr\n  };\n  return function (date, format) {\n    date = new Date(date);\n    if (isNaN(+date)) {\n      return 'invalid date';\n    }\n    format = format || 'yyyy-MM-dd';\n    return format.replace(reg, function (match) {\n      return mappers[match](date);\n    });\n  };\n}();\n\nfunction dateFromDateTimeLocal(str) {\n  str = '' + str;\n  return new Date(str.replace(/-/g, '/').replace('T', ' '));\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/date.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/date.js?");

/***/ },
/* 5 */
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.off = exports.removeEventListener = exports.on = exports.addEventListener = undefined;\nexports.calHeight = calHeight;\nexports.remove = remove;\nexports.dataset = dataset;\nexports.target = target;\nexports.createIframe = createIframe;\nexports.html2node = html2node;\n\nvar _type = __webpack_require__(/*! ./type */ 6);\n\nfunction calHeight(node) {\n  node = node.cloneNode(true);\n  node.style.display = 'block !important';\n  node.style.opacity = 0;\n  node.style.height = '';\n  document.body.appendChild(node);\n  var height = node.offsetHeight;\n  document.body.removeChild(node);\n  return height;\n} /**\n  * @Author: Yingya Zhang <zyy>\n  * @Date:   2016-07-08 11:29:00\n  * @Email:  zyy7259@gmail.com\n  * @Last modified by:   zyy\n  * @Last modified time: 2016-07-10 22:19:38\n  */\n\nfunction remove(node) {\n  if (node.parentNode) {\n    node.parentNode.removeChild(node);\n  }\n}\n\nfunction dataset(node, key, value) {\n  if ((0, _type.exist)(value)) {\n    node.setAttribute('data-' + key, value);\n  } else {\n    return node.getAttribute('data-' + key);\n  }\n}\n\nvar addEventListener = exports.addEventListener = function addEventListener(node, type, callback) {\n  if (node.addEventListener) {\n    node.addEventListener(type, callback, false);\n  } else if (node.attachEvent) {\n    node.attachEvent('on' + type, callback);\n  }\n};\nvar on = exports.on = addEventListener;\n\nvar removeEventListener = exports.removeEventListener = function removeEventListener(node, type, callback) {\n  if (node.removeEventListener) {\n    node.removeEventListener(type, callback, false);\n  } else if (node.detachEvent) {\n    node.detachEvent('on' + type, callback);\n  }\n};\nvar off = exports.off = removeEventListener;\n\nfunction target(event) {\n  return event.target || event.srcElement;\n}\n\nfunction createIframe(options) {\n  options = options || {};\n  var iframe = document.createElement('iframe');\n  iframe.frameBorder = 0;\n  if (options.name) {\n    iframe.name = options.name;\n  }\n  if (!options.visible) {\n    iframe.style.display = 'none';\n  }\n  if ((0, _type.isFunction)(options.onload)) {\n    var onIframeLoad = function onIframeLoad(event) {\n      if (!iframe.src) {\n        return;\n      }\n      if (!options.multi) {\n        off(iframe, 'load', onIframeLoad);\n      }\n      options.onload(event);\n    };\n    on(iframe, 'load', onIframeLoad);\n  }\n  // will trigger onload\n  var parent = options.parent;\n  (parent || document.body).appendChild(iframe);\n  // ensure trigger onload async\n  var src = options.src || 'about:blank';\n  setTimeout(function () {\n    iframe.src = src;\n  }, 0);\n  return iframe;\n}\n\nfunction html2node(html) {\n  var div = window.document.createElement('div');\n  div.innerHTML = html;\n  var children = [];\n  var i = void 0;\n  var l = void 0;\n  if (div.children) {\n    for (i = 0, l = div.children.length; i < l; i++) {\n      children.push(div.children[i]);\n    }\n  } else {\n    for (i = 0, l = div.childNodes.length; i < l; i++) {\n      var child = div.childNodes[i];\n      if (child.nodeType === 1) {\n        children.push(child);\n      }\n    }\n  }\n  return children.length > 1 ? div : children[0];\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/dom.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/dom.js?");

/***/ },
/* 6 */
/*!*********************!*\
  !*** ./src/type.js ***!
  \*********************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.getClass = getClass;\nexports.typeOf = typeOf;\nexports.isString = isString;\nexports.isNumber = isNumber;\nexports.isBoolean = isBoolean;\nexports.isArray = isArray;\nexports.isFunction = isFunction;\nexports.isDate = isDate;\nexports.isRegExp = isRegExp;\nexports.isError = isError;\nexports.isnull = isnull;\nexports.notnull = notnull;\nexports.undef = undef;\nexports.notundef = notundef;\nexports.exist = exist;\nexports.notexist = notexist;\nexports.isObject = isObject;\nexports.isEmpty = isEmpty;\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-30 09:54:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:33:38\n*/\n\n/*\n * 类型相关 API\n */\n\nfunction getClass(obj) {\n  return Object.prototype.toString.call(obj).slice(8, -1);\n}\n\nfunction typeOf(obj) {\n  return getClass(obj).toLowerCase();\n}\n\nfunction isString(obj) {\n  return typeOf(obj) === 'string';\n}\n\nfunction isNumber(obj) {\n  return typeOf(obj) === 'number';\n}\n\nfunction isBoolean(obj) {\n  return typeOf(obj) === 'boolean';\n}\n\nfunction isArray(obj) {\n  return typeOf(obj) === 'array';\n}\n\nfunction isFunction(obj) {\n  return typeOf(obj) === 'function';\n}\n\nfunction isDate(obj) {\n  return typeOf(obj) === 'date';\n}\n\nfunction isRegExp(obj) {\n  return typeOf(obj) === 'regexp';\n}\n\nfunction isError(obj) {\n  return typeOf(obj) === 'error';\n}\n\nfunction isnull(obj) {\n  return obj === null;\n}\n\nfunction notnull(obj) {\n  return obj !== null;\n}\n\n// 需要用 typeof 来比较，兼容性好\nfunction undef(obj) {\n  return typeof obj === 'undefined';\n}\n\nfunction notundef(obj) {\n  return typeof obj !== 'undefined';\n}\n\nfunction exist(obj) {\n  return notundef(obj) && notnull(obj);\n}\n\nfunction notexist(obj) {\n  return undef(obj) || isnull(obj);\n}\n\nfunction isObject(obj) {\n  return exist(obj) && typeOf(obj) === 'object';\n}\n\n/**\n * 是否是空值\n * @param  {Object}  obj 待检查的对象\n * @return {Boolean}     如果是 null/undefined/''/[] 返回 true\n */\nfunction isEmpty(obj) {\n  return notexist(obj) || (isString(obj) || isArray(obj)) && obj.length === 0;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/type.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/type.js?");

/***/ },
/* 7 */
/*!***********************!*\
  !*** ./src/forOwn.js ***!
  \***********************/
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\n\nexports[\"default\"] = function () {\n  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n  var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];\n  var that = arguments[2];\n\n  for (var key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      callback.call(that, key, obj[key]);\n    }\n  }\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/forOwn.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/forOwn.js?");

/***/ },
/* 8 */
/*!*******************!*\
  !*** ./src/id.js ***!
  \*******************/
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-07-08 11:29:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:35:03\n*/\n\nvar uniqueID = exports.uniqueID = function () {\n  var id = 0;\n  return function () {\n    return '' + id++;\n  };\n}();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/id.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/id.js?");

/***/ },
/* 9 */
/*!**********************!*\
  !*** ./src/mixin.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _forOwn = __webpack_require__(/*! ./forOwn */ 7);\n\nvar _forOwn2 = _interopRequireDefault(_forOwn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nexports['default'] = function (target, source) {\n  (0, _forOwn2['default'])(source, function (key, value) {\n    target[key] = value;\n  });\n}; /**\n   * @Author: Yingya Zhang <zyy>\n   * @Date:   2016-07-08 11:29:00\n   * @Email:  zyy7259@gmail.com\n   * @Last modified by:   zyy\n   * @Last modified time: 2016-07-10 11:27:24\n   */\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/mixin.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/mixin.js?");

/***/ },
/* 10 */
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.simpleClone = simpleClone;\nexports.merge = merge;\nexports.fillUndef = fillUndef;\nexports.checkWithDefault = checkWithDefault;\nexports.fetch = fetch;\nexports.string2object = string2object;\nexports.object2string = object2string;\n\nvar _mixin = __webpack_require__(/*! ./mixin */ 9);\n\nvar _mixin2 = _interopRequireDefault(_mixin);\n\nvar _forOwn = __webpack_require__(/*! ./forOwn */ 7);\n\nvar _forOwn2 = _interopRequireDefault(_forOwn);\n\nvar _type = __webpack_require__(/*! ./type */ 6);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction simpleClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}\n\n/**\n * mock Object.assign\n * - 将 sources 的 enumerable own properties 拷贝到 target\n * @param  {Object} target={}  目标对象\n * @param  {Object} ...sources 待拷贝的对象\n * @return {Object}            目标对象\n */\n/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-01-07 22:16:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-10 12:33:64\n*/\n\nfunction merge() {\n  var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    sources[_key - 1] = arguments[_key];\n  }\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var source = _step.value;\n\n      (0, _mixin2['default'])(target, source);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator['return']) {\n        _iterator['return']();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return target;\n}\n\n/**\n * 对于 source 的 enumerable own properties, 如果 target 没有此属性, 将 source 的值赋给 target\n * @param  {Object} target 目标对象\n * @param  {Object} source 源对象\n * @return {Object}        目标对象\n */\nfunction fillUndef(target, source) {\n  (0, _forOwn2['default'])(source, function (key, value) {\n    if ((0, _type.undef)(target[key])) {\n      target[key] = value;\n    }\n  });\n  return target;\n}\n\n/**\n * 如果 target 没有 key 对应的属性, 那么将 value 赋给他\n * @param  {Object} target 目标对象\n * @param  {String} key    属性名\n * @param  {Object} value  属性值\n * @return {Object}        属性值\n */\nfunction checkWithDefault(target, key, value) {\n  var v = target[key] || target[key.toLowerCase()];\n  if ((0, _type.notexist)(v)) {\n    v = value;\n    target[key] = v;\n  }\n  return v;\n}\n\n/**\n * 对于 target 的 enumerable own properties, 如果 source 存在对应的值, 将其赋给 target\n * @param  {Object} target 目标对象\n * @param  {Object} source 源对象\n * @return {Object}        目标对象\n */\nfunction fetch(target, source) {\n  (0, _forOwn2['default'])(target, function (key, value) {\n    if ((0, _type.exist)(source[key])) {\n      target[key] = source[key];\n    }\n  });\n  return target;\n}\n\nfunction string2object() {\n  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n  var sep = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];\n\n  var obj = {};\n  string.split(sep).forEach(function (pair) {\n    var arr = pair.split('=');\n    var key = arr.shift();\n    if (!key) {\n      return;\n    }\n    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='));\n  });\n  return obj;\n}\n\nfunction object2string(obj, sep, encode) {\n  if (!obj) {\n    return '';\n  }\n  var arr = [];\n  (0, _forOwn2['default'])(obj, function (key, value) {\n    if ((0, _type.isFunction)(value)) {\n      return;\n    }\n    if ((0, _type.isDate)(value)) {\n      value = value.getTime();\n    } else if ((0, _type.isArray)(value)) {\n      value = value.join(',');\n    } else if ((0, _type.isObject)(value)) {\n      value = JSON.stringify(value);\n    }\n    if (encode) {\n      value = encodeURIComponent(value);\n    }\n    arr.push(encodeURIComponent(key) + '=' + value);\n  });\n  return arr.join(sep || ',');\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/object.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/object.js?");

/***/ },
/* 11 */
/*!********************!*\
  !*** ./src/url.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.url2origin = undefined;\nexports.genUrlSep = genUrlSep;\nexports.object2query = object2query;\n\nvar _object = __webpack_require__(/*! ./object */ 10);\n\nfunction genUrlSep(url) {\n  return url.indexOf('?') < 0 ? '?' : '&';\n} /**\n  * @Author: Yingya Zhang <zyy>\n  * @Date:   2016-07-08 11:29:00\n  * @Email:  zyy7259@gmail.com\n  * @Last modified by:   zyy\n  * @Last modified time: 2016-07-10 12:41:71\n  */\n\nfunction object2query(obj) {\n  return (0, _object.object2string)(obj, '&', true);\n}\n\nvar url2origin = exports.url2origin = function () {\n  var reg = /^([\\w]+?:\\/\\/.*?(?=\\/|$))/i;\n  return function (url) {\n    if (reg.test(url || '')) {\n      return RegExp.$1.toLowerCase();\n    }\n    return '';\n  };\n}();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/url.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/url.js?");

/***/ }
/******/ ])
});
;