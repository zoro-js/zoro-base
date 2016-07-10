/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:04:97
*/

import {
  getClass,
  typeOf,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isFunction,
  isDate,
  isRegExp,
  isError,
  isnull,
  notnull,
  undef,
  notundef,
  exist,
  notexist,
  isObject,
  isEmpty
} from 'type'

describe('type related', () => {
  var str = 'foo'
  var num = 1
  var bool = true
  var arr = ['foo']
  var func = () => {}
  var obj = {
    foo: 'bar'
  }
  var nil = null
  var none
  var date = new Date()
  var reg = /abc/
  var err = new Error()

  it('getClass', () => {
    expect(getClass(str)).toBe('String')
    expect(getClass(num)).toBe('Number')
    expect(getClass(bool)).toBe('Boolean')
    expect(getClass(arr)).toBe('Array')
    expect(getClass(func)).toBe('Function')
    expect(getClass(obj)).toBe('Object')
    expect(getClass(date)).toBe('Date')
    expect(getClass(reg)).toBe('RegExp')
    expect(getClass(err)).toBe('Error')
    expect(getClass(nil)).toBe('Null')
    expect(getClass(none)).toBe('Undefined')
  })

  it('typeOf', () => {
    expect(typeOf(str)).toBe('string')
    expect(typeOf(num)).toBe('number')
    expect(typeOf(bool)).toBe('boolean')
    expect(typeOf(arr)).toBe('array')
    expect(typeOf(func)).toBe('function')
    expect(typeOf(obj)).toBe('object')
    expect(typeOf(date)).toBe('date')
    expect(typeOf(reg)).toBe('regexp')
    expect(typeOf(err)).toBe('error')
    expect(typeOf(nil)).toBe('null')
    expect(typeOf(none)).toBe('undefined')
  })

  it('isString', () => {
    expect(isString(str)).toBe(true)
    expect(isString(num)).toBe(false)
    expect(isString(bool)).toBe(false)
    expect(isString(arr)).toBe(false)
    expect(isString(func)).toBe(false)
    expect(isString(obj)).toBe(false)
    expect(isString(date)).toBe(false)
    expect(isString(reg)).toBe(false)
    expect(isString(err)).toBe(false)
    expect(isString(nil)).toBe(false)
    expect(isString(none)).toBe(false)
  })

  it('isNumber', () => {
    expect(isNumber(str)).toBe(false)
    expect(isNumber(num)).toBe(true)
    expect(isNumber(bool)).toBe(false)
    expect(isNumber(arr)).toBe(false)
    expect(isNumber(func)).toBe(false)
    expect(isNumber(obj)).toBe(false)
    expect(isNumber(date)).toBe(false)
    expect(isNumber(reg)).toBe(false)
    expect(isNumber(err)).toBe(false)
    expect(isNumber(nil)).toBe(false)
    expect(isNumber(none)).toBe(false)
  })

  it('isBoolean', () => {
    expect(isBoolean(str)).toBe(false)
    expect(isBoolean(num)).toBe(false)
    expect(isBoolean(bool)).toBe(true)
    expect(isBoolean(arr)).toBe(false)
    expect(isBoolean(func)).toBe(false)
    expect(isBoolean(obj)).toBe(false)
    expect(isBoolean(date)).toBe(false)
    expect(isBoolean(reg)).toBe(false)
    expect(isBoolean(err)).toBe(false)
    expect(isBoolean(nil)).toBe(false)
    expect(isBoolean(none)).toBe(false)
  })

  it('isArray', () => {
    expect(isArray(str)).toBe(false)
    expect(isArray(num)).toBe(false)
    expect(isArray(bool)).toBe(false)
    expect(isArray(arr)).toBe(true)
    expect(isArray(func)).toBe(false)
    expect(isArray(obj)).toBe(false)
    expect(isArray(date)).toBe(false)
    expect(isArray(reg)).toBe(false)
    expect(isArray(err)).toBe(false)
    expect(isArray(nil)).toBe(false)
    expect(isArray(none)).toBe(false)
  })

  it('isFunction', () => {
    expect(isFunction(str)).toBe(false)
    expect(isFunction(num)).toBe(false)
    expect(isFunction(bool)).toBe(false)
    expect(isFunction(arr)).toBe(false)
    expect(isFunction(func)).toBe(true)
    expect(isFunction(obj)).toBe(false)
    expect(isFunction(date)).toBe(false)
    expect(isFunction(reg)).toBe(false)
    expect(isFunction(err)).toBe(false)
    expect(isFunction(nil)).toBe(false)
    expect(isFunction(none)).toBe(false)
  })

  it('isDate', () => {
    expect(isDate(str)).toBe(false)
    expect(isDate(num)).toBe(false)
    expect(isDate(bool)).toBe(false)
    expect(isDate(arr)).toBe(false)
    expect(isDate(func)).toBe(false)
    expect(isDate(obj)).toBe(false)
    expect(isDate(date)).toBe(true)
    expect(isDate(reg)).toBe(false)
    expect(isDate(err)).toBe(false)
    expect(isDate(nil)).toBe(false)
    expect(isDate(none)).toBe(false)
  })

  it('isRegExp', () => {
    expect(isRegExp(str)).toBe(false)
    expect(isRegExp(num)).toBe(false)
    expect(isRegExp(bool)).toBe(false)
    expect(isRegExp(arr)).toBe(false)
    expect(isRegExp(func)).toBe(false)
    expect(isRegExp(obj)).toBe(false)
    expect(isRegExp(date)).toBe(false)
    expect(isRegExp(reg)).toBe(true)
    expect(isRegExp(err)).toBe(false)
    expect(isRegExp(nil)).toBe(false)
    expect(isRegExp(none)).toBe(false)
  })

  it('isError', () => {
    expect(isError(str)).toBe(false)
    expect(isError(num)).toBe(false)
    expect(isError(bool)).toBe(false)
    expect(isError(arr)).toBe(false)
    expect(isError(func)).toBe(false)
    expect(isError(obj)).toBe(false)
    expect(isError(date)).toBe(false)
    expect(isError(reg)).toBe(false)
    expect(isError(err)).toBe(true)
    expect(isError(nil)).toBe(false)
    expect(isError(none)).toBe(false)
  })

  it('isnull', () => {
    expect(isnull(str)).toBe(false)
    expect(isnull(num)).toBe(false)
    expect(isnull(bool)).toBe(false)
    expect(isnull(arr)).toBe(false)
    expect(isnull(func)).toBe(false)
    expect(isnull(obj)).toBe(false)
    expect(isnull(date)).toBe(false)
    expect(isnull(reg)).toBe(false)
    expect(isnull(err)).toBe(false)
    expect(isnull(nil)).toBe(true)
    expect(isnull(none)).toBe(false)
  })

  it('notnull', () => {
    expect(notnull(str)).toBe(true)
    expect(notnull(num)).toBe(true)
    expect(notnull(bool)).toBe(true)
    expect(notnull(arr)).toBe(true)
    expect(notnull(func)).toBe(true)
    expect(notnull(obj)).toBe(true)
    expect(notnull(date)).toBe(true)
    expect(notnull(reg)).toBe(true)
    expect(notnull(err)).toBe(true)
    expect(notnull(nil)).toBe(false)
    expect(notnull(none)).toBe(true)
  })

  it('undef', () => {
    expect(undef(str)).toBe(false)
    expect(undef(num)).toBe(false)
    expect(undef(bool)).toBe(false)
    expect(undef(arr)).toBe(false)
    expect(undef(func)).toBe(false)
    expect(undef(obj)).toBe(false)
    expect(undef(date)).toBe(false)
    expect(undef(reg)).toBe(false)
    expect(undef(err)).toBe(false)
    expect(undef(nil)).toBe(false)
    expect(undef(none)).toBe(true)
  })

  it('notundef', () => {
    expect(notundef(str)).toBe(true)
    expect(notundef(num)).toBe(true)
    expect(notundef(bool)).toBe(true)
    expect(notundef(arr)).toBe(true)
    expect(notundef(func)).toBe(true)
    expect(notundef(obj)).toBe(true)
    expect(notundef(date)).toBe(true)
    expect(notundef(reg)).toBe(true)
    expect(notundef(err)).toBe(true)
    expect(notundef(nil)).toBe(true)
    expect(notundef(none)).toBe(false)
  })

  it('exist', () => {
    expect(exist(str)).toBe(true)
    expect(exist(num)).toBe(true)
    expect(exist(bool)).toBe(true)
    expect(exist(arr)).toBe(true)
    expect(exist(func)).toBe(true)
    expect(exist(obj)).toBe(true)
    expect(exist(date)).toBe(true)
    expect(exist(reg)).toBe(true)
    expect(exist(err)).toBe(true)
    expect(exist(nil)).toBe(false)
    expect(exist(none)).toBe(false)
  })

  it('notexist', () => {
    expect(notexist(str)).toBe(false)
    expect(notexist(num)).toBe(false)
    expect(notexist(bool)).toBe(false)
    expect(notexist(arr)).toBe(false)
    expect(notexist(func)).toBe(false)
    expect(notexist(obj)).toBe(false)
    expect(notexist(date)).toBe(false)
    expect(notexist(reg)).toBe(false)
    expect(notexist(err)).toBe(false)
    expect(notexist(nil)).toBe(true)
    expect(notexist(none)).toBe(true)
  })

  it('isObject', () => {
    expect(isObject(str)).toBe(false)
    expect(isObject(num)).toBe(false)
    expect(isObject(bool)).toBe(false)
    expect(isObject(arr)).toBe(false)
    expect(isObject(func)).toBe(false)
    expect(isObject(obj)).toBe(true)
    expect(isObject(date)).toBe(false)
    expect(isObject(reg)).toBe(false)
    expect(isObject(err)).toBe(false)
    expect(isObject(nil)).toBe(false)
    expect(isObject(none)).toBe(false)
  })

  it('isEmpty', () => {
    expect(isEmpty(str)).toBe(false)
    expect(isEmpty(num)).toBe(false)
    expect(isEmpty(bool)).toBe(false)
    expect(isEmpty(arr)).toBe(false)
    expect(isEmpty(func)).toBe(false)
    expect(isEmpty(obj)).toBe(false)
    expect(isEmpty(date)).toBe(false)
    expect(isEmpty(reg)).toBe(false)
    expect(isEmpty(err)).toBe(false)
    expect(isEmpty(nil)).toBe(true)
    expect(isEmpty(none)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty([])).toBe(true)
  })
})
