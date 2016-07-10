/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-23 13:40:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 13:03:62
*/

export function fix (number, count) {
  count = count || 2
  let str = '' + number
  while (str.length < count) {
    str = '0' + str
  }
  return str
}

export function getYearStr (date) {
  return '' + date.getFullYear()
}

export function getMonthStr (date) {
  return fix(date.getMonth() + 1)
}

export function getDayStr (date) {
  return fix(date.getDate())
}

export function getHourStr (date) {
  return fix(date.getHours())
}

export function getMinuteStr (date) {
  return fix(date.getMinutes())
}

export function getSecondStr (date) {
  return fix(date.getSeconds())
}

export function getMillisecondStr (date) {
  return fix(date.getMilliseconds(), 3)
}

export const format = (() => {
  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g
  var mappers = {
    yyyy: getYearStr,
    MM: getMonthStr,
    dd: getDayStr,
    hh: getHourStr,
    mm: getMinuteStr,
    ss: getSecondStr,
    SSS: getMillisecondStr
  }
  return function (date, format) {
    date = new Date(date)
    if (isNaN(+date)) {
      return 'invalid date'
    }
    format = format || 'yyyy-MM-dd'
    return format.replace(reg, function (match) {
      return mappers[match](date)
    })
  }
})()

export function dateFromDateTimeLocal (str) {
  str = '' + str
  return new Date(str.replace(/-/g, '/').replace('T', ' '))
}
