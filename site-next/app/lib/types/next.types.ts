export type PageProps = {
  params: Promise<{ pageId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
