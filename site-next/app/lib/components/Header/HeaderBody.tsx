'use client'

import { FC } from 'react'

import useStore from '../../hooks/useStore'


const HeaderBody: FC = () => {
  const { mobileHeaderOpened } = useStore()
  const { setMobileHeaderOpened } = useStore()

  const closeMobileHeader = () => {
    setMobileHeaderOpened(false)
  }

  return (
    <div className='container-2'>
      <div className='Header__top'>

      </div>

      {mobileHeaderOpened &&
        <div className={`Header__mobile no-padding`}>

        </div>
      }

    </div>
  )
}


export default HeaderBody
