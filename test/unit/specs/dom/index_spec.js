/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-09 19:24:26
*/

var dom = require('dom')

xdescribe('dom', () => {
  it('remove', () => {
    var domStr = '<div id="divRemove"></div>'
    document.body.innerHTML += domStr
    var div = document.getElementById('divRemove')
    expect(div.parentNode).toEqual(jasmine.anything())
    dom.remove(div)
        // is null or undefined
    expect(div.parentNode == null).toBe(true)
  })
})
