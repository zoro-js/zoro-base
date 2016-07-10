/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:40:22
*/

import {
  genUrlSep,
  object2query,
  url2origin
} from 'url'

describe('url related', () => {
  it('genUrlSep', () => {
    let url = 'https://www.baidu.com/'
    expect(genUrlSep(url)).toBe('?')
    url = 'https://www.baidu.com/?k=v'
    expect(genUrlSep(url)).toBe('&')
  })
  it('object2query', () => {
    const obj = {
      k1: 'v1',
      k2: 2
    }
    const str = 'k1=v1&k2=2'
    expect(object2query(obj)).toBe(str)
  })
  it('url2origin', () => {
    let url = 'http://www.baidu.com/'
    expect(url2origin(url)).toBe('http://www.baidu.com')
    url = 'http://www.baidu.com'
    expect(url2origin(url)).toBe('http://www.baidu.com')
    url = 'http://www.baidu.com:8080/'
    expect(url2origin(url)).toBe('http://www.baidu.com:8080')
    url = 'http://www.baidu.com:8080'
    expect(url2origin(url)).toBe('http://www.baidu.com:8080')

    url = 'https://www.baidu.com/'
    expect(url2origin(url)).toBe('https://www.baidu.com')
    url = 'https://www.baidu.com'
    expect(url2origin(url)).toBe('https://www.baidu.com')
    url = 'https://www.baidu.com:8080/'
    expect(url2origin(url)).toBe('https://www.baidu.com:8080')
    url = 'https://www.baidu.com:8080'
    expect(url2origin(url)).toBe('https://www.baidu.com:8080')
  })
})
