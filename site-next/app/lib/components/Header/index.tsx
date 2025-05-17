import { Suspense } from 'react'

import HeaderBody from './HeaderBody'


const Header = () => {
  return (
    <>
      <div className={`Header Header--relative mb-5`}>
        <Suspense>
          <HeaderBody />
        </Suspense>
      </div>
      <div className={`Header Header--fixed`}>
        <Suspense>
          <HeaderBody />
        </Suspense>
      </div>
    </>
  )
}


export default Header
