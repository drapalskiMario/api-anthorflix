import { FindMovieByIdRepository } from '../../../interfaceAdapters/repositories/movie/findMovieByIdRepository'
import { UpdateMovieRepository } from '../../../interfaceAdapters/repositories/movie/updateMovieRepository'
import { UpdateMovieDtoValidator } from '../../../interfaceAdapters/validators/movie/updateMovieDtoValidator'
import { ErrorResponse, Response, SuccessResponse } from '../../utils/responses'
import { UpdateMovieDto } from '../dtos/updateMovieDto'

export class UpdateMovie {
  constructor (
    private readonly updateMovieDtoValidator: UpdateMovieDtoValidator,
    private readonly findMovieByIdRepository: FindMovieByIdRepository,
    private readonly updateMovieRepository: UpdateMovieRepository
  ) { }

  async update (id: string, updateMovieDto: UpdateMovieDto): Promise<Response> {
    const errors = await this.updateMovieDtoValidator.validate(updateMovieDto)
    if (errors) {
      return ErrorResponse('invalid params')
    }
    const movie = await this.findMovieByIdRepository.findById(id)
    if (!movie) {
      return ErrorResponse(`movie with id: ${id} not found`)
    }
    const movieUpdated = await this.updateMovieRepository.update(id, updateMovieDto)
    if (!movieUpdated) {
      return ErrorResponse('error in film update')
    }
    return SuccessResponse('successfully updated movie')
  }
}
