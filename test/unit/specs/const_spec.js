/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 13:26:30
*/

import * as consts from 'const'

describe('const', () => {
  it('o', () => {
    expect(consts.o).toEqual(jasmine.any(Object))
  })
  it('emptyObj', () => {
    expect(consts.emptyObj).toEqual(jasmine.any(Object))
  })
  it('f', () => {
    expect(consts.f).toEqual(jasmine.any(Function))
  })
  it('emptyFunc', () => {
    expect(consts.emptyFunc).toEqual(jasmine.any(Function))
  })
  it('regBlank', () => {
    const blank = ' '
    expect(consts.regBlank.test(blank)).toBe(true)
    const noBlank = ''
    expect(consts.regBlank.test(noBlank)).toBe(false)
  })
  it('regWhiteSpace', () => {
    const blank = ' '
    expect(consts.regWhiteSpace.test(blank)).toBe(true)
    const noBlank = ''
    expect(consts.regWhiteSpace.test(noBlank)).toBe(false)
  })
})
