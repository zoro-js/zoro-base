/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:41:71
*/

import {object2string} from './object'

export function genUrlSep (url) {
  return url.indexOf('?') < 0 ? '?' : '&'
}

export function object2query (obj) {
  return object2string(obj, '&', true)
}

export const url2origin = (() => {
  const reg = /^([\w]+?:\/\/.*?(?=\/|$))/i
  return url => {
    if (reg.test(url || '')) {
      return RegExp.$1.toLowerCase()
    }
    return ''
  }
})()
