/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 12:42:13
*/

import getGlobal from './getGlobal'

export function blobFromDataURL (dataURL) {
  const window = getGlobal()
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = window.atob(dataURL.split(',')[1])
  } else {
    byteString = window.decodeURIComponent(dataURL.split(',')[1])
  }

  // separate out the mime component
  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new window.Blob([ia], {type: mimeString})
}

export function blobFromCanvas (canvas, cb, mimeType = 'image/jpeg', quality = 1) {
  if (canvas.toBlob) {
    canvas.toBlob(cb, mimeType, quality)
  } else {
    const dataURL = canvas.toDataURL(mimeType, quality)
    cb(blobFromDataURL(dataURL))
  }
}
