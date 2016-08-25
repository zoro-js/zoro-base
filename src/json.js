import forOwn from './forOwn'
import {
  isString,
  isObject,
  typeOf
} from './type'

export function isJSON (str) {
  return isString(str) && str.indexOf('{') === 0 && str.lastIndexOf('}') === str.length - 1
}

export function parseJSON (obj) {
  try {
    if (isJSON(obj)) {
      obj = JSON.parse(obj)
    }
    if (isObject(obj)) {
      forOwn(obj, (key, value) => {
        switch (typeOf(value)) {
          case 'string':
          case 'object':
            obj[key] = parseJSON(value)
            break
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
  return obj
}
