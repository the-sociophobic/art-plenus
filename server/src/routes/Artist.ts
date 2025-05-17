import { Request, Responce } from 'express'

import storage from '../utils/storage'
import { ArtistRequestType, ArtistResponceType } from '../types/requests.type'
import { ArtistType } from '../types/index.types'


const Artist = async (
  request: Request<{}, {}, ArtistRequestType>,
  response: Responce<ArtistResponceType>
) => {
  const { url } = request.params
  const artists = (await storage.read<ArtistType[]>('all.json')) || []
  const artist = artists.find(artist => artist.url === url)

  // if (!artist) {

  // } e

  response.send(artist)
}


export default Artist
