import { UserSubscription } from "./billing"
import { ContentList, FeaturedContent, Genre } from "./content"

export type JWTData = {
  value: string
  expiry: Date
}

export type AuthVerify = {
  code: string
  hash: string
  email: string
  message: string
}

export type AuthUser = {
  id: string
  email: string
  phone?: string
  location?: string
  username?: string
  lastName?: string
  last_name?: string
  firstName?: string
  avatar?: string
  inviteLink?: string
  first_name?: string
}

export type AuthFeaturedContents = Partial<{
  top: (ContentList | FeaturedContent) []
  main: (ContentList | FeaturedContent) []
  cinema: (ContentList | FeaturedContent) []
  trending: (ContentList | FeaturedContent) []
}>

export type AuthData = {
  genre: Genre[]
  user: AuthUser
  token?: JWTData
  contents: AuthFeaturedContents
  subscription: UserSubscription
}
