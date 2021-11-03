/* eslint-disable no-undef */
import { Router } from 'express'
import { makeCreateMovieController } from '../factories/createMovieFactory'
import { makeDeleteMovieController } from '../factories/deleteMovieFactory'
import { makeFindMoviController } from '../factories/findMovieFactory'
import { makeUpdateMovieController } from '../factories/updateMovieFactory'

const movieRouter = Router()

movieRouter.post('/movies', makeCreateMovieController)
movieRouter.get('/movies', makeFindMoviController)
movieRouter.get('/movies/:id', makeFindMoviController)
movieRouter.put('/movies/:id', makeUpdateMovieController)
movieRouter.delete('/movies/:id', makeDeleteMovieController)

export { movieRouter }
