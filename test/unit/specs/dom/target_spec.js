/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-09 19:24:93
*/

var dom = require('dom')

xdescribe('target', () => {
  var de = document.documentElement
  var bd = document.body
  var domStr = '<div id="p1"><i id="c1"></i></div><div id="p2"><i id="c2"></i></div>'
  bd.innerHTML += domStr
  var p1 = document.getElementById('p1')
  var c1 = document.getElementById('c1')
  var p2 = document.getElementById('p2')
  var c2 = document.getElementById('c2')
  it('default', function (done) {
    dom.on(p1, 'click', function (event) {
      expect(dom.target(event)).toBe(p1)
      done()
    })
    p1.click()
  })
  it('bubble', function (done) {
    dom.on(p2, 'click', function (event) {
      expect(dom.target(event)).toBe(c2)
      done()
    })
    c2.click()
  })
})
