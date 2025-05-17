import { PageProps } from '@/app/lib/types/next.types'


const Page = async ({ params }: PageProps) => {
  const { pageId } = await params

  return (
    <div className='container'>
      /{pageId}
    </div>
  )
}


export default Page
