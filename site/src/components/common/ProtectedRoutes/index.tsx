import React, { useEffect, useMemo } from 'react'

import { RouterProvider, createHashRouter } from 'react-router-dom'

import useStore from '../../../hooks/useStore'
import Loader from '../Loader'
import routes, { RouteType } from './routes'
import Layout from '../Layout'
import Redirect from '../Redirect'
import usePaintings from '../../../hooks/usePaintings'
import { PaintingType } from '../../../hooks/usePaintings/types'
import PaintingPage from '../../../pages/PaintingPage'


export type ProtectedRoutesProps = object

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = () => {
  const { user } = useStore()
  const paintings = usePaintings()

  useEffect(() => useStore.setState({ user }), [user])

  const router = useMemo(
    () => createHashRouter(
      mapRoutes([
        ...(user ?
          routes
          :
          routes
        ),
        ...(!paintings ? [] : mapPaintingsRoutes(paintings))
      ])
    )
    , [paintings, user]
  )

  if (!paintings)
    return <Loader />

  return <RouterProvider router={router} />
}


export default ProtectedRoutes


const mapRoutes = (
  routes: RouteType[],
) =>
  routes.map(route => ({
    key: route.to,
    path: route.to,
    element: (
      <Layout title={route.title} >
        {route.Comp}
      </Layout>
    ),
    errorElement: <Redirect to='/' />
  }))

const mapPaintingsRoutes = (paintings: PaintingType[]) =>
  paintings.map(painting => ({
    to: painting.url,
    title: painting.title,
    Comp: <PaintingPage {...painting} />
  })) || []
