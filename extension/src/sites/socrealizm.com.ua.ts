import { getNthChild } from '../utils/coordinates'
import { findByClassNames, findByTagNames } from '../utils/find'

export const insertButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Скачать'
  button.style.cursor = 'pointer'
  button.style.backgroundColor = 'white'
  button.style.height = '70px'
  button.style.paddingLeft = '15px'
  button.style.paddingRight = '15px'
  button.style.borderRadius = '15px'
  button.style.border = '2px solid black'
  button.style.fontWeight = 'bold'
  button.style.position = 'fixed'
  button.style.zIndex = '10000'
  button.style.top = '100px'
  button.style.right = '100px'
  button.onclick = collectData

  document.body.appendChild(button)
}

const collectData = () => {
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

  if (images.length > 0)
    return images
      // .slice(0, Math.floor(images.length / 2))
      .map(image => ({
        img: image.href,
        title: image.title
      }))

  const singleImage = document.getElementById('photoProduct') as HTMLAnchorElement
  let singleImageTitle: HTMLImageElement = getNthChild(singleImage, 0)
  singleImageTitle = getNthChild(singleImageTitle, 1) as HTMLImageElement

  return ({
    img: singleImage.href,
    title: singleImageTitle.alt
  })
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
