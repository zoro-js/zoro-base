/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 13:26:30
*/

import {
  o,
  emptyObj,
  f,
  emptyFunc,
  regBlank,
  regWhiteSpace
} from 'const'

describe('const', () => {
  it('o', () => {
    expect(o).toEqual(jasmine.any(Object))
  })
  it('emptyObj', () => {
    expect(emptyObj).toEqual(jasmine.any(Object))
  })
  it('f', () => {
    expect(f).toEqual(jasmine.any(Function))
  })
  it('emptyFunc', () => {
    expect(emptyFunc).toEqual(jasmine.any(Function))
  })
  it('regBlank', () => {
    const blank = ' '
    expect(regBlank.test(blank)).toBe(true)
    const noBlank = ''
    expect(regBlank.test(noBlank)).toBe(false)
  })
  it('regWhiteSpace', () => {
    const blank = ' '
    expect(regWhiteSpace.test(blank)).toBe(true)
    const noBlank = ''
    expect(regWhiteSpace.test(noBlank)).toBe(false)
  })
})
