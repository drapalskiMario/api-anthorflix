import { DeleteMovieRepository } from '../../../interfaceAdapters/repositories/movie/deleteMovieRepository'
import { FindMovieByIdRepository } from '../../../interfaceAdapters/repositories/movie/findMovieByIdRepository'
import { ErrorResponse, Response, SuccessResponse } from '../../utils/responses'

export class DeleteMovie {
  constructor (
    private readonly findMovieByIdRepository: FindMovieByIdRepository,
    private readonly deleteMovieRepository: DeleteMovieRepository
  ) { }

  async delete (id: string): Promise<Response> {
    const movie = await this.findMovieByIdRepository.findById(id)
    if (!movie) {
      return ErrorResponse(`movie with id: ${id} not found`)
    }
    const movieDeleted = await this.deleteMovieRepository.delete(id)
    if (!movieDeleted) {
      return ErrorResponse('error in film delete')
    }
    return SuccessResponse('successfully deleted movie')
  }
}
