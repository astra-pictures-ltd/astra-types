export enum Options {
  DISCOUNT = 'discount',
  FEATURED_TOP = 'featured_top',
  FEATURED_MAIN = 'featured_main',
  FEATURED_CINEMA = 'featured_cinema',
  FEATURED_TRENDING = 'featured_trending',
}

export type OptionDiscount = {
  code: number
}

export interface OptionData {
  [Options.DISCOUNT]?: OptionDiscount[]
}

export type OptionType = {
  name: Options
  value: any
}
