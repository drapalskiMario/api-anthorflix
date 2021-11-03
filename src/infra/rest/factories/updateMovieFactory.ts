import { Request, Response } from 'express'
import { UpdateMovie } from '../../../usecase/movies/service/updateMovie'
import { MongoDbRepository } from '../../database/repositories/mongoDbRepository'
import MovieModel from '../../database/schemas/movieSchema'
import { DtoValidators } from '../../validators/dtosValidator'
import { IdValidator } from '../../validators/idValidator'
import { UpdateMovieController } from '../controllers/updateMovieController'

export const makeUpdateMovieController = async (req?: Request, res?: Response) => {
  const updateMovieDtoValidator = new DtoValidators()
  const idValidator = new IdValidator()
  const findMovieAndUpdateRepository = new MongoDbRepository(MovieModel, idValidator)
  const updateMovieService = new UpdateMovie(updateMovieDtoValidator, findMovieAndUpdateRepository, findMovieAndUpdateRepository)
  const updateMovieController = new UpdateMovieController(updateMovieService)

  return updateMovieController.handle(req, res)
}
