/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:58:32
*/

var dom = require('dom')

xdescribe('dataset', () => {
  it('default', () => {
    var domStr = '<div id="divDataset"></div>'
    document.body.innerHTML += domStr
    var div = document.getElementById('divDataset')
    var name = dom.dataset(div, 'name')
    // name is '', null, or undefined
    expect(!name).toBe(true)
    dom.dataset(div, 'name', 'foo')
    expect(dom.dataset(div, 'name')).toBe('foo')
    dom.remove(div)
  })
})
