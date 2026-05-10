import { RouteType } from '../types/routes.type'

import FoundArtists from '../routes/FoundArtists'
import Artist from '../routes/Artist'
import JoinScraped from '../routes/JoinScraped'
import CleanScraped from '../routes/CleanScraped'


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
  {
    type: 'GET',
    path: '/join-scraped',
    fn: JoinScraped
  },
  {
    type: 'GET',
    path: '/clean-scraped',
    fn: CleanScraped
  },
]


export default routes
