import express, { Request, Responce } from 'express'
import cors from 'cors'
import 'dotenv/config'

import storage from './utils/storage'



const app = express()
app.use(cors())
app.use(express.json())

const { SERVER_PORT } = process.env


app.post('/add-painting', async (request: Request, response: Responce) => {
  const { painting } = request.body

  storage.push('paintings.json', painting)
  
  response.send(true)
})


const init = () => {
  app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))
}

init()
