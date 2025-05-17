import ArtistPage from './ArtistPage'

import { PageProps } from '@/app/lib/types/next.types'


const Page = async ({ params }: PageProps) => {
  const { pageId } = await params

  return <ArtistPage url={pageId} />
}


export default Page
