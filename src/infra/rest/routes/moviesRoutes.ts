/* eslint-disable no-undef */
import { Router } from 'express'
import { makeCreateMovieController } from '../factories/createMovieFactory'

const movieRouter = Router()

movieRouter.post('/movies', makeCreateMovieController)

export { movieRouter }
