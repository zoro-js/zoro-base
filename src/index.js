/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-23 13:45:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-13T12:13:51+08:00
*/

import * as blob from './blob'
import * as css from './css'
import * as consts from './const'
import * as date from './date'
import * as dom from './dom'
import forOwn from './forOwn'
import * as id from './id'
import * as json from './json'
import mixin from './mixin'
import * as object from './object'
import * as type from './type'
import * as url from './url'

var obj = object.merge(
  {},
  blob,
  css,
  consts,
  date,
  dom,
  {
    forOwn
  },
  id,
  json,
  {
    mixin
  },
  object,
  type,
  url
)

// TODO obj.__esModule ???
delete obj.__esModule

export default obj
