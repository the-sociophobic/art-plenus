import FoundArtists from '../routes/FoundArtists'
import Artist from '../routes/Artist'

import { RouteType } from '../types/routes.type'


const routes: RouteType[] = [
  {
    type: 'POST',
    path: '/found-artists',
    fn: FoundArtists
  },
  {
    type: 'POST',
    path: '/artist',
    fn: Artist
  },
]


export default routes
