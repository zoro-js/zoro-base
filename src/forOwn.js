/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-10 11:22:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 11:25:33
*/

export default function (obj = {}, callback = ()=>{}, that) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      callback.call(that, key, obj[key])
    }
  }
}
