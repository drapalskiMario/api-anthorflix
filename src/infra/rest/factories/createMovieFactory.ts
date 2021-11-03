import { Request, Response } from 'express'
import { CreateMovie } from '../../../usecase/movies/service/createMovie'
import { MongoDbRepository } from '../../database/repositories/mongoDbRepository'
import MovieModel from '../../database/schemas/movieSchema'
import { DtoValidators } from '../../validators/dtosValidator'
import { IdValidator } from '../../validators/idValidator'
import { CreateMovieController } from '../controllers/createMovieController'

export const makeCreateMovieController = async (req?: Request, res?: Response) => {
  const createMovieDtoValidator = new DtoValidators()
  const idValidator = new IdValidator()
  const createMovieRepository = new MongoDbRepository(MovieModel, idValidator)
  const createMovieService = new CreateMovie(createMovieDtoValidator, createMovieRepository)
  const createMovieController = new CreateMovieController(createMovieService)

  return createMovieController.handle(req, res)
}
