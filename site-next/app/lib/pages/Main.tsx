'use client'

import { FC, useEffect } from 'react'

import ArtistsSearch from '@/app/lib/components/ArtistsSearch'
import RoundBorder from '@/app/lib/components/RoundBorder'
import useStore from '../hooks/useStore'
import Paintings from '../components/Paintings'
import Button from '../components/Button'
import Link from 'next/link'


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
        <div className='py-5 col-8 col-md-6 col-lg-4 mx-auto'>
          <i>
            Artis Plenus – аукционный дом, старинная живопись, подбор картин для интерьера. Самые недорогие цены на картины 18 и 19 века
          </i>
        </div>
      </div>
      <div className='row'>
        <div className='py-5 col-8 col-md-6 col-lg-4 mx-auto mb-5'>
          <ArtistsSearch />
        </div>
      </div>
      <div className='row'>
        <div className='py-5'>
          <Paintings />
        </div>
      </div>
      <div className='row'>
        <div className='py-5 col-8 col-md-6 col-lg-4 mx-auto d-flex flex-column align-items-stretch'>
          <Link
            href={`https://ru.bidspirit.com/ui/houses/artisplenus,false?lang=ru`}
            target='_blank'
          >
            <Button black className='w-100 mb-3'>
              Прошедшие аукционы
            </Button>
          </Link>
          <Link
            href={`https://ru.bidspirit.com/ui/houses/artisplenus,false?lang=ru`}
            target='_blank'
          >
            <Button black className='w-100 mb-3'>
              Готовящиеся аукионы
            </Button>
          </Link>
          <Link
            href={`/`}
            target='_blank'
          >
            <Button black className='w-100 mb-3'>
              Предложить работу на аукцион
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Main
