import Redirect from '../Redirect'

import Main from '../../../pages/Main'


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
    title: 'main',
    Comp: <Main />,
  },
  {
    to: '/*',
    title: 'redirect',
    Comp: <Redirect to='/' />,
  },
]


export default routes
