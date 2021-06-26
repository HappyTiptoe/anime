export type Fn = (...params: any[]) => any

// prettier-ignore
export type AnimeTimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'initial' | 'inherit'

export type AnimeConfig = {
  duration?: number
  easing?: AnimeTimingFunction
  delay?: number
  offset?: number
}

export type AnimeOptions = {
  duration: number
  easing: AnimeTimingFunction
  delay: number
  offset: number
}

export type AnimeExtendedElement = {
  $el: Element
  triggerPosition: number
}
