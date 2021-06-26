export type Fn = (...params: any[]) => any

export type AnimeConfig = {
  duration?: number
  delay?: number
  offset?: number
}

export type AnimeOptions = {
  duration: number
  delay: number
  offset: number
}

export type AnimeExtendedElement = {
  $el: Element
  triggerPosition: number
}
