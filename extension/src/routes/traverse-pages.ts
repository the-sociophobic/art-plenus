import { findByClassNames } from '../utils/find'
import { postArtistData } from './add-artist'


export const traversePages = () => {
  const isCatalogPage = window.location.href.includes('letter')

  if (isCatalogPage) {
    const artsts = findByClassNames(['items', 'items-brand-image'], ['ul'])[0].children
    const artistsLinks = [...artsts].map((li: Element) => (li.children[0] as HTMLAnchorElement).href)
    console.log('artistsLinks', artistsLinks)
    let currentArtist = localStorage.getItem('currentArtist')

    if (!currentArtist) {
      currentArtist = artistsLinks[0]
      localStorage.setItem('currentArtist', currentArtist)
    }

    if (currentArtist === 'next') {
      localStorage.removeItem('currentArtist')
      const nextPage = (findByClassNames(['next-page'], ['li'])[0].children[0] as HTMLAnchorElement).href
      window.location.href = nextPage
      return
    }

    const artistIndex = artistsLinks.indexOf(currentArtist)

    if (artistIndex === artistsLinks.length - 1) {
      localStorage.setItem('currentArtist', 'next')
    } else {
      let nextArtist = artistsLinks[artistIndex + 1]
      localStorage.setItem('currentArtist', nextArtist)
    }
    window.location.href = currentArtist

  } else {
    postArtistData()
    setTimeout(() => {
      history.back()
    }, 450)
  }
}
