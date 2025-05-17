'use client'

import { FC } from 'react'

import useStore from '../../hooks/useStore'
import RoundBorder from '../RoundBorder'
import ArtistsSearch from '../ArtistsSearch'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'


const HeaderBody: FC = () => {
  const { mobileHeaderOpened } = useStore()
  const { setMobileHeaderOpened } = useStore()

  const closeMobileHeader = () => {
    setMobileHeaderOpened(false)
  }

  const searchParams = useSearchParams()
  const showSearchInHeader = new URLSearchParams(searchParams as URLSearchParams).toString().includes('query')

  return (
    <div className='container position-relative'>
      <RoundBorder>
        <div className='row py-3'>
          <div className='col-3'>
            <Link
              href={`/`}
              className='text-black'
            >
              Artis Plenus
            </Link>
          </div>
          <div className='col-4'>
            {showSearchInHeader &&
              <ArtistsSearch
                hideDropdown
                affectURL
              />
            }
          </div>
          <div className='col-3 pb-1'>

          </div>
          {/* {mobileHeaderOpened &&
            <div className={`Header__mobile no-padding`}>

            </div>
          } */}

        </div>
      </RoundBorder>
    </div>
  )
}


export default HeaderBody
