import { StaticImageData } from 'next/image'


export type ArtistType = {
  url: string
  title: string
  image: string
  description: string[]
  birthDate?: string
  deathDate?: string
}

export type PaintingType = {
  url: string
  title: string
  price: string
  image: string | StaticImageData
}

