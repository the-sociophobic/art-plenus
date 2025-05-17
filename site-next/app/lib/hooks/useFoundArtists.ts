import { useQuery } from '@tanstack/react-query'

import { post } from '../utils/requests'
import {
  FoundArtistsRequestType,
  FoundArtistsResponceType
} from '../types/requests.type'


const useFoundArtists = (props: FoundArtistsRequestType) => useQuery({
  queryKey: ['found-artists', props.query, props.page],
  queryFn: async () => getFoundArtists(props)
})

const getFoundArtists = async (props: FoundArtistsRequestType) =>
  post<FoundArtistsResponceType>(
    '/found-artists',
    props
  )


export default useFoundArtists
