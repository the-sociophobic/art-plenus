'use client'

import { FC, useEffect } from 'react'

import ArtistsSearch from '@/app/lib/components/ArtistsSearch'
import RoundBorder from '@/app/lib/components/RoundBorder'
import useStore from '../hooks/useStore'


const Main: FC = () => {
  const { setArtistsSearch } = useStore()
  const { setShowFoundArtistDropdown } = useStore()

  useEffect(() => {
    setArtistsSearch('')
    setShowFoundArtistDropdown(false)
  }, [])

  return (
    <div className='container'>
      <div className='row mb-5'>
        <RoundBorder hide>
          <div className='py-5 col-8 col-md-6 col-lg-4 mx-auto'>
            <i>
              Artis Plenus – аукционный дом, старинная живопись, подбор картин для интерьера. Самые недорогие цены на картины 18 и 19 века
            </i>
          </div>
        </RoundBorder>
      </div>
      <div className='row mt-5'>
        <RoundBorder hide>
          <div className='py-5 col-8 col-md-6 col-lg-4 mx-auto'>
            <ArtistsSearch />
          </div>
        </RoundBorder>
      </div>
    </div>
  )
}


export default Main
