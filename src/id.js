/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:35:03
*/

export const uniqueID = (() => {
  let id = 0
  return () => {
    return '' + (id++)
  }
})()
