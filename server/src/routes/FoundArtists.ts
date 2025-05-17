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
    .map(artist => ({
      ...artist,
      indexOfQuery: artist.title.toLowerCase().indexOf(query.toLowerCase())
    }))
    .filter(artist => artist.indexOfQuery !== -1)
    .sort((a, b) => {
      if (a.indexOfQuery === 0) {
        if (b.indexOfQuery === 0) {
          return a.title.localeCompare(b.title)
        } else {
          return -1
        }
      } else {
        if (b.indexOfQuery === 0) {
          return 1
        } else {
          return a.title.localeCompare(b.title)
        }
      }
    })
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
