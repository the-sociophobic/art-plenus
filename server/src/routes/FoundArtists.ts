import { Request, Responce } from 'express'

import storage from '../utils/storage'
import { FoundArtistsRequestType, FoundArtistsResponceType } from '../types/requests.type'
import { ArtistType } from '../types/index.types'


const ARTISTS_PER_PAGE = 50


const FoundArtists = async (
  request: Request<{}, {}, FoundArtistsRequestType>,
  response: Responce<FoundArtistsResponceType>
) => {
  const { body: { query, page } } = request
  const artists = (await storage.read<ArtistType[]>('all.json')) || []
  const _startFrom = (parseInt(page) - 1) * ARTISTS_PER_PAGE
  const startFrom = typeof _startFrom === 'number' && _startFrom < artists.length ? _startFrom : 0
  
  const filteredArtists = artists
    .filter(artist =>
      artist.title.toLowerCase()
        .includes(query.toLowerCase()))

  const artistsOnPage = filteredArtists
    .slice(startFrom, startFrom + ARTISTS_PER_PAGE)

  const res: FoundArtistsResponceType = {
    artists: artistsOnPage,
    numberOfPages: Math.ceil(filteredArtists.length / ARTISTS_PER_PAGE),
    numberOfArtists: filteredArtists.length
  }

  response.send(res)
}


export default FoundArtists
