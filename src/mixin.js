/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 11:27:24
*/

import forOwn from './forOwn'

export default (target, source) => {
  forOwn(source, (key, value) => {
    target[key] = value
  })
}
