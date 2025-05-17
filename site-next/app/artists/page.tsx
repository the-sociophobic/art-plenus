import Artists from './Artists'
import { PageProps } from '../lib/types/next.types'
import { FoundArtistsRequestType } from '../lib/types/requests.type'


export type ArtistsPageProps = PageProps & {
  searchParams: Promise<FoundArtistsRequestType>
}

export async function generateMetadata(props: PageProps) {
  return {}
}


export default async function Page(props: ArtistsPageProps) {
  const searchParams = (await (await props).searchParams)
  // const URL = await getUrl(props)

  return (
    <Artists
      query={searchParams.query}
      page={parseInt(searchParams.page as any as string)}
    />
  )
}


const getUrl = async ({ params }: PageProps) => {
  const { pageId } = await params
  const URL = '/faq/' + pageId

  return URL
}
