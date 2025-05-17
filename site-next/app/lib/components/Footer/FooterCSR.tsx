'use client'

import Link from 'next/link'

import { FC } from 'react'


export type FooterCSRProps = {}


const FooterCSR: FC<FooterCSRProps> = ({ }) => {
  return (
    <div className='Footer'>
      <div className='container-2'>
        <div className='row py-5'>
          <div className='col-sm-10 col-md-5 pt-2 pb-4'>
            Подвал
          </div>
          <div className='col-sm-10 col-md-5'>
            2025 Сайт – <Link href='https://Леф.рф' className='text-black'>
              <div className='p-0 d-inline'>
                Леф.рф
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export { FooterCSR }
