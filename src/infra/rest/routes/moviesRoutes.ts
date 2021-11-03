/* eslint-disable no-undef */
import { Router } from 'express'
import { makeCreateMovieController } from '../factories/createMovieFactory'
import { makeFindMoviController } from '../factories/findMovieFactory'

const movieRouter = Router()

movieRouter.post('/movies', makeCreateMovieController)
movieRouter.get('/movies', makeFindMoviController)
movieRouter.get('/movies/:id', makeFindMoviController)

export { movieRouter }
