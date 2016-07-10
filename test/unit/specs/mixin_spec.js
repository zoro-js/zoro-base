/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 11:01:94
*/

import mixin from 'mixin'

describe('mixin', () => {
  it('default', () => {
    var foo = {}
    var bar = {
      key: 'value'
    }
    mixin(foo, bar)
    expect(foo).toEqual(jasmine.objectContaining({
      key: 'value'
    }))
  })
})
