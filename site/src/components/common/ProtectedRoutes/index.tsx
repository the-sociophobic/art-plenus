import React, { useEffect, useMemo } from 'react'

import { RouterProvider, createHashRouter } from 'react-router-dom'

import useStore from '../../../hooks/useStore'
import Loader from '../Loader'
import routes, { RouteType } from './routes'
import Layout from '../Layout'
import Redirect from '../Redirect'
// import usePaintings from '../../../hooks/usePaintings'
// import { PaintingType } from '../../../hooks/usePaintings/types'
// import PaintingPage from '../../../pages/PaintingPage'
import useArtists from '../../../hooks/useArtists'
import { ArtistType } from '../../../hooks/useArtists/types'
import ArtistPage from '../../../pages/ArtistPage'


export type ProtectedRoutesProps = object

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = () => {
  const { user } = useStore()
  const artists = useArtists()

  useEffect(() => useStore.setState({ user }), [user])

  const router = useMemo(
    () => createHashRouter(
      mapRoutes([
        ...(user ?
          routes
          :
          routes
        ),
        ...(!artists ? [] : mapArtistsRoutes(artists))
      ])
    )
    , [artists, user]
  )

  if (!artists)
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

// const mapPaintingsRoutes = (paintings: PaintingType[]) =>
//   paintings.map(painting => ({
//     to: painting.url,
//     title: painting.title,
//     Comp: <PaintingPage {...painting} />
//   })) || []

const mapArtistsRoutes = (artists: ArtistType[]) =>
  artists.map(artist => ({
    to: artist.url,
    title: artist.title,
    Comp: <ArtistPage {...artist} />
  })) || []
