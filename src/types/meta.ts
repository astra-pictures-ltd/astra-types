export type PageMetadata = {
  total?: number
  perPage?: number
  currentPage?: number
  hasNextPage?: boolean
}

export type Paginated<Data> = {
  data: Data[]
  meta: PageMetadata
}
