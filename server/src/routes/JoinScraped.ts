import { Request, Responce } from 'express'

import storage from '../utils/storage'
import { JoinScrapedRequestType, JoinScrapedResponceType } from '../types/requests.type'
import scrapedVocabulary from '../utils/scrapedVocabulary'
import { ArtistType } from '../types/index.types'


const JoinScraped = async (
  request: Request<{}, {}, JoinScrapedRequestType>,
  response: Responce<JoinScrapedResponceType>
) => {
  let sum = 0
  for await (const letter of scrapedVocabulary) {
    const file = await storage.read<ArtistType[]>(letter + '.json')

    if (!file)
      console.log(`${letter} -`)
    else {
      await storage.pushArray('all.json', file)
      console.log(`${letter} ${file.length}`)
      sum += (file as any[]).length

      // const foundLefTor = file.find(artist => artist.title.includes('Лефтор'))
      // if (foundLefTor)
      //   console.log('foundLefTor', foundLefTor)
    }
  }

  console.log('sum', sum)

  const file = await storage.read('all.json')
  if (file)
    console.log('file', (file as any[]).length)
  response.send(true)
}


export default JoinScraped
