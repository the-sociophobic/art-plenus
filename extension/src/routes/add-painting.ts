import axios from 'axios'

import { getNthChild } from '../utils/coordinates'
import { findByClassNames, findByTagNames } from '../utils/find'


export const postPaintingData = async () => {
  const data = collectPaintingData()
  const res = (await axios.post('http://localhost:5015/add-painting', { painting: data })).data

  console.log(res)
}

const collectPaintingData = () => {
  const data = {
    category: getCategory(),
    url: getURL(),
    title: getTitle(),
    images: getImagesURLs(),
    painter: getPainter(),
    price: getPrice(),
    props: getProps()
  }

  console.log(data)

  return data
}

const getURL = () => {
  const url = window.location.href.replace('https://socrealizm.com.ua/gallery/painting/', '')

  return url
}

const getImagesURLs = () => {
  const images = findByTagNames<HTMLAnchorElement>(['a'])
    .filter(image => image.classList.contains('cloud-zoom-gallery'))

  if (images.length > 0) {
    const imagesParsed = new Map<string, any>()

    images
      .map(image => ({
        img: image.href,
        title: image.title
      }))
      .forEach(image => imagesParsed.set(image.img, image))

    return [...imagesParsed].map(([_name, value]) => value)
  }

  const singleImage = document.getElementById('photoProduct') as HTMLAnchorElement
  let singleImageTitle: HTMLImageElement = getNthChild(singleImage, 0)
  singleImageTitle = getNthChild(singleImageTitle, 1) as HTMLImageElement

  return [{
    img: singleImage.href,
    title: singleImageTitle.alt
  }]
}

const getTitle = () => {
  const title = findByTagNames<HTMLHeadingElement>(['h1'])[0].textContent

  return title
}

const getPainter = () => {
  let painterLink: HTMLAnchorElement | HTMLDivElement = findByClassNames<HTMLDivElement>(['f-s_0', 'title-product'], ['div'])[0]

  painterLink = getNthChild(painterLink, 1)

  if (!painterLink)
    return undefined

  painterLink = getNthChild(painterLink, 0)
  painterLink = getNthChild<HTMLAnchorElement>(painterLink, 1)

  return ({
    name: painterLink.text,
    url: painterLink.href
  })
}

const getPrice = () => {
  const priceSpan = findByClassNames<HTMLSpanElement>(['price', 'priceVariant'], ['span'])[0]
  const currency = getNthChild(priceSpan.parentNode! as HTMLElement, 0).textContent

  return ({
    price: priceSpan.textContent,
    currency
  })
}

const getProps = () => {
  const trElements = findByTagNames<HTMLTableRowElement>(['tr']).slice(2)

  return trElements.map(tr => ({
    [getNthChild(tr, 0).textContent as string]: getNthChild(tr, 1).textContent as string
  }))
  .reduce((a, b) => ({ ...a, ...b }), {})
}

const getCategory = () => {
  let category = findByClassNames(['btn-crumb'], ['li'])[1]

  category = getNthChild(category, 0)
  category = getNthChild(category, 0)

  return category.innerText.replace('>', '')
}
