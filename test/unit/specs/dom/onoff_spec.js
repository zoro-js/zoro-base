/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-09 19:24:05
*/

import { on, off } from 'dom'

describe('on/off', () => {
  let cb
  const body = document.body

  beforeEach(() => {
    cb = jasmine.createSpy('cb')
    on(body, 'click', cb)
  })

  afterEach(() => {
    off(body, 'click', cb)
  })

  it('on', () => {
    body.click()
    expect(cb).toHaveBeenCalled()
  })

  it('multi', () => {
    expect(cb.calls.count()).toEqual(0)
    body.click()
    expect(cb.calls.count()).toEqual(1)
    body.click()
    expect(cb.calls.count()).toBe(2)
  })

  it('off', () => {
    body.click()
    expect(cb.calls.count()).toEqual(1)
    off(body, 'click', cb)
    body.click()
    expect(cb.calls.count()).toBe(1)
  })
})
