/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-09 19:24:26
*/

import {
  notexist,
  isEmpty
} from 'type'

import {
  remove,
  dataset
} from 'dom'

describe('dom', () => {
  it('remove', () => {
    const domStr = '<div id="divRemove"></div>'
    document.body.innerHTML += domStr
    const div = document.getElementById('divRemove')
    expect(div.parentNode).toEqual(jasmine.anything())
    remove(div)
    expect(notexist(div.parentNode)).toBe(true)
  })

  it('dataset', () => {
    const domStr = '<div id="divDataset"></div>'
    document.body.innerHTML += domStr
    const div = document.getElementById('divDataset')
    const name = dataset(div, 'name')
    expect(isEmpty(name)).toBe(true)
    dataset(div, 'name', 'foo')
    expect(dataset(div, 'name')).toBe('foo')
    remove(div)
  })

  // TODO html2node
})
