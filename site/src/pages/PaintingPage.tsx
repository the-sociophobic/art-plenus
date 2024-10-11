import { FC } from 'react'

import { PaintingType } from '../hooks/usePaintings/types'
import Img from '../components/common/Img'
import LinkWrapper from '../components/common/LinkWrapper'


export type PaintingPageProps = PaintingType


const PaintingPage: FC<PaintingPageProps> = ({
  title,
  images,
  painter,
  category,
  price,
  props
}) => {
  return (
    <div className='container'>
      <h2 className='h2 mb-5'>
        {title}
      </h2>

      <div className='d-flex flex-row flex-wrap justify-content-start align-items-stretch mb-5'>
        {images.map(image =>
          <Img
            key={image.img}
            src={image.img}
            className='PaintingPage__Img me-3'
          />
        )}
      </div>

      <div className='d-flex flex-column'>

        {painter &&
          <div className='d-flex flex-row'>
            <div className='me-3'>
              Художник
            </div>
            <div className=''>
              <LinkWrapper to={painter.url}>
                {painter.name}
              </LinkWrapper>
            </div>
          </div>
        }

        <div className='d-flex flex-row'>
          <div className='me-3'>
            Категория
          </div>
          <div className=''>
            {category}
          </div>
        </div>

        <div className='d-flex flex-row'>
          <div className='me-3'>
            Цена
          </div>
          <div className=''>
            {price.price} {price.currency}
          </div>
        </div>

        {Object.entries(props).map(([key, value]) =>
          <div className='d-flex flex-row'>
            <div className='me-3'>
              {key}
            </div>
            <div className=''>
              {value}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}


export default PaintingPage
