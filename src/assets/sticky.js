let listenAction
let stickyTop
let zIndex

export default {
  bind (el, binding) {
    const elStyle = el.style
    const params = binding.value || {}
    stickyTop = params.stickyTop || 0
    zIndex = params.zIndex || 1000

    elStyle.position = '-webkit-sticky'
    elStyle.position = 'sticky'

    // if the browser support css sticky（Currently Safari, Firefox and Chrome Canary）
    if (~elStyle.position.indexOf('sticky')) {
      elStyle.top = `${stickyTop}px`
      elStyle.zIndex = zIndex
      return
    }

    elStyle.position = 'static'

    let childStyle = el.firstElementChild.style
    childStyle.cssText = `top: ${stickyTop}px; z-index: ${zIndex}; ${childStyle.cssText}`

    let active = false

    const sticky = () => {
      if (active) {
        return
      }
      if (!elStyle.height) {
        elStyle.height = `${el.offsetHeight}px`
      }
      childStyle.willChange = 'transform'
      childStyle.position = 'fixed'
      childStyle.width = `${el.offsetWidth}px`
      active = true
    }

    const reset = () => {
      if (!active) {
        return
      }
      childStyle.position = 'static'
      childStyle.width = `${el.offsetWidth}px`
      active = false
    }

    const check = () => {
      const offsetTop = el.getBoundingClientRect().top
      if (offsetTop <= stickyTop) {
        sticky()
        return
      }
      reset()
    }

    listenAction = () => {
      if (!window.requestAnimationFrame) {
        return setTimeout(check, 16)
      }

      window.requestAnimationFrame(check)
    }

    window.addEventListener('scroll', listenAction)
  },

  unbind () {
    window.removeEventListener('scroll', listenAction)
  },

  update (el, binding) {
    const params = binding.value || {}
    stickyTop = params.stickyTop || 0
    zIndex = params.zIndex || 1000

    let childStyle = el.firstElementChild.style
    el.style.top = childStyle.top = `${stickyTop}px`
    el.style.zIndex = childStyle.zIndex = zIndex
  }
}

// WEBPACK FOOTER //
// ../DCS-common/src/directive/sticky.js