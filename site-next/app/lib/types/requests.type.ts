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
}
