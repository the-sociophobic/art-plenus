import artists from './artists.json'
import { ArtistType } from './types'


const useArtists = () => {
  return (artists as ArtistType[])
    // .slice(0, 555)
    .map(artist => ({
      ...artist,
      url: artist.url.slice(0, 25)
    }))
}


export default useArtists
