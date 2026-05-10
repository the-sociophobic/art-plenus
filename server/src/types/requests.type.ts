import { ArtistType } from "./index.types"

export type ResponseErrorType = {
  error: string
}


export type FoundArtistsRequestType = {
  query: string,
  page: number
}

export type FoundArtistsResponceType = {
  artists: ArtistType[]
  numberOfPages: number
  numberOfArtists: number
}


export type ArtistRequestType = {
  url: string,
}

export type ArtistResponceType = ArtistType

export type JoinScrapedRequestType = {}
export type JoinScrapedResponceType = boolean

export type CleanScrapedRequestType = JoinScrapedRequestType
export type CleanScrapedResponceType = JoinScrapedResponceType
