import Redirect from '../Redirect'

import Main from '../../../pages/Main'
import Artists from '../../../pages/Artists'


export type RouteType = {
  to: string
  title: string
  Comp: any
  exact?: boolean
}


const routes: RouteType[] = [
  {
    to: '/',
    exact: true,
    title: 'Главная',
    Comp: <Main />,
  },
  {
    to: '/artists',
    title: 'База художников',
    Comp: <Artists />,
  },
  {
    to: '/*',
    title: 'redirect',
    Comp: <Redirect to='/' />,
  },
]


export default routes
