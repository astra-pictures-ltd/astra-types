import { ObjectID } from '@tsed/mongoose'
import { UploadedItem } from './media'

export interface IDTitle {
  id: string
  title: string
}

export interface ContentSeasonsIntercepted extends IDTitle {
  episodes: IDTitle[]
}

export enum PlaybackQuality {
  LOW = 'low',
  HIGH = 'high',
  STANDARD = 'standard',
}

export enum ContentCrew {
  CAST = 'cast',
  WRITER = 'writer',
  DIRECTOR = 'director',
  PRODUCER = 'producer',
}

export enum ContentType {
  MOVIE = 'movie',
  TVSHOW = 'tv_show',
  EPISODE = 'episode',
}

export enum ContentTypeAdmin {
  EPISODE = 'episode',
}

export enum ContentStatus {
  DRAFT = 'draft',
  ARCHIVE = 'archive',
  PUBLISHED = 'published',
  COMING_SOON = 'coming_soon',
}

export enum ContentStatusAdmin {
  ORPHANED = 'orphaned'
}

export type ContentDuration = {
  hour?: number
  minute?: number
  second?: number
}

export enum ContentRatings {
  GENERAL_AUDIENCE = 'G',
  TWELVE_PLUS = '12+',
  FIFTEEN_PLUS = '15+',
  EIGHTEEN_PLUS = '18+',
  PARENTAL_GUIDANCE = 'PG',
  RESTRICTED = 'R',
}

export type ContentPlaybackURL = {
  [PlaybackQuality.LOW]?: string
  [PlaybackQuality.HIGH]?: string
  [PlaybackQuality.STANDARD]?: string
}

export type ContentTicket = {
  id: string
  date: Date
  amount: string
  originalAmount?: string
  currency: string
  hasPurchased?: boolean
  hasElapsed?: boolean
  purchaseRef?: string
  isVerified?: boolean
}
export interface BaseContent {
  id: string
  title: string
  subtitle?: string
  tags: string[]
  excerpt: string
  niceTitle?: string
  description: string
  trailer_url?: string
  access?: ContentAccess
  duration: ContentDuration | string
}

export interface FeaturedContent extends ContentList {
  thumbnail_horizontal?: UploadedItem
  thumbnail_vertical?: UploadedItem
  banner?: UploadedItem
  numberOfSeasons?: string
  year?: string | number
  rating?: string
  duration?: string
  isInWatchList?: boolean
}

export interface ContentList extends IDTitle {
  tags: string[]
  excerpt?: string
  access: ContentAccess
  thumbnail?: UploadedItem
}
export interface SingleContent extends BaseContent {
  year: string
  type?: ContentType
  rating: string
  banner: UploadedItem
  formattedDuration: string
  thumbnail_vertical?: UploadedItem
  thumbnail_horizontal?: UploadedItem
  isPlayable?: boolean
  isInWatchList?: boolean
  isInFavoriteList?: boolean
  premieres?: ContentTicket[]
  seasons?: ContentSeasonsIntercepted[]
  seasonID: string
}

export interface MinimalContent extends IDTitle {
  excerpt: string
}

export type PremiereItem = {
  id?: string
  date: string
  amount: number
  contentId?: string
  hasPurchased?: boolean
  hasElapsed?: boolean
  purchaseRef?: string
  _id?: string | ObjectID
  originalAmount?: number
}

export type Genre = {
  id?: string
  title: string
}

export type StreamData = {
  url: string
  title: string
  subtitle?: string
  banner: UploadedItem
}

export enum ContentAccess {
  FREE = 'free',
  TICKET_SALES = 'ticket-sales',
  SUBSCRIBERS = 'subscribers',
}

export interface ContentGroupFormatted {
  group: IDTitle
  items: ContentList[]
}

export type ContentSearchParam = {
  query?: string
  category?: string
}

export interface OrderedItem {
  order: number
  isArchived?: boolean
}

export type ContentEpisode = OrderedItem & IDTitle
export interface ContentSeries extends ContentEpisode {
  episodes?: ContentEpisode[]
}

export interface ContentSeriesResolved extends ContentSeries {
  contentId: string
  contentTitle: string
}