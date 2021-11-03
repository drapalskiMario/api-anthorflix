import { Request, Response } from 'express'
import { FindMovie } from '../../../usecase/movies/service/findMovie'
import { MongoDbRepository } from '../../database/repositories/mongoDbRepository'
import MovieModel from '../../database/schemas/movieSchema'
import { IdValidator } from '../../validators/idValidator'
import { FindMovieController } from '../controllers/findMovieController'

export const makeFindMoviController = async (req?: Request, res?: Response) => {
  const idValidator = new IdValidator()
  const findMoviesRepository = new MongoDbRepository(MovieModel, idValidator)
  const findMovieByIdRepository = new MongoDbRepository(MovieModel, idValidator)
  const findMovieService = new FindMovie(findMoviesRepository, findMovieByIdRepository)
  const findMovieController = new FindMovieController(findMovieService)

  return findMovieController.handle(req, res)
}
