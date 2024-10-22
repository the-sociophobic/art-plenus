import { FC } from 'react'

import { ArtistType } from '../hooks/useArtists/types'
import LinkWrapper from './common/LinkWrapper'
import Img from './common/Img'


export type ArtistCardProps = ArtistType


const ArtistCard: FC<ArtistCardProps> = ({
  url,
  title,
  image,
}) => {
  return (
    <LinkWrapper
      to={'/' + url}
      className='ArtistCard'
    >
      <Img
        className='ArtistCard__Img'
        src={image}
      />
      <div className='ArtistCard__name mt-3'>
        {title}
      </div>
    </LinkWrapper>
  )
}


export default ArtistCard
