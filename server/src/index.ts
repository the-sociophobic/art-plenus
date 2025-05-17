import express, { Request, Responce } from 'express'
import cors from 'cors'
import 'dotenv/config'

import storage from './utils/storage'
import scrapedVocabulary from './utils/scrapedVocabulary'
import { FoundArtistsRequestType, FoundArtistsResponceType } from 'types/requests.type'
import { ArtistType } from 'types/index.types'



const app = express()
app.use(cors())
app.use(express.json())

const { SERVER_PORT } = process.env


// app.post('/add-painting', async (request: Request, response: Responce) => {
//   const { painting } = request.body

//   storage.push('paintings.json', painting)
  
//   response.send(true)
// })

// app.post('/add-artist', async (request: Request, response: Responce) => {
//   const { artist } = request.body

//   storage.push('artists.json', artist)
  
//   response.send(true)
// })

// app.post('/add-artists', async (request: Request, response: Responce) => {
//   const { artists } = request.body

//   storage.pushArray('artists.json', artists)
  
//   response.send(true)
// })

// app.get('/join-scraped', async (request: Request, response: Responce) => {
//   let sum = 0
//   for await (const letter of scrapedVocabulary) {
//     const file = await storage.read(letter + '.json')

//     if (!file)
//       console.log(`${letter} -`)
//     else {
//       // await storage.pushArray('all.json', file as any[])
//       // console.log(`${letter} ${(file as any[]).length}`)
//       sum += (file as any[]).length
//     }
//   }

//   console.log('sum', sum)

//   const file = await storage.read('all.json')
//   if (file)
//     console.log('file', (file as any[]).length)
//   response.send(true)
// })

// app.get('/split-scraped', async (request: Request, response: Responce) => {
//   let sum = 0
//   for await (const letter of scrapedVocabulary) {
//     const file = await storage.read(letter + '.json')

//     if (!file)
//       console.log(`${letter} -`)
//     else {
//       // await storage.pushArray('all.json', file as any[])
//       // console.log(`${letter} ${(file as any[]).length}`)
//       sum += (file as any[]).length
//     }
//   }

//   console.log('sum', sum)

//   const file = await storage.read('all.json')
//   if (file)
//     console.log('file', (file as any[]).length)
//   response.send(true)
// })

const ARTISTS_PER_PAGE = 30

app.post('/found-artists', async (
  request: Request<{}, {}, FoundArtistsRequestType>,
  response: Responce<FoundArtistsResponceType>
) => {
  const { body: { query, page } } = request
  const artists = (await storage.read<ArtistType[]>('all.json')) || []
  const _startFrom = (parseInt(page) - 1) * ARTISTS_PER_PAGE
  const startFrom = typeof _startFrom === 'number' && _startFrom < artists.length ? _startFrom : 0
  
  const filteredArtists = artists
    .filter(artist =>
      artist.title.toLowerCase()
        .includes(query.toLowerCase()))

  const artistsOnPage = filteredArtists
    .slice(startFrom, startFrom + ARTISTS_PER_PAGE)

  const res: FoundArtistsResponceType = {
    artists: artistsOnPage,
    numberOfPages: Math.ceil(filteredArtists.length / ARTISTS_PER_PAGE)
  }

  response.send(res)
})

const init = () => {
  app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))
}

init()
