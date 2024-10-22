import { FC } from 'react'

import { ArtistType } from '../hooks/useArtists/types'
import Img from '../components/common/Img'


export type ArtistPageProps = ArtistType


const ArtistPage: FC<ArtistPageProps> = ({
  // url,
  title,
  image,
  description,
  // birthDate,
  // deathDate
}) => {
  return (
    <div className='container'>
      <h2 className='h2 mb-5'>
        {title}
      </h2>

      <div className='d-flex flex-row flex-wrap justify-content-start align-items-stretch mb-5'>
        <Img
          src={image}
          className='ArtistPage__Img me-3'
        />
      </div>

      <div className='d-flex flex-column'>
        {description.map((paragraph, paragraphIndex) =>
          <p key={paragraphIndex}>
            {paragraph}
          </p>
        )}
      </div>
    </div>
  )
}


export default ArtistPage
