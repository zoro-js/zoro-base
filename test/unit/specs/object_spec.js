/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-01-07 22:17:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:28:69
*/

import {
  simpleClone,
  merge,
  fillUndef,
  checkWithDefault,
  fetch,
  string2object,
  object2string
} from 'object'

describe('object related', () => {
  it('simpleClone', () => {
    var obj = {
      name: 'foo'
    }
    var objc = simpleClone(obj)
    expect(obj).not.toBe(objc)
    expect(obj).toEqual(objc)
  })

  it('merge', () => {
    var source = {
      a: 0
    }
    var target = {}
    var obj = merge(target, source)
    expect(obj).toBe(target)
    expect(obj).not.toBe(source)
    expect(obj).toEqual(source)
  })

  it('fillUndef', () => {
    var obj = {
      key1: 'aaa',
      key2: null
    }
    var dft = {
      key1: '111',
      key2: '222',
      key3: '333'
    }
    fillUndef(obj, dft)
    expect(obj).toEqual({
      key1: 'aaa',
      key2: null,
      key3: '333'
    })
  })

  it('checkWithDefault', () => {
    var initialValue = 'value'
    var obj = {
      key: initialValue
    }
    var value = checkWithDefault(obj, 'key', 'dft')
    expect(value).toBe(initialValue)
    value = checkWithDefault(obj, 'KEY', 'dft')
    expect(value).toBe(initialValue)
    value = checkWithDefault(obj, 'k', 'v')
    expect(value).toBe('v')
  })

  it('fetch', () => {
    var foo = {
      a: 0,
      b: 1,
      c: 2
    }
    var bar = {
      a: 'a',
      b: 'b',
      d: 'd'
    }
    var baz = {
      a: 'a',
      b: 'b',
      c: 2
    }
    expect(fetch(foo, bar)).toEqual(baz)
  })

  it('string2object', () => {
    var str = ''
    expect(string2object(str)).toEqual({})
    str = 'a=1'
    expect(string2object(str)).toEqual({ a: '1' })
    str = 'a=1&b=2'
    expect(string2object(str, '&')).toEqual({ a: '1', b: '2' })
  })

  it('object2string', () => {
    var obj = {
      k1: 'v1',
      k2: 2
    }
    expect(object2string(obj)).toBe('k1=v1,k2=2')
    expect(object2string(obj, '/')).toBe('k1=v1/k2=2')
  })
})
