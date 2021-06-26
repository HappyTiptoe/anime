import { AnimeConfig, AnimeOptions, AnimeExtendedElement } from './types'
import { debounce, throttle } from './utils'

const DEFAULT_CONFIG: AnimeConfig = {
  duration: 1000,
  delay: 0,
  offset: 0
}

function prepareEls(els: Element[], options: AnimeOptions): void {
  const classAttributes = [
    { name: 'anime' },
    { name: 'anime-duration', default: String(options.duration) },
    { name: 'anime-delay', default: String(options.delay) }
  ]

  els.forEach((el) => {
    classAttributes.forEach((attribute) => {
      const value = el.getAttribute(attribute.name)
      const className = `${attribute.name}-${value || attribute.default}`
      el.classList.add(className)

      if (value) {
        el.removeAttribute(attribute.name)
      }
    })
  })
}

function extendEls(
  els: Element[],
  options: AnimeOptions
): AnimeExtendedElement[] {
  return els.map((el) => {
    const windowHeight = window.innerHeight
    const offset = Number(el.getAttribute('anime-offset')) || options.offset
    const triggerSelector = el.getAttribute('anime-trigger')
    const triggerEl = triggerSelector
      ? (document.querySelector(triggerSelector) as HTMLElement)
      : (el as HTMLElement)

    const triggerPosition = triggerEl.offsetTop + offset - windowHeight

    return { $el: el, triggerPosition }
  })
}

function activateAnimations(els: AnimeExtendedElement[]): void {
  els.forEach((el) => {
    const { $el, triggerPosition } = el
    const distanceScrolled = window.pageYOffset

    if (distanceScrolled > triggerPosition) {
      $el.classList.add('anime-active')
    }
  })
}

export default function anime(config: AnimeConfig = {}): void {
  const options = { ...DEFAULT_CONFIG, config } as AnimeOptions
  const els = Array.from(document.querySelectorAll('[anime]'))
  let scrollListener: EventListener

  prepareEls(els, options)

  const refreshScrollListener = () => {
    if (scrollListener) {
      window.removeEventListener('scroll', scrollListener)
    }

    const extendedEls = extendEls(els, options)

    activateAnimations(extendedEls)

    scrollListener = throttle(() => activateAnimations(extendedEls), 50)
    window.addEventListener('scroll', scrollListener)
  }

  window.addEventListener('load', refreshScrollListener)
  window.addEventListener('resize', debounce(refreshScrollListener, 50))
  window.addEventListener(
    'orientationChange',
    debounce(refreshScrollListener, 50)
  )
}
