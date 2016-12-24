/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-08 11:29:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-12T16:49:46+08:00
*/

import {
  isFunction,
  exist
} from './type'

export function containsNode (parent, child) {
  if (parent === child) {
    return true
  }
  while (child.parentNode) {
    if (child.parentNode === parent) {
      return true
    }
    child = child.parentNode
  }
  return false
}

export function calcHeight (node) {
  const parent = node.parentNode || document.body
  node = node.cloneNode(true)
  node.style.display = 'block'
  node.style.opacity = 0
  node.style.height = 'auto'
  parent.appendChild(node)
  const height = node.offsetHeight
  parent.removeChild(node)
  return height
}

export function remove (node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}

export function dataset (node, key, value) {
  if (exist(value)) {
    node.setAttribute('data-' + key, value)
  } else {
    return node.getAttribute('data-' + key)
  }
}

export const addEventListener = (node, type, callback) => {
  if (node.addEventListener) {
    node.addEventListener(type, callback, false)
  } else if (node.attachEvent) {
    node.attachEvent('on' + type, callback)
  }
}
export const on = addEventListener

export const removeEventListener = (node, type, callback) => {
  if (node.removeEventListener) {
    node.removeEventListener(type, callback, false)
  } else if (node.detachEvent) {
    node.detachEvent('on' + type, callback)
  }
}
export const off = removeEventListener

export function target (event) {
  return event.target || event.srcElement
}

export function createIframe (options) {
  options = options || {}
  var iframe
  if (options.name) {
    try {
      iframe = document.createElement('<iframe name="' + options.name + '"></iframe>')
      iframe.frameBorder = 0
    } catch (error) {
      iframe = document.createElement('iframe')
      iframe.name = options.name
    }
  } else {
    iframe = document.createElement('iframe')
  }
  if (!options.visible) {
    iframe.style.display = 'none'
  }
  // on load
  function onIframeLoad (event) {
    if (!iframe.src) {
      return
    }
    if (!options.multi) {
      off(iframe, 'load', onIframeLoad)
    }
    options.onload(event)
  }
  if (isFunction(options.onload)) {
    on(iframe, 'load', onIframeLoad)
  }
    // will trigger onload
  var parent = options.parent;
  (parent || document.body).appendChild(iframe)
    // ensure trigger onload async
  var src = options.src || 'about:blank'
  setTimeout(() => {
    iframe.src = src
  }, 0)
  return iframe
}

export function html2node (html) {
  const div = document.createElement('div')
  div.innerHTML = html
  const children = []
  let i
  let l
  if (div.children) {
    for (i = 0, l = div.children.length; i < l; i++) {
      children.push(div.children[i])
    }
  } else {
    for (i = 0, l = div.childNodes.length; i < l; i++) {
      var child = div.childNodes[i]
      if (child.nodeType === 1) {
        children.push(child)
      }
    }
  }
  return children.length > 1 ? div : children[0]
}

export function scrollTop (top) {
  if (exist(top)) {
    document.documentElement.scrollTop = document.body.scrollTop = top
  }
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
