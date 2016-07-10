/******/ (function(modules) { // webpackBootstrap
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
/*!**********************************!*\
  !*** ./test/unit/specs/index.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var testsContext = __webpack_require__(/*! . */ 1);
	testsContext.keys().forEach(testsContext);

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./test/unit/specs _spec$ ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./blob_spec": 2,
		"./const_spec": 4,
		"./date_spec": 6,
		"./dom/dataset_spec": 8,
		"./dom/iframe_spec": 10,
		"./dom/index_spec": 11,
		"./dom/onoff_spec": 12,
		"./dom/target_spec": 13,
		"./id_spec": 14,
		"./mixin_spec": 16,
		"./object_spec": 19,
		"./type_spec": 22,
		"./url_spec": 23
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/*!**************************************!*\
  !*** ./test/unit/specs/blob_spec.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _blob = __webpack_require__(/*! blob */ 3);

	var dataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIEBgUDAf/EACwQAAEEAQMCBQMFAQAAAAAAAAEAAgMRBAUSISIxBhNBUWEUMnEjkaGxstH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAIREAAgIBAwUBAAAAAAAAAAAAAAECERIEFCExM0FxodH/2gAMAwEAAhEDEQA/ANkiKtm5gxI203fK87Y2XVnv+w7lXNpK2ebLKhHMyUuDHbtpokdr9lksjPzM187pMowYEBIfKw7TIR3ArsL4vuquJNlYenYub9TPE2U1I272lx4cGngjtYPp8rPuoWLI3SLlaTqr8pz8XLa2PNiHW1vZw9CPhdVXxkpK0MIiKQBZzXcgxZGVJz+hh20D3cTf+QtE40LDS4+gaLJXE13FfFqNSxyRvkg8qTpI2HktPNe7gVRqe2x4tqzh5OP5PhAxMaDULXHn1sElWtQo+HJdvb6cEbvwP5VbLex3hzJxnSmSXHjDJKFciq49vlT1SYjw8xrTuknYyNu1v3E1dD8WuZza9kPwSymAaRnMNzF7GFx4LmubyCtoOyxpx/q9UwtMi3mPGAllcfgU3n3WyW/SJ4EkERFrA+EWORahkxszJnS5QEz3MEZMguwBX9eq9FFzA4EEWCk0n1HbqjN5GmQyajKxkhDiwxuO8dba+1xruOVX1DCZp2JFPNlDysZrY4uN5DjxurgE178LRnToDN5vXd9r4UpNPxZQBLE14BsB3ItZ9tF3Y4OKmnNWvPNfTx0zAxsKHdj9Zl63yu5dIT6n/ivqLWNY3a0ABSWhJJUiIRETAIiIAIiIAIiIAIiIA//Z'; /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @Author: Yingya Zhang <zyy>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @Date:   2016-07-08 11:29:00
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @Email:  zyy7259@gmail.com
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @Last modified by:   zyy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @Last modified time: 2016-07-10 12:43:88
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */

	describe('blob', function () {
	  it('blobFromDataURL', function () {
	    if (!!window.Blob) {
	      var blob = (0, _blob.blobFromDataURL)(dataURL);
	      expect(blob).toEqual(jasmine.any(Blob));
	    }
	  });
	});

/***/ },
/* 3 */
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
/* 4 */
/*!***************************************!*\
  !*** ./test/unit/specs/const_spec.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _const = __webpack_require__(/*! const */ 5);

	var consts = _interopRequireWildcard(_const);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	describe('const', function () {
	  it('o', function () {
	    expect(consts.o).toEqual(jasmine.any(Object));
	  });
	  it('emptyObj', function () {
	    expect(consts.emptyObj).toEqual(jasmine.any(Object));
	  });
	  it('f', function () {
	    expect(consts.f).toEqual(jasmine.any(Function));
	  });
	  it('emptyFunc', function () {
	    expect(consts.emptyFunc).toEqual(jasmine.any(Function));
	  });
	  it('regBlank', function () {
	    var blank = ' ';
	    expect(consts.regBlank.test(blank)).toBe(true);
	    var noBlank = '';
	    expect(consts.regBlank.test(noBlank)).toBe(false);
	  });
	  it('regWhiteSpace', function () {
	    var blank = ' ';
	    expect(consts.regWhiteSpace.test(blank)).toBe(true);
	    var noBlank = '';
	    expect(consts.regWhiteSpace.test(noBlank)).toBe(false);
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-08 11:29:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 13:26:30
	    */

/***/ },
/* 5 */
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
/* 6 */
/*!**************************************!*\
  !*** ./test/unit/specs/date_spec.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _date = __webpack_require__(/*! date */ 7);

	describe('date related', function () {
	  var year = 1990;
	  // month 从 0 开始
	  var month = 5;
	  var day = 16;
	  var hour = 8;
	  var minute = 22;
	  var second = 42;
	  var milisecond = 233;
	  var date = new Date(year, month, day, hour, minute, second, milisecond);

	  it('fix', function () {
	    expect((0, _date.fix)(1)).toBe('01');
	    expect((0, _date.fix)(10)).toBe('10');
	    expect((0, _date.fix)(1, 3)).toBe('001');
	    expect((0, _date.fix)(10, 3)).toBe('010');
	  });

	  it('getYearStr', function () {
	    expect((0, _date.getYearStr)(date)).toBe('' + year);
	  });

	  it('getMonthStr', function () {
	    expect((0, _date.getMonthStr)(date)).toBe('0' + (month + 1));
	  });

	  it('getDayStr', function () {
	    expect((0, _date.getDayStr)(date)).toBe('' + day);
	  });

	  it('getHourStr', function () {
	    expect((0, _date.getHourStr)(date)).toBe('0' + hour);
	  });

	  it('getMinuteStr', function () {
	    expect((0, _date.getMinuteStr)(date)).toBe('' + minute);
	  });

	  it('getSecondStr', function () {
	    expect((0, _date.getSecondStr)(date)).toBe('' + second);
	  });

	  it('getMillisecondStr', function () {
	    expect((0, _date.getMillisecondStr)(date)).toBe('' + milisecond);
	  });

	  it('format', function () {
	    expect((0, _date.format)(date)).toBe(year + '-0' + (month + 1) + '-' + day);
	    expect((0, _date.format)(date, 'yyyy-MM-dd hh:mm:ss:SSS')).toBe(year + '-0' + (month + 1) + '-' + day + ' 0' + hour + ':' + minute + ':' + second + ':' + milisecond);
	  });

	  // TODO dateFromDateTimeLocal
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-10 13:00:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 13:23:62
	    */

/***/ },
/* 7 */
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
/* 8 */
/*!*********************************************!*\
  !*** ./test/unit/specs/dom/dataset_spec.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 12:58:32
	*/

	var dom = __webpack_require__(/*! dom */ 9);

	xdescribe('dataset', function () {
	  it('default', function () {
	    var domStr = '<div id="divDataset"></div>';
	    document.body.innerHTML += domStr;
	    var div = document.getElementById('divDataset');
	    var name = dom.dataset(div, 'name');
	    // name is '', null, or undefined
	    expect(!name).toBe(true);
	    dom.dataset(div, 'name', 'foo');
	    expect(dom.dataset(div, 'name')).toBe('foo');
	    dom.remove(div);
	  });
	});

/***/ },
/* 9 */
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 13:05:90
	*/

	var util = {};

	var dom = {};

	dom.remove = function (node) {
	  if (!!node.parentNode) {
	    node.parentNode.removeChild(node);
	  }
	};

	dom.dataset = function (node, key, value) {
	  if (util.exist(value)) {
	    node.setAttribute('data-' + key, value);
	  } else {
	    return node.getAttribute('data-' + key);
	  }
	};

	dom.on = dom.addEventListener = function (node, type, callback) {
	  if (node.addEventListener) {
	    node.addEventListener(type, callback, false);
	  } else if (node.attachEvent) {
	    node.attachEvent('on' + type, callback);
	  }
	};

	dom.off = dom.removeEventListener = function (node, type, callback) {
	  if (node.removeEventListener) {
	    node.removeEventListener(type, callback, false);
	  } else if (node.detachEvent) {
	    node.detachEvent('on' + type, callback);
	  }
	};

	dom.target = function (event) {
	  return event.target || event.srcElement;
	};

	// TODO untest
	dom.html2node = function (html) {
	  var div = window.document.createElement('div');
	  div.innerHTML = html;
	  var children = [],
	      i,
	      l;
	  if (!!div.children) {
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
	};

	dom.createIframe = function (options) {
	  options = options || {};
	  var iframe = document.createElement('iframe');
	  iframe.frameBorder = 0;
	  if (options.name) {
	    iframe.name = options.name;
	  }
	  if (!options.visible) {
	    iframe.style.display = 'none';
	  }
	  if (util.isFunction(options.onload)) {
	    var onIframeLoad = function onIframeLoad(event) {
	      if (!iframe.src) {
	        return;
	      }
	      if (!options.multi) {
	        dom.off(iframe, 'load', onIframeLoad);
	      }
	      options.onload(event);
	    };
	    dom.on(iframe, 'load', onIframeLoad);
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
	};

	module.exports = dom;

/***/ },
/* 10 */
/*!********************************************!*\
  !*** ./test/unit/specs/dom/iframe_spec.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dom = __webpack_require__(/*! dom */ 9);

	var http = location.protocol === 'http:';
	var src1 = http ? 'http://www.163.com/' : 'https://www.baidu.com/';
	var src2 = http ? 'http://mail.163.com/' : 'https://github.com/';

	xdescribe('iframe', function () {
	  describe('createIframe', function () {
	    it('empty options', function (done) {
	      var iframe = dom.createIframe();
	      expect(iframe.name).toEqual('');
	      expect(+iframe.frameBorder).toEqual(0);
	      expect(iframe.style.display).toEqual('none');
	      setTimeout(function () {
	        expect(iframe.src).toEqual('about:blank');
	        done();
	      }, 10);
	    });
	    it('name', function () {
	      var options = {
	        name: 'foo'
	      };
	      var iframe = dom.createIframe(options);
	      expect(iframe.name).toEqual('foo');
	    });
	    it('visible', function () {
	      var options = {
	        visible: true
	      };
	      var iframe = dom.createIframe(options);
	      expect(iframe.style.display).not.toEqual('none');
	    });
	    it('src', function (done) {
	      var options = {
	        src: src1
	      };
	      var iframe = dom.createIframe(options);
	      setTimeout(function () {
	        expect(iframe.src).toEqual(src1);
	        done();
	      }, 10);
	    });
	  });

	  describe('onload related', function () {
	    var onload;
	    var options;
	    var iframe;
	    beforeEach(function () {
	      onload = jasmine.createSpy('onload');
	      options = {
	        onload: onload
	      };
	    });
	    it('onload', function (done) {
	      iframe = dom.createIframe(options);
	      setTimeout(function () {
	        expect(onload.calls.count()).toEqual(1);
	        iframe.src = src1;
	        setTimeout(function () {
	          expect(onload.calls.count()).toEqual(1);
	          done();
	        }, 2000);
	      }, 1000);
	    });
	    it('multi onload', function (done) {
	      options.multi = true;
	      iframe = dom.createIframe(options);
	      setTimeout(function () {
	        expect(onload.calls.count()).toEqual(1);
	        iframe.src = src1;
	        setTimeout(function () {
	          expect(onload.calls.count()).toEqual(2);
	          done();
	        }, 2000);
	      }, 1000);
	    });
	  });
	});

/***/ },
/* 11 */
/*!*******************************************!*\
  !*** ./test/unit/specs/dom/index_spec.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-09 19:24:26
	*/

	var dom = __webpack_require__(/*! dom */ 9);

	xdescribe('dom', function () {
	  it('remove', function () {
	    var domStr = '<div id="divRemove"></div>';
	    document.body.innerHTML += domStr;
	    var div = document.getElementById('divRemove');
	    expect(div.parentNode).toEqual(jasmine.anything());
	    dom.remove(div);
	    // is null or undefined
	    expect(div.parentNode == null).toBe(true);
	  });
	});

/***/ },
/* 12 */
/*!*******************************************!*\
  !*** ./test/unit/specs/dom/onoff_spec.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-09 19:24:05
	*/

	var dom = __webpack_require__(/*! dom */ 9);

	xdescribe('on/off', function () {
	  var cb;
	  var body = document.body;
	  beforeEach(function () {
	    cb = jasmine.createSpy('cb');
	    dom.on(body, 'click', cb);
	  });
	  afterEach(function () {
	    dom.off(body, 'click', cb);
	  });
	  it('on', function () {
	    body.click();
	    expect(cb).toHaveBeenCalled();
	  });
	  it('multi', function () {
	    expect(cb.calls.count()).toEqual(0);
	    body.click();
	    expect(cb.calls.count()).toEqual(1);
	    body.click();
	    expect(cb.calls.count()).toBe(2);
	  });
	  it('off', function () {
	    body.click();
	    expect(cb.calls.count()).toEqual(1);
	    dom.off(body, 'click', cb);
	    body.click();
	    expect(cb.calls.count()).toBe(1);
	  });
	});

/***/ },
/* 13 */
/*!********************************************!*\
  !*** ./test/unit/specs/dom/target_spec.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-07-08 11:29:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-09 19:24:93
	*/

	var dom = __webpack_require__(/*! dom */ 9);

	xdescribe('target', function () {
	  var de = document.documentElement;
	  var bd = document.body;
	  var domStr = '<div id="p1"><i id="c1"></i></div><div id="p2"><i id="c2"></i></div>';
	  bd.innerHTML += domStr;
	  var p1 = document.getElementById('p1');
	  var c1 = document.getElementById('c1');
	  var p2 = document.getElementById('p2');
	  var c2 = document.getElementById('c2');
	  it('default', function (done) {
	    dom.on(p1, 'click', function (event) {
	      expect(dom.target(event)).toBe(p1);
	      done();
	    });
	    p1.click();
	  });
	  it('bubble', function (done) {
	    dom.on(p2, 'click', function (event) {
	      expect(dom.target(event)).toBe(c2);
	      done();
	    });
	    c2.click();
	  });
	});

/***/ },
/* 14 */
/*!************************************!*\
  !*** ./test/unit/specs/id_spec.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _id = __webpack_require__(/*! id */ 15);

	describe('id related', function () {
	  it('uniqueID', function () {
	    for (var i = 0; i < 10; i++) {
	      expect((0, _id.uniqueID)()).toBe('' + i);
	    }
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-08 11:29:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 12:36:44
	    */

/***/ },
/* 15 */
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
/* 16 */
/*!***************************************!*\
  !*** ./test/unit/specs/mixin_spec.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mixin = __webpack_require__(/*! mixin */ 17);

	var _mixin2 = _interopRequireDefault(_mixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	describe('mixin', function () {
	  it('default', function () {
	    var foo = {};
	    var bar = {
	      key: 'value'
	    };
	    (0, _mixin2['default'])(foo, bar);
	    expect(foo).toEqual(jasmine.objectContaining({
	      key: 'value'
	    }));
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-08 11:29:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 11:01:94
	    */

/***/ },
/* 17 */
/*!**********************!*\
  !*** ./src/mixin.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _forOwn = __webpack_require__(/*! ./forOwn */ 18);

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
/* 18 */
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
/* 19 */
/*!****************************************!*\
  !*** ./test/unit/specs/object_spec.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _object = __webpack_require__(/*! object */ 20);

	describe('object related', function () {
	  it('simpleClone', function () {
	    var obj = {
	      name: 'foo'
	    };
	    var objc = (0, _object.simpleClone)(obj);
	    expect(obj).not.toBe(objc);
	    expect(obj).toEqual(objc);
	  });

	  it('merge', function () {
	    var source = {
	      a: 0
	    };
	    var target = {};
	    var obj = (0, _object.merge)(target, source);
	    expect(obj).toBe(target);
	    expect(obj).not.toBe(source);
	    expect(obj).toEqual(source);
	  });

	  it('fillUndef', function () {
	    var obj = {
	      key1: 'aaa',
	      key2: null
	    };
	    var dft = {
	      key1: '111',
	      key2: '222',
	      key3: '333'
	    };
	    (0, _object.fillUndef)(obj, dft);
	    expect(obj).toEqual({
	      key1: 'aaa',
	      key2: null,
	      key3: '333'
	    });
	  });

	  it('checkWithDefault', function () {
	    var initialValue = 'value';
	    var obj = {
	      key: initialValue
	    };
	    var value = (0, _object.checkWithDefault)(obj, 'key', 'dft');
	    expect(value).toBe(initialValue);
	    value = (0, _object.checkWithDefault)(obj, 'KEY', 'dft');
	    expect(value).toBe(initialValue);
	    value = (0, _object.checkWithDefault)(obj, 'k', 'v');
	    expect(value).toBe('v');
	  });

	  it('fetch', function () {
	    var foo = {
	      a: 0,
	      b: 1,
	      c: 2
	    };
	    var bar = {
	      a: 'a',
	      b: 'b',
	      d: 'd'
	    };
	    var baz = {
	      a: 'a',
	      b: 'b',
	      c: 2
	    };
	    expect((0, _object.fetch)(foo, bar)).toEqual(baz);
	  });

	  it('string2object', function () {
	    var str = '';
	    expect((0, _object.string2object)(str)).toEqual({});
	    str = 'a=1';
	    expect((0, _object.string2object)(str)).toEqual({ a: '1' });
	    str = 'a=1&b=2';
	    expect((0, _object.string2object)(str, '&')).toEqual({ a: '1', b: '2' });
	  });

	  it('object2string', function () {
	    var obj = {
	      k1: 'v1',
	      k2: 2
	    };
	    expect((0, _object.object2string)(obj)).toBe('k1=v1,k2=2');
	    expect((0, _object.object2string)(obj, '/')).toBe('k1=v1/k2=2');
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-01-07 22:17:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 12:28:69
	    */

/***/ },
/* 20 */
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

	var _mixin = __webpack_require__(/*! ./mixin */ 17);

	var _mixin2 = _interopRequireDefault(_mixin);

	var _forOwn = __webpack_require__(/*! ./forOwn */ 18);

	var _forOwn2 = _interopRequireDefault(_forOwn);

	var _type = __webpack_require__(/*! ./type */ 21);

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
/* 21 */
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
/* 22 */
/*!**************************************!*\
  !*** ./test/unit/specs/type_spec.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _type = __webpack_require__(/*! type */ 21);

	describe('type related', function () {
	  var str = 'foo';
	  var num = 1;
	  var bool = true;
	  var arr = ['foo'];
	  var func = function func() {};
	  var obj = {
	    foo: 'bar'
	  };
	  var nil = null;
	  var none = undefined;
	  var date = new Date();
	  var reg = /abc/;
	  var err = new Error();

	  it('getClass', function () {
	    expect((0, _type.getClass)(str)).toBe('String');
	    expect((0, _type.getClass)(num)).toBe('Number');
	    expect((0, _type.getClass)(bool)).toBe('Boolean');
	    expect((0, _type.getClass)(arr)).toBe('Array');
	    expect((0, _type.getClass)(func)).toBe('Function');
	    expect((0, _type.getClass)(obj)).toBe('Object');
	    expect((0, _type.getClass)(date)).toBe('Date');
	    expect((0, _type.getClass)(reg)).toBe('RegExp');
	    expect((0, _type.getClass)(err)).toBe('Error');
	    expect((0, _type.getClass)(nil)).toBe('Null');
	    expect((0, _type.getClass)(none)).toBe('Undefined');
	  });

	  it('typeOf', function () {
	    expect((0, _type.typeOf)(str)).toBe('string');
	    expect((0, _type.typeOf)(num)).toBe('number');
	    expect((0, _type.typeOf)(bool)).toBe('boolean');
	    expect((0, _type.typeOf)(arr)).toBe('array');
	    expect((0, _type.typeOf)(func)).toBe('function');
	    expect((0, _type.typeOf)(obj)).toBe('object');
	    expect((0, _type.typeOf)(date)).toBe('date');
	    expect((0, _type.typeOf)(reg)).toBe('regexp');
	    expect((0, _type.typeOf)(err)).toBe('error');
	    expect((0, _type.typeOf)(nil)).toBe('null');
	    expect((0, _type.typeOf)(none)).toBe('undefined');
	  });

	  it('isString', function () {
	    expect((0, _type.isString)(str)).toBe(true);
	    expect((0, _type.isString)(num)).toBe(false);
	    expect((0, _type.isString)(bool)).toBe(false);
	    expect((0, _type.isString)(arr)).toBe(false);
	    expect((0, _type.isString)(func)).toBe(false);
	    expect((0, _type.isString)(obj)).toBe(false);
	    expect((0, _type.isString)(date)).toBe(false);
	    expect((0, _type.isString)(reg)).toBe(false);
	    expect((0, _type.isString)(err)).toBe(false);
	    expect((0, _type.isString)(nil)).toBe(false);
	    expect((0, _type.isString)(none)).toBe(false);
	  });

	  it('isNumber', function () {
	    expect((0, _type.isNumber)(str)).toBe(false);
	    expect((0, _type.isNumber)(num)).toBe(true);
	    expect((0, _type.isNumber)(bool)).toBe(false);
	    expect((0, _type.isNumber)(arr)).toBe(false);
	    expect((0, _type.isNumber)(func)).toBe(false);
	    expect((0, _type.isNumber)(obj)).toBe(false);
	    expect((0, _type.isNumber)(date)).toBe(false);
	    expect((0, _type.isNumber)(reg)).toBe(false);
	    expect((0, _type.isNumber)(err)).toBe(false);
	    expect((0, _type.isNumber)(nil)).toBe(false);
	    expect((0, _type.isNumber)(none)).toBe(false);
	  });

	  it('isBoolean', function () {
	    expect((0, _type.isBoolean)(str)).toBe(false);
	    expect((0, _type.isBoolean)(num)).toBe(false);
	    expect((0, _type.isBoolean)(bool)).toBe(true);
	    expect((0, _type.isBoolean)(arr)).toBe(false);
	    expect((0, _type.isBoolean)(func)).toBe(false);
	    expect((0, _type.isBoolean)(obj)).toBe(false);
	    expect((0, _type.isBoolean)(date)).toBe(false);
	    expect((0, _type.isBoolean)(reg)).toBe(false);
	    expect((0, _type.isBoolean)(err)).toBe(false);
	    expect((0, _type.isBoolean)(nil)).toBe(false);
	    expect((0, _type.isBoolean)(none)).toBe(false);
	  });

	  it('isArray', function () {
	    expect((0, _type.isArray)(str)).toBe(false);
	    expect((0, _type.isArray)(num)).toBe(false);
	    expect((0, _type.isArray)(bool)).toBe(false);
	    expect((0, _type.isArray)(arr)).toBe(true);
	    expect((0, _type.isArray)(func)).toBe(false);
	    expect((0, _type.isArray)(obj)).toBe(false);
	    expect((0, _type.isArray)(date)).toBe(false);
	    expect((0, _type.isArray)(reg)).toBe(false);
	    expect((0, _type.isArray)(err)).toBe(false);
	    expect((0, _type.isArray)(nil)).toBe(false);
	    expect((0, _type.isArray)(none)).toBe(false);
	  });

	  it('isFunction', function () {
	    expect((0, _type.isFunction)(str)).toBe(false);
	    expect((0, _type.isFunction)(num)).toBe(false);
	    expect((0, _type.isFunction)(bool)).toBe(false);
	    expect((0, _type.isFunction)(arr)).toBe(false);
	    expect((0, _type.isFunction)(func)).toBe(true);
	    expect((0, _type.isFunction)(obj)).toBe(false);
	    expect((0, _type.isFunction)(date)).toBe(false);
	    expect((0, _type.isFunction)(reg)).toBe(false);
	    expect((0, _type.isFunction)(err)).toBe(false);
	    expect((0, _type.isFunction)(nil)).toBe(false);
	    expect((0, _type.isFunction)(none)).toBe(false);
	  });

	  it('isDate', function () {
	    expect((0, _type.isDate)(str)).toBe(false);
	    expect((0, _type.isDate)(num)).toBe(false);
	    expect((0, _type.isDate)(bool)).toBe(false);
	    expect((0, _type.isDate)(arr)).toBe(false);
	    expect((0, _type.isDate)(func)).toBe(false);
	    expect((0, _type.isDate)(obj)).toBe(false);
	    expect((0, _type.isDate)(date)).toBe(true);
	    expect((0, _type.isDate)(reg)).toBe(false);
	    expect((0, _type.isDate)(err)).toBe(false);
	    expect((0, _type.isDate)(nil)).toBe(false);
	    expect((0, _type.isDate)(none)).toBe(false);
	  });

	  it('isRegExp', function () {
	    expect((0, _type.isRegExp)(str)).toBe(false);
	    expect((0, _type.isRegExp)(num)).toBe(false);
	    expect((0, _type.isRegExp)(bool)).toBe(false);
	    expect((0, _type.isRegExp)(arr)).toBe(false);
	    expect((0, _type.isRegExp)(func)).toBe(false);
	    expect((0, _type.isRegExp)(obj)).toBe(false);
	    expect((0, _type.isRegExp)(date)).toBe(false);
	    expect((0, _type.isRegExp)(reg)).toBe(true);
	    expect((0, _type.isRegExp)(err)).toBe(false);
	    expect((0, _type.isRegExp)(nil)).toBe(false);
	    expect((0, _type.isRegExp)(none)).toBe(false);
	  });

	  it('isError', function () {
	    expect((0, _type.isError)(str)).toBe(false);
	    expect((0, _type.isError)(num)).toBe(false);
	    expect((0, _type.isError)(bool)).toBe(false);
	    expect((0, _type.isError)(arr)).toBe(false);
	    expect((0, _type.isError)(func)).toBe(false);
	    expect((0, _type.isError)(obj)).toBe(false);
	    expect((0, _type.isError)(date)).toBe(false);
	    expect((0, _type.isError)(reg)).toBe(false);
	    expect((0, _type.isError)(err)).toBe(true);
	    expect((0, _type.isError)(nil)).toBe(false);
	    expect((0, _type.isError)(none)).toBe(false);
	  });

	  it('isnull', function () {
	    expect((0, _type.isnull)(str)).toBe(false);
	    expect((0, _type.isnull)(num)).toBe(false);
	    expect((0, _type.isnull)(bool)).toBe(false);
	    expect((0, _type.isnull)(arr)).toBe(false);
	    expect((0, _type.isnull)(func)).toBe(false);
	    expect((0, _type.isnull)(obj)).toBe(false);
	    expect((0, _type.isnull)(date)).toBe(false);
	    expect((0, _type.isnull)(reg)).toBe(false);
	    expect((0, _type.isnull)(err)).toBe(false);
	    expect((0, _type.isnull)(nil)).toBe(true);
	    expect((0, _type.isnull)(none)).toBe(false);
	  });

	  it('notnull', function () {
	    expect((0, _type.notnull)(str)).toBe(true);
	    expect((0, _type.notnull)(num)).toBe(true);
	    expect((0, _type.notnull)(bool)).toBe(true);
	    expect((0, _type.notnull)(arr)).toBe(true);
	    expect((0, _type.notnull)(func)).toBe(true);
	    expect((0, _type.notnull)(obj)).toBe(true);
	    expect((0, _type.notnull)(date)).toBe(true);
	    expect((0, _type.notnull)(reg)).toBe(true);
	    expect((0, _type.notnull)(err)).toBe(true);
	    expect((0, _type.notnull)(nil)).toBe(false);
	    expect((0, _type.notnull)(none)).toBe(true);
	  });

	  it('undef', function () {
	    expect((0, _type.undef)(str)).toBe(false);
	    expect((0, _type.undef)(num)).toBe(false);
	    expect((0, _type.undef)(bool)).toBe(false);
	    expect((0, _type.undef)(arr)).toBe(false);
	    expect((0, _type.undef)(func)).toBe(false);
	    expect((0, _type.undef)(obj)).toBe(false);
	    expect((0, _type.undef)(date)).toBe(false);
	    expect((0, _type.undef)(reg)).toBe(false);
	    expect((0, _type.undef)(err)).toBe(false);
	    expect((0, _type.undef)(nil)).toBe(false);
	    expect((0, _type.undef)(none)).toBe(true);
	  });

	  it('notundef', function () {
	    expect((0, _type.notundef)(str)).toBe(true);
	    expect((0, _type.notundef)(num)).toBe(true);
	    expect((0, _type.notundef)(bool)).toBe(true);
	    expect((0, _type.notundef)(arr)).toBe(true);
	    expect((0, _type.notundef)(func)).toBe(true);
	    expect((0, _type.notundef)(obj)).toBe(true);
	    expect((0, _type.notundef)(date)).toBe(true);
	    expect((0, _type.notundef)(reg)).toBe(true);
	    expect((0, _type.notundef)(err)).toBe(true);
	    expect((0, _type.notundef)(nil)).toBe(true);
	    expect((0, _type.notundef)(none)).toBe(false);
	  });

	  it('exist', function () {
	    expect((0, _type.exist)(str)).toBe(true);
	    expect((0, _type.exist)(num)).toBe(true);
	    expect((0, _type.exist)(bool)).toBe(true);
	    expect((0, _type.exist)(arr)).toBe(true);
	    expect((0, _type.exist)(func)).toBe(true);
	    expect((0, _type.exist)(obj)).toBe(true);
	    expect((0, _type.exist)(date)).toBe(true);
	    expect((0, _type.exist)(reg)).toBe(true);
	    expect((0, _type.exist)(err)).toBe(true);
	    expect((0, _type.exist)(nil)).toBe(false);
	    expect((0, _type.exist)(none)).toBe(false);
	  });

	  it('notexist', function () {
	    expect((0, _type.notexist)(str)).toBe(false);
	    expect((0, _type.notexist)(num)).toBe(false);
	    expect((0, _type.notexist)(bool)).toBe(false);
	    expect((0, _type.notexist)(arr)).toBe(false);
	    expect((0, _type.notexist)(func)).toBe(false);
	    expect((0, _type.notexist)(obj)).toBe(false);
	    expect((0, _type.notexist)(date)).toBe(false);
	    expect((0, _type.notexist)(reg)).toBe(false);
	    expect((0, _type.notexist)(err)).toBe(false);
	    expect((0, _type.notexist)(nil)).toBe(true);
	    expect((0, _type.notexist)(none)).toBe(true);
	  });

	  it('isObject', function () {
	    expect((0, _type.isObject)(str)).toBe(false);
	    expect((0, _type.isObject)(num)).toBe(false);
	    expect((0, _type.isObject)(bool)).toBe(false);
	    expect((0, _type.isObject)(arr)).toBe(false);
	    expect((0, _type.isObject)(func)).toBe(false);
	    expect((0, _type.isObject)(obj)).toBe(true);
	    expect((0, _type.isObject)(date)).toBe(false);
	    expect((0, _type.isObject)(reg)).toBe(false);
	    expect((0, _type.isObject)(err)).toBe(false);
	    expect((0, _type.isObject)(nil)).toBe(false);
	    expect((0, _type.isObject)(none)).toBe(false);
	  });

	  it('isEmpty', function () {
	    expect((0, _type.isEmpty)(str)).toBe(false);
	    expect((0, _type.isEmpty)(num)).toBe(false);
	    expect((0, _type.isEmpty)(bool)).toBe(false);
	    expect((0, _type.isEmpty)(arr)).toBe(false);
	    expect((0, _type.isEmpty)(func)).toBe(false);
	    expect((0, _type.isEmpty)(obj)).toBe(false);
	    expect((0, _type.isEmpty)(date)).toBe(false);
	    expect((0, _type.isEmpty)(reg)).toBe(false);
	    expect((0, _type.isEmpty)(err)).toBe(false);
	    expect((0, _type.isEmpty)(nil)).toBe(true);
	    expect((0, _type.isEmpty)(none)).toBe(true);
	    expect((0, _type.isEmpty)('')).toBe(true);
	    expect((0, _type.isEmpty)([])).toBe(true);
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-08 11:29:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 12:04:97
	    */

/***/ },
/* 23 */
/*!*************************************!*\
  !*** ./test/unit/specs/url_spec.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _url = __webpack_require__(/*! url */ 24);

	describe('url related', function () {
	  it('genUrlSep', function () {
	    var url = 'https://www.baidu.com/';
	    expect((0, _url.genUrlSep)(url)).toBe('?');
	    url = 'https://www.baidu.com/?k=v';
	    expect((0, _url.genUrlSep)(url)).toBe('&');
	  });
	  it('object2query', function () {
	    var obj = {
	      k1: 'v1',
	      k2: 2
	    };
	    var str = 'k1=v1&k2=2';
	    expect((0, _url.object2query)(obj)).toBe(str);
	  });
	  it('url2origin', function () {
	    var url = 'http://www.baidu.com/';
	    expect((0, _url.url2origin)(url)).toBe('http://www.baidu.com');
	    url = 'http://www.baidu.com';
	    expect((0, _url.url2origin)(url)).toBe('http://www.baidu.com');
	    url = 'http://www.baidu.com:8080/';
	    expect((0, _url.url2origin)(url)).toBe('http://www.baidu.com:8080');
	    url = 'http://www.baidu.com:8080';
	    expect((0, _url.url2origin)(url)).toBe('http://www.baidu.com:8080');

	    url = 'https://www.baidu.com/';
	    expect((0, _url.url2origin)(url)).toBe('https://www.baidu.com');
	    url = 'https://www.baidu.com';
	    expect((0, _url.url2origin)(url)).toBe('https://www.baidu.com');
	    url = 'https://www.baidu.com:8080/';
	    expect((0, _url.url2origin)(url)).toBe('https://www.baidu.com:8080');
	    url = 'https://www.baidu.com:8080';
	    expect((0, _url.url2origin)(url)).toBe('https://www.baidu.com:8080');
	  });
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-07-08 11:29:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-10 12:40:22
	    */

/***/ },
/* 24 */
/*!********************!*\
  !*** ./src/url.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.url2origin = undefined;
	exports.genUrlSep = genUrlSep;
	exports.object2query = object2query;

	var _object = __webpack_require__(/*! ./object */ 20);

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
/******/ ]);