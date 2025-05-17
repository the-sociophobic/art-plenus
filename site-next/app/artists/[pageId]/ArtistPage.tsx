'use client'

import { FC } from 'react'

import Loader from '@/app/lib/components/Loader'
import useArtist from '@/app/lib/hooks/useArtist'

import { ArtistRequestType } from '@/app/lib/types/requests.type'


const ArtistPage: FC<ArtistRequestType> = ({
  url,
}) => {
  const { data: artist } = useArtist({ url })
  console.log(artist)

  return !artist ?
    <Loader />
    :
    <div className='container'>
      <div className='mb-4'>
        {artist.title}
      </div>
      <div className=' mb-4'>
        {artist.birthDate}{artist.deathDate && ` – ${artist.deathDate}`}
      </div>
      <div className=' mb-4'>
        {artist.description.length === 0 ?
          'Описание выгружается...'
          :
          artist.description.map((line, lineIndex) =>
            <div
              key={lineIndex}
              className=''
            >
              {line}
            </div>
          )
        }
      </div>
    </div>
}


export default ArtistPage
