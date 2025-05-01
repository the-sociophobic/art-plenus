import { findByClassNames } from '../utils/find'
import { postArtistsBatch } from './add-artist'

export const traversePages = async () => {
  const isCatalogPage = window.location.href.split('?')[0].endsWith('artist')

  if (isCatalogPage) {
    const artistsElements = findByClassNames(['items', 'items-brand-image'], ['ul'])[0].children
    const artistsData = [...artistsElements].map((li: Element) => {
      const anchor = li.querySelector('a') as HTMLAnchorElement
      const image = li.querySelector('img') as HTMLImageElement
      const title = [...(li.children?.[0]?.children || [])]
        .find(child => child.className === 'title')
        ?.textContent || ''
      const birthDate = title.match(/\d{4}/g)?.[0]
      const titleWithoutBirthDate = birthDate ? title.replace(birthDate, '') : title

      return {
        url: anchor?.href.replace('https://socrealizm.com.ua/gallery/artist/', ''),
        title: titleWithoutBirthDate,
        image: image?.src,
        description: [], // Можно парсить прямо из каталога, если добавишь описание
        birthDate,
        deathDate: null // В каталоге нет этой инфы
      }
    })

    await postArtistsBatch(artistsData)

    // Таймаут и переход на следующую страницу
    const nextPageElement = findByClassNames(['next-page'], ['li'])[0]?.children?.[0] as HTMLAnchorElement

    if (nextPageElement && nextPageElement.href) {
      setTimeout(() => {
        window.location.href = nextPageElement.href
      }, 4000) // Подольше, чтобы сервер не упал
    } else {
      console.log('Последняя страница.')
    }
  }
}