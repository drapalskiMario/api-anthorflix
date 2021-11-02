import { FindMovieByIdRepository } from '../../../interfaceAdapters/repositories/movie/findMovieByIdRepository'
import { FindMoviesRepository } from '../../../interfaceAdapters/repositories/movie/findMoviesRepository'
import { ErrorResponse, Response, SuccessResponse } from '../../utils/responses'

export class FindMovie {
  constructor (
    private readonly findMoviesRepository: FindMoviesRepository,
    private readonly findMovieByIdRepository: FindMovieByIdRepository
  ) {}

  async find (id?: string): Promise<Response> {
    if (id) {
      const movie = await this.findMovieByIdRepository.findById(id)
      if (!movie) {
        return ErrorResponse(`movie with id: ${id} not found`)
      }
      return SuccessResponse(movie)
    }
    const movies = await this.findMoviesRepository.findAll()
    return SuccessResponse(movies)
  }
}
