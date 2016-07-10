/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-03-30 16:52:45
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:57:03
*/

export function detectCSSFeature (featurename) {
  let feature = false
  const domPrefixes = 'Webkit Moz ms O'.split(' ')
  const elm = document.createElement('div')
  let featurenameCapital = null

  featurename = featurename.toLowerCase()

  if (elm.style[featurename] !== undefined) {
    feature = true
  }

  if (feature === false) {
    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1)
    for (let i = 0; i < domPrefixes.length; i++) {
      if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
        feature = true
        break
      }
    }
  }
  return feature
}
