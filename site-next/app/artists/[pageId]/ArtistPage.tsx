import { FC } from 'react'

import { ArtistType } from '@/app/lib/types/index.types'


const ArtistPage: FC<ArtistType> = ({
  url,
  title,
  description,
  image,
  birthDate,
  deathDate
}) => {
  return (
    <div className=''>
      <div className='h3'>
        {title}
      </div>
      <div className=''>
        {birthDate}{deathDate && ` – ${deathDate}`}
      </div>
      <div className=''>
        {description || 'Описание выгружается...'}
      </div>
    </div>
  )
}


export default ArtistPage
