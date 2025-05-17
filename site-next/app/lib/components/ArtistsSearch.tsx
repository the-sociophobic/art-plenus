import { FC } from 'react'

import Link from 'next/link'
import { redirect } from 'next/navigation'

import useStore from '../hooks/useStore'
import Input from './Input'
import useFoundArtists from '../hooks/useFoundArtists'
import ArtistItem from '@/app/artists/ArtistItem'
import countableArtists from '../utils/countable/artists'
import countableFound from '../utils/countable/found'


const NUMBER_OF_ARTISTS_IN_DROPDOWN = 7


export type ArtistsSearchProps = {
  hideDropdown?: boolean
  affectURL?: boolean
}


const ArtistsSearch: FC<ArtistsSearchProps> = ({
  hideDropdown,
  affectURL
}) => {
  const { artistsSearch } = useStore()
  const { setArtistsSearch } = useStore()
  const { showFoundArtistDropdown } = useStore()
  const { setShowFoundArtistDropdown } = useStore()

  const { data } = useFoundArtists({
    query: artistsSearch,
    page: 1
  })

  const artists = data?.artists
  const numberOfArtists = data?.numberOfArtists

  const mappedArtists = !artists ?
    <div className='ArtistItem ArtistItem--disabled'>
      Ищем...
    </div>
    :
    <>
      {artists.slice(0, NUMBER_OF_ARTISTS_IN_DROPDOWN)
        .map((artist, artistIndex) =>
          <ArtistItem
            key={artistIndex}
            artist={artist}
            higlightText={artistsSearch}
          />
        )
      }
      {artists.length > NUMBER_OF_ARTISTS_IN_DROPDOWN &&
        <Link href={`/artists/?query=${artistsSearch}&page=1`}>
          <div className='ArtistItem'>
            Показать всех ({numberOfArtists})
          </div>
        </Link>
      }
    </>

  const onChange = (value: string) => {
    if (affectURL) {
      redirect(`/artists/?query=${value}&page=1`)
      // window.location.search = `?query=${artistsSearch}&page=1`
    } else {
      setArtistsSearch(value)
    }
  }

  return (
    <div className='ArtistsSearch'>
      <div className='mb-1'>
        {typeof numberOfArtists === 'number' && artistsSearch.length > 0 ?
          `${countableFound(numberOfArtists)} ${numberOfArtists} ${countableArtists(numberOfArtists)}`
          :
          `Поиск художников`
        }
      </div>
      <Input
        value={artistsSearch}
        onChange={onChange}
        onFocus={() => setShowFoundArtistDropdown(true)}
        // onBlur={() => setTimeout(() => setShowFoundArtistDropdown(false), 500)}
        placeholder={'Найти...'}
      />
      {!hideDropdown && showFoundArtistDropdown && artistsSearch.length > 0 && (
        <div className='ArtistsSearch__Dropdown'>
          {numberOfArtists === 0 ?
            <div className='ArtistItem ArtistItem--disabled'>
              Ничего не найдено
            </div>
            :
            mappedArtists
          }
        </div>
      )}
    </div>
  )
}


export default ArtistsSearch
