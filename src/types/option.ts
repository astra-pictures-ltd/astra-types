export enum Options {
  DISCOUNT = 'discount',
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
