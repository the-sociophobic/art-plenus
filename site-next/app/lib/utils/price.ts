const printPrice = (_price: number) => {
  const price = Math.abs(_price)
  const priceString = price.toFixed(0) + ''
  const priceStringOffset = priceString.length % 3 - 1
  const priceWithSpaces = [...priceString].map((char, charIndex) =>
    charIndex >= priceStringOffset && (charIndex - priceStringOffset) % 3 === 0 ?
      char + ' '
      :
      char
  ).join('')
  const priceWithSign = Math.sign(_price) === -1 ? `-${priceWithSpaces}` : priceWithSpaces

  return priceWithSign + ' RUB'
}


export {
  printPrice,
}
