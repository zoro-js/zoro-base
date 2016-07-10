import { createIframe } from 'dom'

const http = location.protocol === 'http:'
const src1 = http ? 'http://www.163.com/' : 'https://www.baidu.com/'
// const src2 = http ? 'http://mail.163.com/' : 'https://github.com/'

describe('iframe', () => {
  describe('createIframe', () => {
    it('empty options', function (done) {
      const iframe = createIframe()
      expect(iframe.name).toEqual('')
      expect(+iframe.frameBorder).toEqual(0)
      expect(iframe.style.display).toEqual('none')
      setTimeout(() => {
        expect(iframe.src).toEqual('about:blank')
        done()
      }, 10)
    })
    it('name', () => {
      const options = {
        name: 'foo'
      }
      const iframe = createIframe(options)
      expect(iframe.name).toEqual('foo')
    })
    it('visible', () => {
      const options = {
        visible: true
      }
      const iframe = createIframe(options)
      expect(iframe.style.display).not.toEqual('none')
    })
    it('src', function (done) {
      const options = {
        src: src1
      }
      const iframe = createIframe(options)
      setTimeout(() => {
        expect(iframe.src).toEqual(src1)
        done()
      }, 10)
    })
  })

  describe('onload related', () => {
    let onload
    let options
    let iframe
    beforeEach(() => {
      onload = jasmine.createSpy('onload')
      options = {
        onload: onload
      }
    })
    it('onload', function (done) {
      iframe = createIframe(options)
      setTimeout(() => {
        expect(onload.calls.count()).toEqual(1)
        iframe.src = src1
        setTimeout(() => {
          expect(onload.calls.count()).toEqual(1)
          done()
        }, 2000)
      }, 1000)
    })
    it('multi onload', function (done) {
      options.multi = true
      iframe = createIframe(options)
      setTimeout(() => {
        expect(onload.calls.count()).toEqual(1)
        iframe.src = src1
        setTimeout(() => {
          expect(onload.calls.count()).toEqual(2)
          done()
        }, 2000)
      }, 1000)
    })
  })
})
