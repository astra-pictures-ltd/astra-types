/** Brevo mail templates */
export enum OptionsBrevo {
  BREVO_NEW_USER = 'brevo_new_user',
  BREVO_ADMIN_INVITE = 'brevo_admin_invite',
  BREVO_VERIFY_ACCOUNT = 'brevo_verify_account',
  BREVO_TICKET_PURCHASE = 'brevo_ticket_purchase',
  BREVO_PREMIERE_REMINDER = 'brevo_premiere_reminder',
  BREVO_SUBSCRIPTION_RENEW = 'brevo_subscription_renew',
  BREVO_SUBSCRIPTION_REMINDER = 'brevo_subscription_reminder',
  BREVO_SUBSCRIPTION_TERMINATED = 'brevo_subscription_TERMINATED',
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

export const OptionsMerged = {
  ...OptionsBrevo,
  ...OptionsOther,
  ...OptionsFeaturedContent,
}

export type Options = OptionsFeaturedContent | OptionsBrevo | OptionsOther

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
