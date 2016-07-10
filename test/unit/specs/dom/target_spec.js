/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-09 19:24:93
*/

import { on, target } from 'dom'

describe('target', () => {
  const bd = document.body
  const domStr = '<div id="p1"><i id="c1"></i></div><div id="p2"><i id="c2"></i></div>'
  bd.innerHTML += domStr
  const p1 = document.getElementById('p1')
  const p2 = document.getElementById('p2')
  const c2 = document.getElementById('c2')

  it('default', function (done) {
    on(p1, 'click', function (event) {
      expect(target(event)).toBe(p1)
      done()
    })
    p1.click()
  })

  it('bubble', function (done) {
    on(p2, 'click', function (event) {
      expect(target(event)).toBe(c2)
      done()
    })
    c2.click()
  })
})
