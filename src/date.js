/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-23 13:40:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-23 13:42:08
*/

var date = {}

date.dateFromDateTimeLocal = function (str) {
  return new Date(str.replace(/-/g, '/').replace('T', ' '))
}

module.exports = date
