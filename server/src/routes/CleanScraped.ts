import { Request, Responce } from 'express'

import storage from '../utils/storage'
import { CleanScrapedRequestType, CleanScrapedResponceType } from '../types/requests.type'
import { ArtistType } from '../types/index.types'


const BAD_PARAGRAPH_PATTERN = 'Найдено'
const findBadParagraphIndex = (paragraphs: string[]) => {
  const badParagraphIndex = paragraphs
    .findIndex(paragraph => paragraph === BAD_PARAGRAPH_PATTERN)

  return badParagraphIndex
}


const CleanScraped = async (
  request: Request<{}, {}, CleanScrapedRequestType>,
  response: Responce<CleanScrapedResponceType>
) => {
  const artists = await storage.read<ArtistType[]>('all.json')

  const cleanArtists = artists.map(artist => {
    const { description } = artist
    const badIndex = findBadParagraphIndex(description)
    const cleanDescription = description.slice(0, badIndex)
    const cleanArtist = { ...artist, description: cleanDescription }

    return cleanArtist
  })

  await storage.write('all.json', cleanArtists)

  response.send(true)
}


export default CleanScraped
