import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express().use(cors()).use(express.json()).use(router)

app.listen(3333, () => {
  console.log('Server running')
})
