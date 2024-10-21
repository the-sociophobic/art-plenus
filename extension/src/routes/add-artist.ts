import axios from 'axios'

import { findByClassNames } from '../utils/find'


export const postArtistData = async () => {
  const data = collectArtistData()
  const res = (await axios.post('http://localhost:5015/add-artist', { artist: data })).data

  console.log(res)
}

const collectArtistData = () => {
  const data = {
    url: getURL(),
    title: getTitle(),
    image: getImageURL(),
    description: getDescription(),
    birthDate: getBirthDate(),
    deathDate: getDeathDate(),
  }

  console.log(data)

  return data
}

const getURL = () => {
  const url = window.location.href.replace('https://socrealizm.com.ua/gallery/artist/', '')

  return url
}

const getTitle = () => {
  const title = findByClassNames<HTMLParagraphElement>(['title'], ['p'])[0].textContent

  return title!
}

const getImageURL = () => {
  const block = findByClassNames<HTMLDivElement>(['photo-block', 'f_l'], ['div'])

  if (block[0]?.children?.[1])
    return (block[0].children[1] as HTMLImageElement).src

  return undefined
}

const getDescription = (): string[] => {
  const descriptions = findByClassNames<HTMLDivElement>(['description'], ['div'])
  let description: any

  descriptions.forEach(desc => {
    if (desc.children.length >= 2)
      description = desc
  })

  if (description) {
    // console.log(description)    
    return [...description.children]
      .map((paragraph: HTMLParagraphElement | HTMLHeadingElement) => paragraph.textContent || '')
  }

  return []
}

const getBirthDate = () => {
  const title = getTitle()

  return (title || '').match(/\d{4}/gm)?.[0]
}

const getDeathDate = () => {
  const description = getDescription()
  let date: string | undefined = undefined

  for (let i = description.length - 1; i > 0; i--) {
    const paragraph = description[i]

    if (paragraph.toLowerCase().includes('умер')) {
      date = paragraph.match(/\d{4}/gm)?.[0]
      break
    }
  }

  return date
}
