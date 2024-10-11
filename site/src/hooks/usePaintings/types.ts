export type PaintingType = {
  category: string,
  url: string,
  title: string,
  images: PaintingImgType[],
  painter?: PaintingPainterType,
  price: PaintingPriceType,
  props: {
    [key: string]: string
  }
}

export type PaintingImgType = {
  img: string
  title: string
}

export type PaintingPainterType = {
  name: string
  url: string
}

export type PaintingPriceType = {
  price: string
  currency: string
}
