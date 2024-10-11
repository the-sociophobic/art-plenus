import { FC } from 'react'

import usePaintings from '../hooks/usePaintings'
import PaintingCard from '../components/PaintingCard'


const Main: FC = () => {
  const paintings = usePaintings()

  return (
    <div className='container'>
      <h2 className='h2'>
        Картины ({paintings.length})
      </h2>
      
      <div className='d-flex flex-row flex-wrap justify-content-between align-items-stretch'>
        {paintings.map((painting, paintingIndex) =>
          <PaintingCard
            key={paintingIndex}
            {...painting}
          />
        )}
      </div>
    </div>
  )
}


export default Main
