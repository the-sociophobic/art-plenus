import { useQuery } from '@tanstack/react-query'

import { post } from '../utils/requests'
import {
  ArtistRequestType,
  ArtistResponceType
} from '../types/requests.type'


const useArtist = (props: ArtistRequestType) => useQuery({
  queryKey: ['artist', props.url],
  queryFn: async () => getArtist(props)
})

const getArtist = async (props: ArtistRequestType) =>
  post<ArtistResponceType>(`/artist`, props)


export default useArtist
