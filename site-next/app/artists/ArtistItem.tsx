import { FC } from 'react'

import { ArtistType } from '../lib/types/index.types'
import Link from 'next/link'


export type ArtistItemProps = {
  artist: ArtistType
  small?: boolean
  higlightText?: string
}


const ArtistItem: FC<ArtistItemProps> = ({
  artist,
  small,
  higlightText
}) => {
  const {
    url,
    title,
    image,
    birthDate,
  } = artist
  let _title = <>{title}</>

  if (higlightText && higlightText.length > 0) {
    const firstPartLength = title.toLowerCase().split(higlightText.toLowerCase())[0].length
    const firstPart = title.slice(0, firstPartLength)
    const higlightedPart = title.slice(firstPartLength, firstPartLength + higlightText.length)
    const secondPart = title.slice(firstPartLength + higlightText.length)

    _title = (
      <div className='d-flex flex-row'>
        <span>{firstPart}</span>
        <span className='text-highlight'>{higlightedPart}</span>
        <span>{secondPart}</span>
      </div>
    )
  }

  return (
    <Link
      // className='w-100 d-block'
      href={`/artists/${url}`}
    >
      <div className={`ArtistItem ${small && 'ArtistItem--small'}`}>
        {_title}
      </div>
    </Link>
  )
}


export default ArtistItem
