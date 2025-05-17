import { FC } from 'react'

import Link from 'next/link'

import { PaintingType } from '../types/index.types'
import { printPrice } from '../utils/price'
import Img from './Img'


export type PaintingProps = PaintingType


const Painting: FC<PaintingProps> = ({
  url,
  image,
  title,
  price
}) => {
  return (
    <Link
      href={url}
      target='_blank'
    >
      <div className='w-100'>
        <Img
          src={image}
          alt={title}
          className='w-100 mb-3'
        />
        <div className='p p--s mb-3'>
          {title}
        </div>
        <div className='p p--m text-end'>
          {printPrice(parseInt(price))}
        </div>
      </div>
    </Link>
  )
}


export default Painting
