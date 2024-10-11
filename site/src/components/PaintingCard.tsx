import { FC } from 'react'

import { PaintingType } from '../hooks/usePaintings/types'
import LinkWrapper from './common/LinkWrapper'
import Img from './common/Img'


export type PaintingCardProps = PaintingType


const PaintingCard: FC<PaintingCardProps> = ({
  url,
  images,
  title
}) => {
  return (
    <LinkWrapper
      to={'/' + url}
      className='PaintingCard'
    >
      <Img
        className='PaintingCard__Img'
        src={images[0].img}
      />
      <div className='PaintingCard__name mt-3'>
        {title}
      </div>
    </LinkWrapper>
  )
}


export default PaintingCard
