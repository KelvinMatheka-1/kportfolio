/* eslint-disable camelcase */
export interface Article {
  id: string | number
  type_of?: string
  title: string
  description: string
  readable_publish_date: string
  slug?: string
  url: string
  tag_list: string[]
  social_image?: string
  reading_time_minutes?: number
  public_reactions_count?: number
  user?: {
    name: string
    username: string
    profile_image_90?: string
  }
}

