import { FC } from 'react'

import { ArtistType } from '../lib/types/index.types'
import Link from 'next/link'


const ArtistItem: FC<ArtistType> = ({
  url,
  title,
  image,
  birthDate,
}) => {
  return (
    <Link href={`/artists/${url}`}>
      <div className=''>
        {title}
      </div>
    </Link>
  )
}


export default ArtistItem
