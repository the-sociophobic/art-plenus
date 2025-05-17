'use client'

import { FC, useEffect } from 'react'

import useFoundArtists from '../lib/hooks/useFoundArtists'
import { FoundArtistsRequestType } from '../lib/types/requests.type'
import Loader from '../lib/components/Loader'
import ArtistItem from './ArtistItem'
import Paginator from '../lib/components/Paginator'
import useStore from '../lib/hooks/useStore'


export type ArtistsProps = FoundArtistsRequestType


const Artists: FC<ArtistsProps> = (props) => {
  const { setArtistsSearch } = useStore()
  const { setArtistsSearchPage } = useStore()

  useEffect(() => {
    setArtistsSearch(props.query)
    setArtistsSearchPage(props.page)
  }, [props])

  // const { data: artistsResponce } = useFoundArtists({
  //   query: artistsSearch,
  //   page: props.page
  // })

  // const { data: artistsResponce } = useFoundArtists(props)

  const { artistsSearch } = useStore()
  const { artistsSearchPage } = useStore()
  const { data: artistsResponce, isLoading } = useFoundArtists({
    query: artistsSearch,
    page: artistsSearchPage
  })

  if (isLoading)
    return <Loader />

  const { artists, numberOfPages } = artistsResponce || { artists: [], numberOfPages: 0 }
  const { query, page } = props
  const mappedArtists = artists.map((artist, artistIndex) =>
    <ArtistItem
      key={artist.url + artistIndex}
      artist={artist}
      small
      higlightText={artistsSearch}
    />
  )

  return (
    <div className='container'>
      <div className='row mb-3'>
        <div className='col'>
          {mappedArtists.slice(0, 25)}
        </div>
        <div className='col'>
          {mappedArtists.slice(25)}
        </div>
      </div>
      {/* <div className='d-flex flex-column mb-4'>
        { }
      </div> */}

      <div className='row'>
        <Paginator
          page={page}
          numberOfPages={numberOfPages}
          url={`/artists/?query=${query}&page=`}
        />
      </div>
    </div>
  )
}


export default Artists
