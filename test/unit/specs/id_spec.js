/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:36:44
*/

import {uniqueID} from 'id'

describe('id related', () => {
  it('uniqueID', () => {
    for (let i = 0; i < 10; i++) {
      expect(uniqueID()).toBe('' + i)
    }
  })
})
