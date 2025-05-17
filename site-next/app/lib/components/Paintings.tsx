import { FC } from 'react'

import { PaintingType } from '../types/index.types'
import Painting from './Painting'


const paintings: PaintingType[] = [
  {
    url: 'https://ru.bidspirit.com/ui/lotPage/artisplenus/source/catalog/auction/46238/lot/17766/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-XIX-%D0%B2?lang=ru',
    image: 'https://bidspirit-images.global.ssl.fastly.net/artisplenus/cloned-images/17766/002/a_ignore_q_80_w_1000_c_limit_002.jpg',
    title: 'Неизвестный художник. Французская школа XIX в. Пейзаж. холст, масло, в деревянной раме',
    price: '10000',
  },
  {
    url: 'https://ru.bidspirit.com/ui/lotPage/artisplenus/source/catalog/auction/46238/lot/17766/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-XIX-%D0%B2?lang=ru',
    image: 'https://bidspirit-images.global.ssl.fastly.net/artisplenus/cloned-images/17766/002/a_ignore_q_80_w_1000_c_limit_002.jpg',
    title: 'Неизвестный художник. Французская школа XIX в. Пейзаж. холст, масло, в деревянной раме',
    price: '10000',
  },
  {
    url: 'https://ru.bidspirit.com/ui/lotPage/artisplenus/source/catalog/auction/46238/lot/17766/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B0%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-XIX-%D0%B2?lang=ru',
    image: 'https://bidspirit-images.global.ssl.fastly.net/artisplenus/cloned-images/17766/002/a_ignore_q_80_w_1000_c_limit_002.jpg',
    title: 'Неизвестный художник. Французская школа XIX в. Пейзаж. холст, масло, в деревянной раме',
    price: '10000',
  },
]


const Paintings: FC = () => {
  return (
    <div className='row d-flex flex-row justify-content-between'>
      {paintings.map((painting, paintingIndex) =>
        <div
          key={paintingIndex}
          className='col-8 col-md-3 mb-4 mx-auto'
        >
          <Painting {...painting} />
        </div>
      )}
    </div>
  )
}


export default Paintings
