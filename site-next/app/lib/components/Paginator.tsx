import Link from 'next/link'
import { FC } from 'react'


export type PaginatorProps = {
  page: number
  numberOfPages: number
  url: string
}


const SURROUNDING_PAGES = 3


const Paginator: FC<PaginatorProps> = ({
  page,
  numberOfPages,
  url
}) => {
  const buttons = Array(numberOfPages).fill(0).map((_button, buttonIndex) => {
    const pageNumber = buttonIndex + 1

    return (
      <Link
        key={pageNumber}
        href={`${url}${pageNumber}`}
        className='Paginator__Item'
      >
        {pageNumber}
      </Link>
    )
  }
  )

  return (
    <div className='Paginator'>
      {page - SURROUNDING_PAGES > 1 &&
        <>
          {buttons[0]}
          {page - SURROUNDING_PAGES - 1 > 1 &&
            <div className='Paginator__Item'>
              ...
            </div>
          }
        </>
      }


      {buttons.slice(Math.max(page - SURROUNDING_PAGES - 1, 0), page - 1)}
      <div className='Paginator__Item'>
        {page}
      </div>
      {buttons.slice(page, page + SURROUNDING_PAGES)}


      {page + SURROUNDING_PAGES < numberOfPages &&
        <>
          {page + SURROUNDING_PAGES + 1 < numberOfPages &&
            <div className='Paginator__Item'>
              ...
            </div>
          }
          {buttons[numberOfPages - 1]}
        </>
      }
    </div>
  )
}


export default Paginator
