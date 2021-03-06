export interface IMetadata {
  id: number
  name: string
  symbol: string
  category: string
  description: string
  slug: string
  logo: string
  subreddit?: string
  notice?: string
  tags?: string[]
  'tag-names'?: string[]
  'tag-groups'?: any[]
  urls: Urls
  platform?: Platform | null
  date_added?: Date
  twitter_username?: string
  is_hidden?: number
}

interface Platform {
  id: number
  name: string
  symbol: string
  slug: string
  token_address: string
}

interface Urls {
  website?: string[]
  twitter?: string[]
  message_board?: string[]
  chat?: string[]
  explorer?: string[]
  reddit?: string[]
  technical_doc?: string[]
  source_code?: string[]
  announcement?: any[]
}

interface Status {
  timestamp: Date
  error_code: number
  error_message: null
  elapsed: number
  credit_count: number
  notice: null
}

export interface IMetadataResponse {
  status: Status
  data: { [key: string]: IMetadata }
}
