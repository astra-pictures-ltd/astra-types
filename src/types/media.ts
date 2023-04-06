export enum UploadTypes {
  LINK = 'link',
  CLOUDINARY = 'cloudinary',
}

export enum MediaSize {
  ORIGINAL = 'auto',
  SMALL = 0.25,
  MEDIUM = 0.4,
  LARGE = 0.5,
  EXTRALARGE = 0.8,
}

export type CloudinarySignedData = {
  timestamp: number
  public_id: string
  signature: string //Sha1
}

export type UploadedItem = {
  url: string
  source: UploadSource
}

export type UploadSource = {
  id?: string
  type: UploadTypes
}

export interface Image {
  original: string
  extraLarge?: string
  large?: string
  medium?: string
  small?: string
  source: UploadSource
}

export type LegacyUploadItem = {
  url?: string
  source: string
  sourceId: string
}
