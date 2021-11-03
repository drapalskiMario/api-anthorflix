import express from 'express'
import cors from 'cors'
import { movieRouter } from './routes/moviesRoutes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', movieRouter)

export { app }
