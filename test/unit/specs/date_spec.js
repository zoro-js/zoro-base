/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-10 13:00:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 13:23:62
*/

import {
  fix,
  getYearStr,
  getMonthStr,
  getDayStr,
  getHourStr,
  getMinuteStr,
  getSecondStr,
  getMillisecondStr,
  format,
  dateFromDateTimeLocal
} from 'date'

describe('date related', () => {
  const year = 1990
  // month 从 0 开始
  const month = 5
  const day = 16
  const hour = 8
  const minute = 22
  const second = 42
  const milisecond = 233
  const date = new Date(year, month, day, hour, minute, second, milisecond)

  it('fix', () => {
    expect(fix(1)).toBe('01')
    expect(fix(10)).toBe('10')
    expect(fix(1, 3)).toBe('001')
    expect(fix(10, 3)).toBe('010')
  })

  it('getYearStr', () => {
    expect(getYearStr(date)).toBe('' + year)
  })

  it('getMonthStr', () => {
    expect(getMonthStr(date)).toBe('0' + (month + 1))
  })

  it('getDayStr', () => {
    expect(getDayStr(date)).toBe('' + day)
  })

  it('getHourStr', () => {
    expect(getHourStr(date)).toBe('0' + hour)
  })

  it('getMinuteStr', () => {
    expect(getMinuteStr(date)).toBe('' + minute)
  })

  it('getSecondStr', () => {
    expect(getSecondStr(date)).toBe('' + second)
  })

  it('getMillisecondStr', () => {
    expect(getMillisecondStr(date)).toBe('' + milisecond)
  })

  it('format', () => {
    expect(format(date)).toBe(year + '-0' + (month + 1) + '-' + day)
    expect(format(date, 'yyyy-MM-dd hh:mm:ss:SSS')).toBe(year + '-0' + (month + 1) + '-' + day + ' 0' + hour + ':' + minute + ':' + second + ':' + milisecond)
  })

  // TODO dateFromDateTimeLocal
})
