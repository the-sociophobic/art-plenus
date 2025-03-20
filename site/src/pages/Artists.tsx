import { FC } from 'react'

import useArtists from '../hooks/useArtists'
import ArtistCard from '../components/ArtistCard'


const Artists: FC = () => {
  const artists = useArtists()

  return (
    <div className='container'>
      <h2 className='h2'>
        Художники на А ({artists.length})
      </h2>
      
      <div className='d-flex flex-row flex-wrap justify-content-between align-items-stretch'>
        {artists.map((artist, artistIndex) =>
          <ArtistCard
            key={artistIndex}
            {...artist}
          />
        )}
      </div>
    </div>
  )
}


export default Artists
