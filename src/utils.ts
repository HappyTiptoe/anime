import { Fn } from './types'

export function debounce<F extends Fn>(fn: F, delay: number): Fn {
  let timeout: NodeJS.Timeout

  return (...args) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      clearTimeout(timeout)
      fn(...args)
    }, delay)
  }
}

export function throttle<F extends Fn>(fn: F, limit: number): Fn {
  let isWaiting = false

  return (...args) => {
    if (!isWaiting) {
      fn(...args)
      isWaiting = true

      setTimeout(() => {
        isWaiting = false
      }, limit)
    }
  }
}
