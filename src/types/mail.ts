import { OptionsBrevo } from './option'

export type MailOption<T = unknown> = {
  key: string
  name: string
  value?: number
  variables: MailVariable<T>
}

export type MailVariable<T = unknown> = {
  data: T
  description: string
}

export type MailTemplateVarsType = {
  [key in OptionsBrevo]: MailVariable
}
