const findByClassNames = <T = HTMLElement>(
  classNames: string[],
  tagNames: string[] = ['div', 'a', 'span', 'h1']
) => {
  if (!Array.isArray(classNames))
    return []

  const allElements = findByTagNames<T>(tagNames)
  const filteredElements = allElements.filter(element =>
    classNames
      .map(className => (element as HTMLElement).className.includes(className))
      .reduce((a, b) => a && b)
  )

  return filteredElements
}

const findByTagNames = <T = HTMLElement>(
  tagNames: string[]
) => {
  const allElements: T[] = tagNames
    .map(tagName => [...document.getElementsByTagName(tagName)] as T[])
    .reduce((a, b) => [...a, ...b])

  return allElements
}


export {
  findByClassNames,
  findByTagNames
}