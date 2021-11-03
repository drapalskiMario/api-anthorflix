import { Request, Response } from 'express'
import { DeleteMovie } from '../../../usecase/movies/service/deleteMovie'
import { MongoDbRepository } from '../../database/repositories/mongoDbRepository'
import MovieModel from '../../database/schemas/movieSchema'
import { IdValidator } from '../../validators/idValidator'
import { DeleteMovieController } from '../controllers/deleteMovieController'

export const makeDeleteMovieController = async (req?: Request, res?: Response) => {
  const idValidator = new IdValidator()
  const findAndDeleteMovieRepository = new MongoDbRepository(MovieModel, idValidator)
  const deleteMovie = new DeleteMovie(findAndDeleteMovieRepository, findAndDeleteMovieRepository)
  const deleteMovieController = new DeleteMovieController(deleteMovie)

  return deleteMovieController.handle(req, res)
}
