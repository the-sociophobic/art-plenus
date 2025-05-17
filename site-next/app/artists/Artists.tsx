'use client'

import { FC } from 'react'

import useFoundArtists from '../lib/hooks/useFoundArtists'
import { FoundArtistsRequestType } from '../lib/types/requests.type'
import Loader from '../lib/components/Loader'
import ArtistItem from './ArtistItem'
import Paginator from '../lib/components/Paginator'


export type ArtistsProps = FoundArtistsRequestType


const Artists: FC<ArtistsProps> = (props) => {
  const { data: artistsResponce } = useFoundArtists(props)

  if (!artistsResponce)
    return <Loader />

  const { artists, numberOfPages } = artistsResponce

  if (!artists || !numberOfPages)
    return <Loader />

  const { query, page } = props

  return (
    <div className='container'>
      <div className='h3'>
        Художники
      </div>

      <div className='d-flex flex-column'>
        {artists.map((artist, artistIndex) =>
          <ArtistItem
            key={artist.url + artistIndex}
            {...artist}
          />
        )}
      </div>

      <Paginator
        page={page}
        numberOfPages={numberOfPages}
        url={`/artists/?query=${query}&page=`}
      />
    </div>
  )
}


export default Artists
