import { useLocation } from 'react-router-dom'

import routes from '../components/common/ProtectedRoutes/routes'


const useRoute = () => {
  const location = useLocation()

  return routes
    .find(route => route.to.replace('*', '') === location.pathname)
}


export default useRoute
