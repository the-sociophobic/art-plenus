'use client'

import Link from 'next/link'

import { FC } from 'react'


export type FooterCSRProps = {}


const FooterCSR: FC<FooterCSRProps> = ({ }) => {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='  py-4 d-flex flex-row'>
          <div className='p-0 me-2 d-inline-block'>
            2025 Сайт –
          </div>
            <div className='p-0 d-inline-block'>
          <Link href='https://Леф.рф' className='text-black'>
              Леф.рф
          </Link>
            </div>
        </div>
      </div>
    </div>
  )
}


export { FooterCSR }
