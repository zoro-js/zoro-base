import {
  isJSON,
  parseJSON
} from 'json'

describe('json related', () => {
  it('isJSON', () => {
    expect(isJSON(1)).toEqual(false)
    expect(isJSON('')).toEqual(false)
    expect(isJSON('{}')).toEqual(true)
  })

  it('parseJSON', () => {
    const obj1 = {
      key: 'value'
    }
    expect(parseJSON(JSON.stringify(obj1))).toEqual(obj1)
    const obj2 = {
      obj: {
        obj: {
          key: 'value'
        }
      }
    }
    expect(parseJSON(JSON.stringify(obj2))).toEqual(obj2)
  })
})
