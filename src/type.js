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

export function getClass (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

export function typeOf (obj) {
  return getClass(obj).toLowerCase()
}

export function isString (obj) {
  return typeOf(obj) === 'string'
}

export function isNumber (obj) {
  return typeOf(obj) === 'number'
}

export function isBoolean (obj) {
  return typeOf(obj) === 'boolean'
}

export function isArray (obj) {
  return typeOf(obj) === 'array'
}

export function isFunction (obj) {
  return typeOf(obj) === 'function'
}

export function isDate (obj) {
  return typeOf(obj) === 'date'
}

export function isRegExp (obj) {
  return typeOf(obj) === 'regexp'
}

export function isError (obj) {
  return typeOf(obj) === 'error'
}

export function isnull (obj) {
  return obj === null
}

export function notnull (obj) {
  return obj !== null
}

// 需要用 typeof 来比较，兼容性好
export function undef (obj) {
  return typeof obj === 'undefined'
}

export function notundef (obj) {
  return typeof obj !== 'undefined'
}

export function exist (obj) {
  return notundef(obj) && notnull(obj)
}

export function notexist (obj) {
  return undef(obj) || isnull(obj)
}

export function isObject (obj) {
  return exist(obj) && typeOf(obj) === 'object'
}

/**
 * 是否是空值
 * @param  {Object}  obj 待检查的对象
 * @return {Boolean}     如果是 null/undefined/''/[] 返回 true
 */
export function isEmpty (obj) {
  return notexist(obj) || ((isString(obj) || isArray(obj)) && obj.length === 0)
}
