import { UploadedItem } from './media'

export enum AdminRoles {
  MODERATOR = 'moderator',
  ADMINISTRATOR = 'administrator',
}

export enum UserRoles {
  AGENT = 'agent',
  SUBSCRIBER = 'subscriber',
}

export enum UserListVariant {
  FAVORITE = 'favorite',
  WATCHLIST = 'watchlist',
}

export type UserList = {
  title: string
  contentId: string
  type?: UserListVariant
  thumbnail: UploadedItem
}

export interface User {
  id?: string
  name: string
}
