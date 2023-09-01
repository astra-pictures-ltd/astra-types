/** Brevo mail templates */
export enum OptionsBrevo {
  BREVO_NEW_USER = 'brevo_new_user',
  BREVO_ADMIN_INVITE = 'brevo_admin_invite',
  BREVO_VERIFY_ACCOUNT = 'brevo_verify_account',
  BREVO_TICKET_PURCHASE = 'brevo_ticket_purchase',
  BREVO_PREMEIRE_REMINDER = 'brevo_premiere_reminder',
  BREVO_SUBSCRIPTION_RENEW = 'brevo_subscription_renew',
  BREVO_SUBSCRIPTION_EXPIRED = 'brevo_subscription_expired',
  BREVO_SUBSCRIPTION_REMIDER = 'brevo_subscription_reminder',
}
/** Featured contents */
export enum OptionsFeaturedContent {
  FEATURED_TOP = 'featured_top',
  FEATURED_MAIN = 'featured_main',
  FEATURED_CINEMA = 'featured_cinema',
  FEATURED_TRENDING = 'featured_trending',
}

export enum OptionsOther {
  DISCOUNT = 'discount',
}

export type Options = OptionsFeaturedContent & OptionsBrevo & OptionsOther

export type OptionDiscount = {
  code: number
}

export interface OptionData {
  [OptionsOther.DISCOUNT]?: OptionDiscount[]
}

export type OptionType<T = unknown> = {
  name: Options
  value: T
}
