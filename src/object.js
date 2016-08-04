/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-01-07 22:16:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-08-04T12:05:07+08:00
*/

import mixin from './mixin'
import forOwn from './forOwn'
import {
  isArray,
  isFunction,
  isDate,
  isObject,
  undef,
  exist,
  notexist
} from './type'

export function simpleClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * mock Object.assign
 * - 将 sources 的 enumerable own properties 拷贝到 target
 * @param  {Object} target={}  目标对象
 * @param  {Object} ...sources 待拷贝的对象
 * @return {Object}            目标对象
 */
export function merge (target = {}, ...sources) {
  sources.forEach(source => {
    mixin(target, source)
  })
  return target
}

/**
 * 对于 source 的 enumerable own properties, 如果 target 没有此属性, 将 source 的值赋给 target
 * @param  {Object} target 目标对象
 * @param  {Object} source 源对象
 * @return {Object}        目标对象
 */
export function fillUndef (target, source) {
  forOwn(source, (key, value) => {
    if (undef(target[key])) {
      target[key] = value
    }
  })
  return target
}

/**
 * 如果 target 没有 key 对应的属性, 那么将 value 赋给他
 * @param  {Object} target 目标对象
 * @param  {String} key    属性名
 * @param  {Object} value  属性值
 * @return {Object}        属性值
 */
export function checkWithDefault (target, key, value) {
  let v = target[key] || target[key.toLowerCase()]
  if (notexist(v)) {
    v = value
    target[key] = v
  }
  return v
}

/**
 * 对于 target 的 enumerable own properties, 如果 source 存在对应的值, 将其赋给 target
 * @param  {Object} target 目标对象
 * @param  {Object} source 源对象
 * @return {Object}        目标对象
 */
export function fetch (target, source) {
  forOwn(target, (key, value) => {
    if (exist(source[key])) {
      target[key] = source[key]
    }
  })
  return target
}

export function string2object (string = '', sep = ',') {
  const obj = {}
  string.split(sep).forEach(pair => {
    const arr = pair.split('=')
    const key = arr.shift()
    if (!key) {
      return
    }
    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='))
  })
  return obj
}

export function object2string (obj, sep, encode) {
  if (!obj) {
    return ''
  }
  const arr = []
  forOwn(obj, (key, value) => {
    if (isFunction(value)) {
      return
    }
    if (isDate(value)) {
      value = value.getTime()
    } else if (isArray(value)) {
      value = value.join(',')
    } else if (isObject(value)) {
      value = JSON.stringify(value)
    }
    if (encode) {
      value = encodeURIComponent(value)
    }
    arr.push(encodeURIComponent(key) + '=' + value)
  })
  return arr.join(sep || ',')
}
